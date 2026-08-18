"use client";
import { useEffect, useState, useCallback } from "react";

/* ------------------------------------------------------------------
   /admin — lightweight panel so the team (Tammy included) can edit
   the site without touching code.

   Tabs
     · Events    → K-Startups Events upcoming list
     · Insights  → LinkedIn post carousel
     · Inbox     → structured intake submissions (read + delete)

   Auth: password checked server-side (ADMIN_PASSWORD env) on every
   API call; the panel keeps it in sessionStorage for the session.
   All copy in Korean — this page is internal.
------------------------------------------------------------------- */

const EVENT_FIELDS = [
  ["tag", "Tag (EN)", "Demo Day"],
  ["tag_ko", "태그 (KO)", "데모데이"],
  ["title", "Title (EN)", "K-FinTech × Singapore"],
  ["title_ko", "제목 (KO)", "K-핀테크 × 싱가포르"],
  ["when_text", "When (EN)", "Q1 · Singapore"],
  ["when_ko", "시기 (KO)", "1분기 · 싱가포르"],
  ["sort", "정렬 순서 (숫자)", "1"],
];
const INSIGHT_FIELDS = [
  ["title", "Title (EN)", "Dimension X — the gateway…"],
  ["title_ko", "제목 (KO)", "딥테크 스타트업의 싱가포르 진출 관문…"],
  ["source", "출처 (linkedin / medium / article)", "linkedin"],
  ["tag", "Tag (EN)", "Market entry"],
  ["tag_ko", "태그 (KO)", "시장 진출"],
  ["url", "포스트/기사 URL", "https://www.linkedin.com/posts/… 또는 https://medium.com/…"],
  ["date_label", "날짜 표기", "2026.07"],
  ["sort", "정렬 순서 (숫자)", "1"],
];

const NEWSLETTER_FIELDS = [
  ["slug", "URL 아이디 (숫자/영문, 예: 2)", "2"],
  ["vol", "호수 표기", "Vol. 2"],
  ["title", "Title (EN)", "September highlights"],
  ["title_ko", "제목 (KO)", "9월의 하이라이트"],
  ["date_label", "발행월 (EN)", "September 2026"],
  ["date_label_ko", "발행월 (KO)", "2026년 9월"],
  ["sort", "정렬 순서 (숫자)", "2"],
];

/* /admin에서 "본문 템플릿 불러오기"를 누르면 채워지는 data(jsonb) 뼈대.
   비울 섹션은 키째로 지우면 페이지에서 렌더링되지 않습니다. */
const NEWSLETTER_DATA_TEMPLATE = JSON.stringify(
  {
    intro: "Hello from K-Innovation Partners! ...",
    intro_ko: "K-Innovation Partners입니다! ...",
    highlight: {
      emoji: "🎉",
      title: "Event name",
      title_ko: "이벤트명",
      rows: [
        { k: "When", k_ko: "일시", v: "…", v_ko: "…" },
        { k: "Where", k_ko: "장소", v: "…", v_ko: "…" },
        { k: "What", k_ko: "내용", v: "…", v_ko: "…" },
      ],
      links: [{ label: "Sign up", label_ko: "신청하기", href: "/contact" }],
    },
    events: [
      { tag: "Demo Day", tag_ko: "데모데이", title: "…", title_ko: "…", when: "…", when_ko: "…" },
    ],
    spotlight: {
      slug: "willog",
      name: "Company Inc.",
      programme: "KIMST · Track 1",
      sector: "…",
      sector_ko: "…",
      blurb: "…",
      blurb_ko: "…",
      href: "/startups/willog",
    },
    services: {
      emoji: "💼",
      title: "IR deck review & expert advisory",
      title_ko: "IR 덱 리뷰 & 전문가 자문",
      body: "…",
      body_ko: "…",
      cta: "Request a review",
      cta_ko: "리뷰 요청하기",
      href: "mailto:hello@lodestart.ai",
    },
  },
  null,
  2
);

