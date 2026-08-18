/* ------------------------------------------------------------------
   KIP Monthly — newsletter issues.

   Format benchmarked from 82 Startup (Sazze Partners' US Korean
   founder community, forwarded by Tammy 2026-08): one curator, a
   handful of items, every event reduced to When / Where / What /
   Sign-up, and a standing "submit for next month" call so the
   community supplies the content.

   Every fact below is sourced from lib/data.js (PROGRAMMES /
   STARTUPS) or the Tammy-confirmed Events list — nothing invented.
   Adding an issue = append an object; the archive card on /insights
   and the static route both derive from this array.
------------------------------------------------------------------- */

export const NEWSLETTER_ISSUES = [
  {
    id: "1",
    vol: "Vol. 1",
    dateLabel: "August 2026",
    dateLabel_ko: "2026년 8월",
    title: "K-Marine Tech Week lands in Singapore",
    title_ko: "K-마린테크 위크, 싱가포르에 오다",
    intro:
      "Hello from K-Innovation Partners! Each month we round up what's moving across the Korea–Singapore innovation bridge — programmes, events, and one company worth your attention. Have news, an event, or an IR deck to share? Submissions for next month are open at the bottom.",
    intro_ko:
      "K-Innovation Partners입니다! 매달 한국–싱가포르 이노베이션 브리지에서 벌어지는 소식을 모아 전합니다 — 프로그램, 이벤트, 그리고 주목할 기업 한 곳. 공유할 소식·이벤트·IR 덱이 있다면 하단에서 다음 호 제보를 받습니다.",

    /* -------- headline item -------- */
    highlight: {
      emoji: "🎉",
      title: "K-Marine Tech Open Innovation Week",
      title_ko: "K-마린테크 오픈 이노베이션 위크",
      rows: [
        { k: "When", k_ko: "일시", v: "26 Aug – 9 Sep 2026", v_ko: "2026. 8. 26 – 9. 9" },
        { k: "Where", k_ko: "장소", v: "Singapore", v_ko: "싱가포르" },
        {
          k: "What",
          k_ko: "내용",
          v: "Hosted by KIMST (Korea Institute of Marine Science & Technology Promotion), co-organised with MYSC. Eight Korean marine-tech and food-tech companies — Track 1 marine engineering & logistics, Track 2 food tech — meet Singapore corporates and investors for two weeks of matched sessions.",
          v_ko: "해양수산과학기술진흥원(KIMST) 주최, MYSC 공동주관. 한국 마린테크·푸드테크 8개사가 — Track 1 해양엔지니어링·물류, Track 2 푸드테크 — 2주간 싱가포르 기업·투자자와 매칭 세션을 갖습니다.",
        },
      ],
      links: [
        { label: "Meet the 8 companies", label_ko: "참가 8개사 보기", href: "/startups?programme=kimst" },
        { label: "Book a 1:1 meeting", label_ko: "1:1 미팅 신청", href: "/contact" },
      ],
    },

    /* -------- upcoming (Tammy-confirmed list — do not edit) -------- */
    events: [
      { tag: "Demo Day", tag_ko: "데모데이", title: "K-FinTech × Singapore", title_ko: "K-핀테크 × 싱가포르", when: "Q1 · Singapore", when_ko: "1분기 · 싱가포르" },
      { tag: "Roundtable", tag_ko: "라운드테이블", title: "Regulators & Founders", title_ko: "규제기관 × 창업자", when: "Q2 · Seoul", when_ko: "2분기 · 서울" },
      { tag: "Showcase", tag_ko: "쇼케이스", title: "Deep Tech Korea", title_ko: "딥테크 코리아", when: "Q3 · Singapore", when_ko: "3분기 · 싱가포르" },
      { tag: "Summit", tag_ko: "서밋", title: "K-Startup Global Day", title_ko: "K-스타트업 글로벌 데이", when: "Q4 · Singapore", when_ko: "4분기 · 싱가포르" },
    ],

    /* -------- company spotlight (rotates each issue) -------- */
    spotlight: {
      slug: "willog",
      name: "Willog Inc.",
      programme: "KIMST · Track 1",
      sector: "Marine Logistics / AIoT",
      sector_ko: "해양 물류 / AIoT",
      blurb:
        "Founded in 2021, Willog closes the data blind spots across sea/land transport and warehouse storage with patented IoT sensors and an AI platform tracking location, temperature, humidity, shock, tilt and light. 2025: ₩4.01B revenue, 100+ clients, 100% renewal, 0% churn — now expanding into Southeast Asia through its Singapore entity.",
      blurb_ko:
        "2021년 창업한 윌로그는 특허 IoT 센서와 AI 플랫폼으로 위치·온도·습도·충격·기울기·조도를 추적하며 해상·육상 운송과 창고 보관의 데이터 사각지대를 해소합니다. 2025년 매출 40.1억원, 고객사 100+, 계약갱신율 100%·이탈률 0% — 현재 싱가포르 법인을 거점으로 동남아 진출 중입니다.",
      href: "/startups/willog",
    },

    /* -------- member services (mirrors the Outreach band) -------- */
    services: {
      emoji: "💼",
      title: "IR deck review & expert advisory",
      title_ko: "IR 덱 리뷰 & 전문가 자문",
      body:
        "Preparing to pitch Singapore investors or corporates? Our team reviews IR decks and connects you with domain experts before you go into the room.",
      body_ko:
        "싱가포르 투자자·기업 대상 피칭을 준비 중이신가요? 미팅에 들어가기 전에 IR 덱을 리뷰하고 도메인 전문가를 연결해 드립니다.",
      cta: "Request a review",
      cta_ko: "리뷰 요청하기",
      href: "mailto:hello@lodestart.ai?subject=IR%20deck%20review%20request",
    },
  },
];

export const getIssue = (id) =>
  NEWSLETTER_ISSUES.find((i) => i.id === String(id)) ?? null;
