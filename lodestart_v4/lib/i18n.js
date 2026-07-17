// ============================================================
// UI strings. Content strings (company summaries, call
// descriptions) live alongside their data in lib/data.js as
// `<field>_ko` and are resolved by the `pick` helper below.
// ============================================================

export const STRINGS = {
  en: {
    // nav
    nav_home: "Home",
    nav_companies: "Companies",
    nav_oi: "Open Innovation",
    nav_engagement: "Engagement",
    nav_contact: "Get in Touch",
    logo_sub: "PoC · Open Innovation",

    // home hero
    hero_kicker: "Singapore · Korea",
    hero_title_a: "Where innovative startup solutions meet",
    hero_title_b: "global market leaders",
    hero_sub:
      "LodestarT runs the proof-of-concept and open innovation layer between Korea's proven companies and Singapore's institutions. Every company on this platform is curated, verified, and introduced by us.",
    hero_cta_companies: "View companies",
    hero_cta_oi: "Explore open innovation",
    stat_cohort: "Current cohort",
    stat_companies: "Verified companies",
    stat_orgs: "Demand-side organisations",
    stat_corridor: "Cross-border corridor",

    // home positioning
    pos_kicker: "What this is",
    pos_title: "A curated platform, not a directory",
    pos_sub:
      "Companies are admitted through LodestarT programmes and reviewed before listing. Institutions engage through us, not through an open inbox. That constraint is the product.",
    pos_1_t: "Verified companies",
    pos_1_d:
      "Every company listed has completed a LodestarT programme. Profiles carry funding stage, traction, and a stated PoC objective — the information an institution actually needs before a first meeting.",
    pos_2_t: "Mapped demand",
    pos_2_d:
      "We track Singapore's open innovation calls across IMDA, OIN, EnterpriseSG, and MAS, alongside institutional needs we source directly. Each organisation profile shows how and when they actually engage.",
    pos_3_t: "Managed introductions",
    pos_3_d:
      "No cold outreach. LodestarT prepares the value hypothesis, makes the introduction, and stays in the room through scoping and negotiation.",
    pos_4_t: "Delivered proof of concept",
    pos_4_d:
      "We project-manage the pilot itself — scope, milestones, evaluation reporting — and document the path from a successful PoC to a commercial contract.",

    // home companies
    home_co_kicker: "Companies",
    home_co_title: "Verified and seeking proof of concept",
    home_co_sub:
      "Korean companies with institutional traction at home, now entering Singapore and Southeast Asia.",
    home_co_all: "View all companies",

    // home OI
    home_oi_kicker: "Open Innovation",
    home_oi_title: "Know the counterpart before the first meeting",
    home_oi_sub:
      "For each organisation running open innovation in Singapore, we track call history, funding cadence, focus areas, and how they actually engage — so a company arrives informed rather than hopeful.",
    home_oi_all: "Explore all organisations",

    // flow
    flow_kicker: "Engagement",
    flow_title: "How a proof of concept comes together",
    flow_sub: "The path from listing to signed pilot. LodestarT runs every step.",
    flow_cta: "See what we deliver",

    // trust
    trust_by: "Trusted by",
    trust_partners: "Partners",

    // home CTA
    cta_kicker: "By introduction",
    cta_title: "Access to this platform is curated",
    cta_sub:
      "Companies join through a LodestarT programme. Institutions engage through a conversation with our team. If either sounds like you, start there.",
    cta_btn: "Get in touch",

    // companies page
    co_kicker: "Companies",
    co_title: "Verified through a LodestarT programme",
    co_sub:
      "Each company here has been reviewed by our team and carries institutional traction in its home market. Profiles state the funding round, the problem being solved, and what a proof of concept in Singapore would look like.",
    co_count_one: "company",
    co_count_many: "companies",
    co_in: "in",
    co_all: "All",
    co_view: "View profile",
    co_back: "All companies",

    // company detail sections
    d_overview: "Company overview",
    d_funding: "Funding round",
    d_team: "Team",
    d_problem: "Problem",
    d_opportunity: "Opportunity",
    d_advantage: "Advantage",
    d_solution: "Solution",
    d_model: "Business model",
    d_achievements: "Achievements",
    d_highlights: "Highlights",
    d_get_touch: "Get in touch",
    d_intro_note: "Introductions are made by the LodestarT team.",
    d_website: "Website",
    d_hq: "Headquarters",
    d_hosts: "Hosts",

    // open innovation page
    oi_kicker: "Open Innovation",
    oi_title: "Find the counterpart for your proof of concept",
    oi_sub:
      "Live innovation calls from Singapore's agencies, regulators, and corporates — plus institutional needs LodestarT sources directly. Study the counterpart before you approach; we make the introduction.",
    f_search: "Search",
    f_search_ph: "Keyword, owner, or technology — e.g. digital assets, computer vision",
    f_sector: "Sector",
    f_source: "Source",
    f_status: "Status",
    f_reset: "Reset",
    f_all: "All",
    f_open: "Open",
    f_closing: "Closing soon",
    oi_count_one: "call",
    oi_count_many: "calls",
    oi_filters_applied: "filters applied",
    oi_filter_applied: "filter applied",
    oi_none: "No calls match those filters. Try clearing one, or reset.",
    oi_sample:
      "Calls shown are representative for design review — live listings will sync from source platforms.",
    oi_counterparts_kicker: "Counterparts",
    oi_counterparts_title: "Know the organisation before the first meeting",
    oi_counterparts_sub:
      "For each body running open innovation here, we track call history, funding cadence, focus areas, and how they actually engage.",
    oi_calls_12mo: "Calls (12mo)",
    oi_funding: "Funding",
    oi_end_date: "End Date:",
    oi_closing_soon: "Closing soon ·",

    // org detail
    org_back: "All organisations",
    org_past12: "Past 12 months",
    org_calls_published: "Calls published",
    org_funding_committed: "Funding committed",
    org_projects_awarded: "Projects awarded",
    org_awarded_value: "Awarded value",
    org_chart_title: "Call volume and funding by month",
    org_legend_calls: "Calls published",
    org_legend_funding: "Funding value (indexed)",
    org_cadence: "Cadence",
    org_engage: "How they engage",
    org_sample:
      "Statistics are illustrative samples for design review — live figures will sync from source platforms.",
    org_open_now: "Currently open",
    org_official: "Official page",
    org_request_match: "Request match",
    org_route_kicker: "Engagement route",
    org_route_title: "LodestarT makes the introduction",
    org_route_sub:
      "We prepare the value hypothesis against this organisation's stated priorities, brief the company, and bring the two sides together — then stay in the room through scoping and negotiation.",
    org_route_cta: "Request an introduction",
    org_matched: "Companies with a potential fit",

    // services
    sv_kicker: "Engagement",
    sv_title: "From listed to landed",
    sv_sub:
      "A listing gets a company seen. Our engagement work gets it signed — briefings, mentoring, curated meetings, and hands-on proof-of-concept delivery, run by a team working both sides of the Korea–Singapore corridor.",
    sv_what_kicker: "What we deliver",
    sv_what_title: "Six services, one outcome",
    sv_what_sub: "Composition is set per company, based on stage and the counterpart being approached.",
    sv_flow_kicker: "The flow",
    sv_flow_title: "How a proof of concept actually comes together",
    sv_flow_sub:
      "We run this end to end. The company shows up prepared; we handle everything around it.",
    sv_cta_kicker: "Next step",
    sv_cta_title: "Let's scope the Singapore entry",
    sv_cta_sub:
      "Tell us where the company stands. We'll tell you honestly what landing a proof of concept here requires.",

    // contact
    ct_kicker: "Get in touch",
    ct_title: "Access is by conversation",
    ct_sub:
      "There is no self-serve sign-up. Companies join through a LodestarT programme; institutions engage through our team. Tell us which side you're on and we'll take it from there.",
    ct_which: "Which describes you?",
    ct_p_company: "I represent a company seeking a proof of concept",
    ct_p_institution: "I represent an institution or corporate with a need",
    ct_p_partner: "I'm a partner, agency, or investor",
    ct_name: "Name",
    ct_org: "Organisation",
    ct_email: "Work email",
    ct_msg_company: "What are you building, and what would a Singapore proof of concept unlock?",
    ct_msg_institution: "What problem are you trying to solve, and what would a successful pilot look like?",
    ct_send: "Send enquiry",
    ct_sent: "Your mail client should have opened. If it didn't, write to hello@lodestart.ai directly.",

    // footer
    ft_blurb:
      "LodestarT connects Korea's proven companies with Singapore's institutions — through curated proof-of-concept engagements and open innovation.",
    ft_navigate: "Navigate",
    ft_contact: "Contact",
    ft_follow: "Follow",
    ft_community: "Community",
    ft_rights: "© 2026 All rights reserved by LodestarT co., Ltd",
  },

  ko: {
    nav_home: "홈",
    nav_companies: "참여 기업",
    nav_oi: "오픈 이노베이션",
    nav_engagement: "지원 서비스",
    nav_contact: "문의하기",
    logo_sub: "PoC · 오픈 이노베이션",

    hero_kicker: "싱가포르 · 한국",
    hero_title_a: "혁신 스타트업의 솔루션이",
    hero_title_b: "글로벌 시장의 리더를 만나는 곳",
    hero_sub:
      "LodestarT는 한국의 검증된 기업과 싱가포르 기관 사이에서 PoC와 오픈 이노베이션을 연결합니다. 본 플랫폼의 모든 기업은 저희가 직접 선별하고 검증하여 소개합니다.",
    hero_cta_companies: "참여 기업 보기",
    hero_cta_oi: "오픈 이노베이션 살펴보기",
    stat_cohort: "현재 기수",
    stat_companies: "검증 기업",
    stat_orgs: "수요 기관",
    stat_corridor: "크로스보더 축",

    pos_kicker: "플랫폼 소개",
    pos_title: "디렉토리가 아닌, 선별된 플랫폼입니다",
    pos_sub:
      "기업은 LodestarT 프로그램을 통해 선발되고 검토를 거쳐 등재됩니다. 기관은 열린 창구가 아니라 저희를 통해 연결됩니다. 그 선별 자체가 이 플랫폼의 가치입니다.",
    pos_1_t: "검증된 기업",
    pos_1_d:
      "등재된 모든 기업은 LodestarT 프로그램을 이수했습니다. 투자 단계, 트랙션, PoC 목표까지 — 기관이 첫 미팅 전에 실제로 필요로 하는 정보를 담았습니다.",
    pos_2_t: "매핑된 수요",
    pos_2_d:
      "IMDA, OIN, EnterpriseSG, MAS 등 싱가포르의 오픈 이노베이션 공고를 추적하고, 저희가 직접 발굴한 기관 니즈를 함께 제공합니다. 각 기관이 언제, 어떻게 협업하는지 보여드립니다.",
    pos_3_t: "관리되는 소개",
    pos_3_d:
      "콜드 아웃리치는 없습니다. LodestarT가 가치 가설을 준비하고, 소개하고, 스코핑과 협상까지 함께합니다.",
    pos_4_t: "실행되는 PoC",
    pos_4_d:
      "파일럿 자체를 직접 관리합니다. 범위 설정, 마일스톤, 평가 리포트까지 — 그리고 성공한 PoC가 본계약으로 이어지는 경로를 문서화합니다.",

    home_co_kicker: "참여 기업",
    home_co_title: "검증을 마치고 PoC를 찾는 기업들",
    home_co_sub: "본국에서 기관 트랙션을 확보하고, 이제 싱가포르와 동남아로 진출하는 한국 기업들입니다.",
    home_co_all: "전체 기업 보기",

    home_oi_kicker: "오픈 이노베이션",
    home_oi_title: "첫 미팅 전에 상대를 파악하세요",
    home_oi_sub:
      "싱가포르에서 오픈 이노베이션을 운영하는 각 기관의 공고 이력, 예산 주기, 관심 분야, 실제 협업 방식을 추적합니다. 막연한 기대가 아니라, 준비된 상태로 만나게 합니다.",
    home_oi_all: "전체 기관 살펴보기",

    flow_kicker: "지원 서비스",
    flow_title: "PoC는 이렇게 성사됩니다",
    flow_sub: "등재부터 계약 체결까지. 모든 단계를 LodestarT가 직접 운영합니다.",
    flow_cta: "제공 서비스 보기",

    trust_by: "함께한 기관",
    trust_partners: "파트너",

    cta_kicker: "소개를 통한 참여",
    cta_title: "본 플랫폼은 선별된 곳입니다",
    cta_sub:
      "기업은 LodestarT 프로그램을 통해, 기관은 저희 팀과의 대화를 통해 참여합니다. 어느 쪽이든 여기서 시작하세요.",
    cta_btn: "문의하기",

    co_kicker: "참여 기업",
    co_title: "LodestarT 프로그램을 통해 검증된 기업",
    co_sub:
      "모든 기업은 저희 팀의 검토를 거쳤으며, 본국 시장에서 기관 트랙션을 보유하고 있습니다. 각 프로필에는 투자 라운드, 해결하는 문제, 싱가포르에서의 PoC 목표가 담겨 있습니다.",
    co_count_one: "개 기업",
    co_count_many: "개 기업",
    co_in: "·",
    co_all: "전체",
    co_view: "프로필 보기",
    co_back: "전체 기업",

    d_overview: "기업 개요",
    d_funding: "투자 라운드",
    d_team: "팀",
    d_problem: "문제",
    d_opportunity: "기회",
    d_advantage: "경쟁 우위",
    d_solution: "솔루션",
    d_model: "비즈니스 모델",
    d_achievements: "주요 성과",
    d_highlights: "하이라이트",
    d_get_touch: "문의하기",
    d_intro_note: "모든 소개는 LodestarT 팀을 통해 이루어집니다.",
    d_website: "웹사이트",
    d_hq: "본사",
    d_hosts: "호스트",

    oi_kicker: "오픈 이노베이션",
    oi_title: "PoC를 함께할 상대를 찾으세요",
    oi_sub:
      "싱가포르 정부기관, 규제기관, 대기업의 현재 진행 중인 공고와 LodestarT가 직접 발굴한 기관 니즈를 함께 제공합니다. 접근 전에 상대를 파악하시면, 소개는 저희가 합니다.",
    f_search: "검색",
    f_search_ph: "키워드, 발주기관, 기술 — 예: 디지털 자산, 컴퓨터 비전",
    f_sector: "분야",
    f_source: "출처",
    f_status: "상태",
    f_reset: "초기화",
    f_all: "전체",
    f_open: "모집 중",
    f_closing: "마감 임박",
    oi_count_one: "건",
    oi_count_many: "건",
    oi_filters_applied: "개 필터 적용",
    oi_filter_applied: "개 필터 적용",
    oi_none: "조건에 맞는 공고가 없습니다. 필터를 해제하거나 초기화해 보세요.",
    oi_sample: "표시된 공고는 디자인 검토용 예시입니다. 실제 공고는 출처 플랫폼과 연동될 예정입니다.",
    oi_counterparts_kicker: "수요 기관",
    oi_counterparts_title: "첫 미팅 전에 기관을 파악하세요",
    oi_counterparts_sub:
      "싱가포르에서 오픈 이노베이션을 운영하는 각 기관의 공고 이력, 예산 주기, 관심 분야, 협업 방식을 추적합니다.",
    oi_calls_12mo: "공고 (12개월)",
    oi_funding: "예산",
    oi_end_date: "마감:",
    oi_closing_soon: "마감 임박 ·",

    org_back: "전체 기관",
    org_past12: "최근 12개월",
    org_calls_published: "공고 건수",
    org_funding_committed: "배정 예산",
    org_projects_awarded: "선정 과제",
    org_awarded_value: "선정 금액",
    org_chart_title: "월별 공고 건수 및 예산",
    org_legend_calls: "공고 건수",
    org_legend_funding: "예산 규모 (지수)",
    org_cadence: "발주 주기",
    org_engage: "협업 방식",
    org_sample: "통계는 디자인 검토용 예시입니다. 실제 수치는 출처 플랫폼과 연동될 예정입니다.",
    org_open_now: "현재 모집 중",
    org_official: "공식 페이지",
    org_request_match: "매칭 요청",
    org_route_kicker: "연결 방식",
    org_route_title: "LodestarT가 직접 소개합니다",
    org_route_sub:
      "해당 기관이 밝힌 우선순위에 맞춰 가치 가설을 준비하고, 기업에 브리핑한 뒤 양측을 연결합니다. 스코핑과 협상까지 함께합니다.",
    org_route_cta: "소개 요청하기",
    org_matched: "적합 가능성이 있는 기업",

    sv_kicker: "지원 서비스",
    sv_title: "등재에서 계약까지",
    sv_sub:
      "등재는 기업을 보이게 합니다. 저희의 지원 서비스는 계약을 성사시킵니다. 브리핑, 멘토링, 선별된 미팅, 그리고 실무 PoC 실행까지 — 한국과 싱가포르 양쪽에서 일하는 팀이 직접 운영합니다.",
    sv_what_kicker: "제공 서비스",
    sv_what_title: "6가지 서비스, 하나의 결과",
    sv_what_sub: "기업의 단계와 접근 대상 기관에 따라 구성이 달라집니다.",
    sv_flow_kicker: "프로세스",
    sv_flow_title: "PoC가 성사되는 실제 과정",
    sv_flow_sub: "전 과정을 저희가 운영합니다. 기업은 준비된 상태로 나타나면 됩니다.",
    sv_cta_kicker: "다음 단계",
    sv_cta_title: "싱가포르 진출을 함께 설계하시죠",
    sv_cta_sub:
      "현재 상황을 알려주세요. 이곳에서 PoC를 성사시키려면 무엇이 필요한지 솔직하게 말씀드리겠습니다.",

    ct_kicker: "문의하기",
    ct_title: "대화를 통해 참여합니다",
    ct_sub:
      "자동 가입 절차는 없습니다. 기업은 LodestarT 프로그램을 통해, 기관은 저희 팀을 통해 참여합니다. 어느 쪽이신지 알려주시면 이어서 안내드리겠습니다.",
    ct_which: "어느 쪽에 해당하시나요?",
    ct_p_company: "PoC를 찾는 기업입니다",
    ct_p_institution: "니즈가 있는 기관 또는 대기업입니다",
    ct_p_partner: "파트너, 기관, 또는 투자자입니다",
    ct_name: "이름",
    ct_org: "소속",
    ct_email: "업무 이메일",
    ct_msg_company: "어떤 사업을 하고 계시고, 싱가포르 PoC로 무엇을 이루고자 하시나요?",
    ct_msg_institution: "어떤 문제를 해결하고자 하시며, 성공적인 파일럿은 어떤 모습일까요?",
    ct_send: "문의 보내기",
    ct_sent: "메일 앱이 열렸을 것입니다. 열리지 않았다면 hello@lodestart.ai 로 직접 보내주세요.",

    ft_blurb:
      "LodestarT는 선별된 PoC와 오픈 이노베이션을 통해 한국의 검증된 기업과 싱가포르 기관을 연결합니다.",
    ft_navigate: "메뉴",
    ft_contact: "연락처",
    ft_follow: "팔로우",
    ft_community: "커뮤니티",
    ft_rights: "© 2026 LodestarT co., Ltd. All rights reserved.",
  },
};

// Resolve a content field that may have a `_ko` variant.
// pick(startup, "summary", "ko") -> startup.summary_ko ?? startup.summary
export function pick(obj, field, lang) {
  if (!obj) return "";
  if (lang === "ko" && obj[field + "_ko"] != null) return obj[field + "_ko"];
  return obj[field];
}