const empty = (fields) =>
  Object.fromEntries(fields.map(([k]) => [k, k === "sort" ? "99" : ""]));

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [err, setErr] = useState("");
  const [tab, setTab] = useState("events");
  const [rows, setRows] = useState([]);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState(empty(EVENT_FIELDS));
  const [dataText, setDataText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fields =
    tab === "events" ? EVENT_FIELDS
    : tab === "newsletter_issues" ? NEWSLETTER_FIELDS
    : INSIGHT_FIELDS;

  const api = useCallback(
    async (method, table, body) => {
      const res = await fetch(`/api/admin/${table}`, {
        method,
        headers: { "x-admin-key": key, "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!res.ok) throw new Error((await res.json()).error ?? res.status);
      return res.json();
    },
    [key]
  );

  const load = useCallback(
    async (t = tab) => {
      setBusy(true);
      setErr("");
      try {
        setRows(await api("GET", t));
      } catch (e) {
        setErr(String(e.message ?? e));
        setRows([]);
      } finally {
        setBusy(false);
      }
    },
    [api, tab]
  );

  /* restore session */
  useEffect(() => {
    const saved = sessionStorage.getItem("adm");
    if (saved) {
      setKey(saved);
      setAuthed(true);
    }
  }, []);
  useEffect(() => {
    if (authed && key) load();
  }, [authed, tab]); // eslint-disable-line react-hooks/exhaustive-deps

  const login = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const res = await fetch("/api/admin/events", { headers: { "x-admin-key": key } });
      if (res.status === 401) return setErr("비밀번호가 틀렸습니다.");
      if (res.status === 503) {
        const msg = (await res.json()).error;
        return setErr(`서버 설정 필요: ${msg} — SUPABASE_SETUP.md 참고`);
      }
      if (!res.ok) {
        /* 비밀번호는 통과했는데 Supabase 쪽에서 막힌 경우 — 실제 메시지를 그대로 보여준다 */
        let detail = "";
        try { detail = (await res.json()).error ?? ""; } catch { /* 본문 없음 */ }
        return setErr(`오류 (${res.status})${detail ? ` — ${detail}` : ""}`);
      }
      sessionStorage.setItem("adm", key);
      setAuthed(true);
      setRows(await res.json());
    } catch {
      setErr("네트워크 오류");
    }
  };

  const save = async (e) => {
    e.preventDefault();
    const payload = { ...draft, sort: Number(draft.sort) || 99, published: draft.published ?? true };
    if (tab === "newsletter_issues") {
      try {
        payload.data = dataText.trim() ? JSON.parse(dataText) : {};
      } catch {
        return setErr("본문 JSON 형식이 잘못됐습니다 — 괄호/따옴표/쉼표를 확인하세요.");
      }
    }
    try {
      if (editingId != null) await api("PATCH", tab, { id: editingId, ...payload });
      else await api("POST", tab, payload);
      setDraft(empty(fields));
      setDataText("");
      setEditingId(null);
      load();
    } catch (e2) {
      setErr(String(e2.message ?? e2));
    }
  };

  const togglePub = (r) => api("PATCH", tab, { id: r.id, published: !r.published }).then(() => load());
  const del = (r) => {
    if (!confirm("삭제할까요? 되돌릴 수 없습니다.")) return;
    api("DELETE", tab, { id: r.id }).then(() => load());
  };
  const startEdit = (r) => {
    setEditingId(r.id);
    setDraft(Object.fromEntries(fields.map(([k]) => [k, r[k] ?? ""])));
    if (tab === "newsletter_issues")
      setDataText(r.data ? JSON.stringify(r.data, null, 2) : "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!authed)
    return (
      <section className="section" style={{ minHeight: "70vh" }}>
        <div className="wrap" style={{ maxWidth: 420 }}>
          <form onSubmit={login} className="side-card" style={{ padding: 30 }}>
            <h1 className="h-section" style={{ fontSize: 24, marginBottom: 6 }}>Admin</h1>
            <p style={{ fontSize: 13.5, color: "var(--ink-faint)", marginBottom: 18 }}>
              팀 전용 페이지입니다.
            </p>
            <input
              type="password"
              className="nl-input"
              placeholder="비밀번호"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              autoFocus
            />
            <button className="btn btn-black" style={{ width: "100%" }}>들어가기</button>
            {err && <p className="adm-err">{err}</p>}
          </form>
        </div>
      </section>
    );

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 980 }}>
        <div className="adm-head">
          <h1 className="h-section" style={{ fontSize: 26 }}>사이트 관리</h1>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              sessionStorage.removeItem("adm");
              setAuthed(false);
              setKey("");
            }}
          >
            로그아웃
          </button>
        </div>

        <div className="adm-tabs">
          {[
            ["events", "이벤트"],
            ["insights", "인사이트 (링크드인)"],
            ["newsletter_issues", "먼슬리 (뉴스레터)"],
            ["intake", "문의 인박스"],
          ].map(([v, label]) => (
            <button
              key={v}
              className={`f-chip ${tab === v ? "active" : ""}`}
              onClick={() => {
                setTab(v);
                setEditingId(null);
                setDraft(empty(
                  v === "events" ? EVENT_FIELDS
                  : v === "newsletter_issues" ? NEWSLETTER_FIELDS
                  : INSIGHT_FIELDS
                ));
                setDataText("");
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {err && <p className="adm-err">{err}</p>}
        {busy && <p style={{ color: "var(--ink-faint)", fontSize: 13 }}>불러오는 중…</p>}

        {tab !== "intake" && (
          <form onSubmit={save} className="adm-form side-card">
            <b style={{ fontSize: 14 }}>{editingId != null ? "항목 수정" : "새 항목 추가"}</b>
            <div className="adm-grid">
              {fields.map(([k, label, ph]) => (
                <label key={k} className="adm-field">
                  <span>{label}</span>
                  <input
                    className="nl-input"
                    style={{ marginBottom: 0 }}
                    placeholder={ph}
                    value={draft[k] ?? ""}
                    onChange={(e) => setDraft({ ...draft, [k]: e.target.value })}
                    required={["title", "url"].includes(k)}
                  />
                </label>
              ))}
            </div>
            {tab === "newsletter_issues" && (
              <label className="adm-field" style={{ display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  본문 JSON (intro / highlight / events / spotlight / services)
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setDataText(NEWSLETTER_DATA_TEMPLATE)}
                  >
                    본문 템플릿 불러오기
                  </button>
                </span>
                <textarea
                  className="nl-input"
                  style={{ marginBottom: 0, minHeight: 260, fontFamily: "ui-monospace, monospace", fontSize: 12.5, lineHeight: 1.55 }}
                  placeholder='{"intro": "...", "events": [...] } — 우측 버튼으로 템플릿을 불러와 수정하세요'
                  value={dataText}
                  onChange={(e) => setDataText(e.target.value)}
                />
                <span style={{ fontSize: 11.5, color: "var(--ink-faint)" }}>
                  섹션을 빼려면 해당 키를 통째로 지우면 됩니다. 저장 전 JSON 형식을 검사합니다.
                </span>
              </label>
            )}
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn btn-orange btn-sm">{editingId != null ? "저장" : "추가"}</button>
              {editingId != null && (
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    setEditingId(null);
                    setDraft(empty(fields));
                  }}
                >
                  취소
                </button>
              )}
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-faint)" }}>
              추가/수정 후 사이트 반영은 최대 5분 걸립니다 (캐시).
            </p>
          </form>
        )}

        <div className="adm-list">
          {rows.map((r) => (
            <div key={r.id} className={`adm-row ${r.published === false ? "off" : ""}`}>
              {tab === "intake" ? (
                <div className="adm-row-main">
                  <b>{r.name} · {r.org}</b>
                  <span className="adm-sub">{r.email} · {r.profile} · {r.intents}</span>
                  <p className="adm-msg">{r.message}</p>
                  <span className="adm-sub">{new Date(r.created_at).toLocaleString()}</span>
                </div>
              ) : (
                <div className="adm-row-main">
                  <b>{r.title}</b>
                  <span className="adm-sub">
                    {r.title_ko} · {tab === "events" ? r.when_text : r.date_label} · sort {r.sort}
                    {tab === "newsletter_issues" && r.slug && (
                      <>
                        {" · "}
                        <a href={`/insights/monthly/${r.slug}`} target="_blank" rel="noreferrer" style={{ color: "var(--orange-dark)" }}>
                          /insights/monthly/{r.slug} ↗
                        </a>
                      </>
                    )}
                  </span>
                </div>
              )}
              <div className="adm-actions">
                {tab !== "intake" && (
                  <>
                    <button className="btn btn-outline btn-sm" onClick={() => togglePub(r)}>
                      {r.published === false ? "비공개 → 공개" : "공개 중"}
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={() => startEdit(r)}>수정</button>
                  </>
                )}
                <button className="btn btn-outline btn-sm adm-del" onClick={() => del(r)}>삭제</button>
              </div>
            </div>
          ))}
          {!busy && rows.length === 0 && !err && (
            <p style={{ color: "var(--ink-faint)", fontSize: 13.5, padding: "24px 0" }}>
              아직 항목이 없습니다.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
