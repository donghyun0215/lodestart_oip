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
  ["tag", "Tag (EN)", "Market entry"],
  ["tag_ko", "태그 (KO)", "시장 진출"],
  ["url", "LinkedIn URL", "https://www.linkedin.com/posts/…"],
  ["date_label", "날짜 표기", "2026.07"],
  ["sort", "정렬 순서 (숫자)", "1"],
];

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
  const [editingId, setEditingId] = useState(null);

  const fields = tab === "events" ? EVENT_FIELDS : INSIGHT_FIELDS;

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
      if (!res.ok) return setErr(`오류 (${res.status})`);
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
    try {
      if (editingId != null) await api("PATCH", tab, { id: editingId, ...payload });
      else await api("POST", tab, payload);
      setDraft(empty(fields));
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
            ["intake", "문의 인박스"],
          ].map(([v, label]) => (
            <button
              key={v}
              className={`f-chip ${tab === v ? "active" : ""}`}
              onClick={() => {
                setTab(v);
                setEditingId(null);
                setDraft(empty(v === "events" ? EVENT_FIELDS : INSIGHT_FIELDS));
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
