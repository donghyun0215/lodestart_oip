// ============================================================
// LodestarT — platform data
// Startups: verified LodestarT programme companies.
// Organisations: Singapore demand-side bodies for PoC discovery.
// ============================================================

export const STARTUPS = [
  {
    slug: "deepsearch",
    name: "DeepSearch",
    programme: "FINNECT",
    sector: "FinTech",
    hq: "Seoul, South Korea",
    banner: {
      brand: "DeepSearch",
      title: "AI-powered financial engine",
      tags: "#FinancialAI #FAaaS #BigDataAnalytics",
    },
    summary:
      "DeepSearch provides 'Finorma', a Finance AI engine, enabling financial institutions to easily build their own AI-based investment services and solutions by automating complex analysis of vast, real-time financial data.",
    summary_ko:
      "딥서치는 금융 AI 엔진 'Finorma'를 통해 금융기관이 방대한 실시간 금융 데이터의 복잡한 분석을 자동화하고, 자체 AI 기반 투자 서비스와 솔루션을 손쉽게 구축할 수 있도록 지원합니다.",
    hq_ko: "대한민국 서울",
    funding_ko: "Pre-IPO — 700만 달러 조달 / 기업가치 7,000만 달러",
    overview_ko: [
      "딥서치는 엔터프라이즈 금융 AI와 빅데이터 분석을 전문으로 하는 서울 기반 핀테크 기업입니다. 주력 엔진 Finorma는 200억 건 이상의 데이터 포인트를 처리하여 금융기관의 투자 스크리닝, M&A 타겟팅, 밸류에이션, 리스크 모니터링을 자동화합니다.",
      "국내 주요 은행과 자산운용사가 신뢰하는 딥서치는 지수 설계, ETF 운용, 자본시장 전반의 데이터 기반 의사결정을 지원합니다. 구독 및 API 기반 모델, 금융 AI 분야의 검증된 트랙 레코드, 글로벌 확장 계획을 바탕으로 AI와 금융의 교차점에서 고성장 기업으로 자리매김하고 있습니다.",
    ],
    overview: [
      "DeepSearch is a Seoul-based fintech company specializing in enterprise financial AI and big-data analytics. Its flagship engine, Finorma, processes over 20 billion data points to automate investment screening, M&A targeting, valuation, and risk monitoring for financial institutions.",
      "Trusted by major Korean banks and asset managers, DeepSearch powers index design, ETF operations, and data-driven decision-making across the capital market. With a subscription and API-based model, a proven track record in financial AI, and global expansion ambitions, DeepSearch stands out as a high-growth player at the intersection of AI and finance.",
    ],
    funding: "Pre-IPO — $7M raise / $70M pre-money",
    team: [
      { name: "Jay Kim", role: "CEO", notes: "AI Advisor for NPS · Ex-VC @Partners VC · Ex-Deloitte · Ex-Lead Developer @Naver" },
      { name: "Kay Kim", role: "COO / CFO", notes: "KICPA · Ex-CFO @Finda, Buzzvil · Ex-Coupang · Ex-Deloitte" },
      { name: "SJ Kim", role: "CTO / CPO", notes: "Ex-CTO @Goodoc · Ex-Lead Developer @Zigbang · Founding Member @UJET" },
    ],
    problem: [
      "Inefficiency in processing vast, complex, and scattered financial data, news, and macro indicators.",
      "Difficult for financial companies to organically build financial AI engines and solutions due to limited cost, time, and expertise.",
      "Limited analytical coverage due to capacity constraints in human resource.",
    ],
    opportunity: [
      "Effectively and quickly integrate AI to offer innovative financial solutions.",
      "Untapped market potential by expanding analytical reach outside traditional assets.",
      "Higher efficiency from lower cost.",
    ],
    advantage: [
      "Proven in a highly advanced financial market (South Korea).",
      "~40% adoption by major Korean financial institutions including NPS, KRX, top banks (Shinhan, KB), and securities firms (Korea Inv't & Sec, Samsung Sec).",
    ],
    solution: {
      lead: "Finorma API (FAaaS)",
      groups: [
        {
          title: "Financial AI SaaS",
          items: [
            "A comprehensive Financial AI SaaS that allows financial institutions to easily build their own AI-powered services.",
            "Instant access to extensive, real-time financial data.",
            "Covers stocks, ETFs, news, filings (KR/US), earnings calls, macro indicators, patents, and ESG data.",
          ],
        },
        {
          title: "AI-powered features",
          items: ["Intelligent Q&A", "Personalized briefing", "Risk monitoring & alerts", "Automated research"],
        },
      ],
    },
    businessModel: {
      lead: "B2B API Licensing",
      items: [
        "License the Finorma engine and specialized Financial AI Agents (AI Analyst, AI Investment Manager) via API.",
        "Enables clients to rapidly build and deploy sophisticated, real-time, automated AI financial services — creating value through quality of work, time savings, and cost reduction.",
      ],
    },
    achievements: [
      "Finorma has been used to support over 2,000 M&A deals.",
      "Used by the National Pension Service (managing ₩1,200 trillion KRW) for investment operations.",
      "Serves market-monitoring roles for both the Korea Exchange and NextTrade.",
      "Launched ETF KODEX Secondary Battery Industry with Samsung Asset Management (Sept 2018, KRX).",
      "Launched ETF KODEX Inno-Tech Active — the first actively managed ETF on KRX (Sept 2020) — and ETF KBSTAR Non-Memory Semiconductor Active (June 2021).",
    ],
    highlights: ["FY25 Sales USD 4M · FY25 CAGR 30%", "Unique technology", "Proven track record", "FAaaS ready"],
    hashtags: ["FinancialAI", "FAaaS", "BigDataAnalytics"],
    website: "https://www.deepsearch.com/",
    deck: { name: "PitchDeck_DeepSearch.pdf", size: "7.11 MB" },
    hosts: [
      { name: "Jay Kim", role: "CEO @DeepSearch", type: "Host" },
      { name: "Moon-Young Tae", role: "LodestarT", type: "Co-host" },
    ],
  },

  {
    slug: "forest-jalan",
    name: "Forest Jalan",
    programme: "FINNECT",
    sector: "RWA / Private Credit",
    hq: "Seoul, South Korea · Jakarta, Indonesia",
    banner: {
      brand: "Forest Jalan",
      title: "Tokenized private credit for SEA",
      tags: "#RWA #PrivateCredit #Stablecoin",
    },
    summary:
      "Forest Jalan builds a Southeast Asian private-credit RWA platform that tokenizes short-term receivables (EWA, merchant SCF) from Indonesian MSMEs and makes them investable to global stablecoin capital, with real-time data visibility.",
    summary_ko:
      "포레스트 잘란은 인도네시아 소상공인의 단기 매출채권(EWA, 가맹점 공급망금융)을 토큰화하여 글로벌 스테이블코인 자본에 투자 가능하게 만드는 동남아 사모신용 RWA 플랫폼을 구축합니다. 실시간 데이터 투명성이 핵심입니다.",
    hq_ko: "대한민국 서울 · 인도네시아 자카르타",
    funding_ko: "시드 — RWA 펀드 LP 출자 병행",
    overview_ko: [
      "포레스트 잘란은 기관 및 개인 투자자의 수익형 자산 접근 방식을 바꾸는 실물자산(RWA) 금융 플랫폼입니다. Grab의 Grab JOOB 서비스와 협력하여 인도네시아 소상공인의 실시간 데이터를 기반으로 매출채권(eNote)을 토큰화하고, 현지 경제 활동과 안정적 수익을 찾는 글로벌 투자자를 연결합니다.",
      "서울 본사와 자카르타 거점을 두고 블록체인 인프라, 규제 파트너십, 데이터 기반 신용 분석을 활용해 동남아의 소외된 신용 시장에 투명성과 유동성을 제공합니다. 주요 기술 파트너, 전략적 투자자, 지역 슈퍼앱 파트너의 지원을 받아 신흥 경제권을 위한 차세대 토큰화 신용 생태계를 만들어가고 있습니다.",
    ],
    overview: [
      "Forest Jalan is a real-world asset (RWA) financial platform transforming how institutional and retail investors access yield-bearing assets. In collaboration with Grab, through its Grab JOOB service, the company tokenizes receivables (eNotes) using real-time data from Indonesian MSMEs, seamlessly connecting local economic activity with global investors seeking secure and sustainable returns.",
      "Headquartered in Seoul with a regional base in Jakarta, Forest Jalan leverages blockchain infrastructure, regulatory partnerships, and data-driven credit analytics to bring transparency and liquidity to Southeast Asia's underserved credit markets. Backed by leading technology partners, strategic investors, and regional super-app partners, the company is building the next-generation tokenized credit ecosystem for the world's fastest-growing emerging economies.",
    ],
    funding: "Seed — plus LP commitments for the RWA fund",
    team: [],
    problem: [
      "Web 3.0 investors face polarization in yield-generating assets — high risk/return with price volatility in DeFi, versus low risk/return treasury-backed RWA assets.",
      "Indonesian MSME borrowers lack collateral and credit history, resulting in a shortage of transparent lending solutions (Indonesian funding gap: $154B).",
      "Borrower-side challenges include cash shortages before payday, no credit card access, and limited household liquidity.",
    ],
    opportunity: [
      "Bridge Web3 liquidity to Web2 borrowers via tokenized private credit backed by receivables, targeting 13–17% APR.",
      "Positive early traction: raised a $200K pilot and completed tokenization, with an additional $1M committed.",
    ],
    advantage: [
      "Proprietary borrower and data sourcing from JOOB (Grab-partner merchant/job platform).",
      "Real-time investor portfolio dashboard covering allocation, asset profile, and delays/NPL aging.",
      "De-risked structure with FX and NPL backstops.",
    ],
    solution: {
      lead: "eNote Finance",
      groups: [
        {
          title: "Tokenized receivables",
          items: [
            "Investable real-world asset token with an MSME loan pool as the underlying asset.",
            "End-borrower and proprietary data sourced from Grab JOOB.",
          ],
        },
      ],
    },
    businessModel: {
      lead: "Full-stack origination to distribution",
      items: [
        "Operate the JOOB job portal app with Grab.",
        "Source and assess MSME borrowers from JOOB.",
        "Lend to MSMEs with stablecoin capital from Web 3.0.",
        "Real-time borrower data visible to investors.",
        "All transactions and capital flows settled on-chain.",
      ],
    },
    achievements: [],
    highlights: [
      "Investable private-credit RWA asset generating 13–17% yield, irrespective of crypto market volatility",
      "Real-time data on the underlying asset for continuous risk assessment",
      "Grab partnership via JOOB for proprietary borrower origination",
    ],
    hashtags: ["RWA", "PrivateCredit", "Stablecoin"],
    website: null,
    deck: { name: "ForestJalan_onepager.pdf", size: "2.4 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "wavebridge",
    name: "Wavebridge Inc.",
    programme: "FINNECT",
    sector: "Digital Assets",
    hq: "Seoul, South Korea · Lithuania (EU)",
    banner: {
      brand: "Wavebridge",
      title: "Digital Asset Infrastructure for Institutions",
      tags: "#DigitalAsset #PrimeBrokerage #RegTech",
    },
    summary:
      "Wavebridge is Korea's first licensed digital asset prime broker, trading within regulations and providing custody services for institutions. With a VASP license in Korea, MiCA licensing in progress in the EU, and advisory partnerships in Hong Kong, it bridges traditional finance and digital assets.",
    summary_ko:
      "웨이브브릿지는 한국 최초의 라이선스 디지털자산 프라임 브로커로, 규제 내에서 거래를 수행하고 기관 대상 커스터디 서비스를 제공합니다. 국내 VASP 라이선스, EU MiCA 라이선스 진행, 홍콩 자문 파트너십을 통해 전통 금융과 디지털 자산을 연결합니다.",
    hq_ko: "대한민국 서울 · 리투아니아 (EU)",
    funding_ko: "시리즈 B — 800만 달러 조달 / 기업가치 9,000만 달러",
    overview_ko: [
      "웨이브브릿지는 기관 및 법인 고객에게 안전하고 규제를 준수하는 디지털 경제 진입로를 제공하는 차세대 디지털자산 프라임 브로커리지입니다. 한국에서 가상자산사업자(VASP) 라이선스를 보유하고 리투아니아에 등록 법인을 운영하며, AML/CFT 및 FATF 규정을 포함한 최고 수준의 글로벌 규제·감사 기준을 충족합니다.",
      "비트코인 ETF 출시, 구조화 투자상품, 전략적 규제 파트너십에서 검증된 성과를 바탕으로 커스터디, 체결, 결제 서비스를 위한 기관급 인프라를 제공합니다.",
      "솔라나 재단과 협력하여 원화 연동 스테이블코인과 토큰화 엔진을 개발하며, 글로벌 시장의 기관 블록체인 도입을 가속하고 있습니다.",
    ],
    overview: [
      "Wavebridge is a next-generation digital asset prime brokerage empowering institutional and corporate clients with a secure and compliant gateway to the digital economy. Licensed as a Virtual Asset Service Provider (VASP) in South Korea and operating a registered subsidiary in Lithuania, Wavebridge meets the highest global regulatory and audit standards, including AML/CFT and FATF compliance.",
      "Building on its proven success in launching a Bitcoin ETF, structured investment products, and forming strategic regulatory partnerships, Wavebridge delivers institutional-grade infrastructure for custody, execution, and payment services.",
      "In collaboration with the Solana Foundation, the company is pioneering the development of a Korean won–pegged stablecoin and a tokenization engine designed to accelerate institutional blockchain adoption across global markets.",
    ],
    funding: "Series B — USD 8M raise / USD 90M pre-money",
    team: [],
    problem: [
      "Limited institutional access to digital asset exchanges, which are highly regulated.",
      "Insufficient liquidity for large-scale transactions, and early-stage prime brokerage services.",
      "Few compliance-ready infrastructure options for corporates.",
      "Shortage of professional trading expertise in digital assets.",
    ],
    opportunity: [
      "Korea's Digital Asset Basic Act and EU MiCA are reshaping global standards.",
      "Growing institutional adoption of digital assets, accelerated by ETFs and regulatory clarity.",
    ],
    advantage: [
      "Solid leadership position derived from licenses in a strict regulatory environment.",
      "Korea: the only licensed institutional prime broker positioned to support Bitcoin ETFs and corporate adoption.",
      "EU/Asia: MiCA licensing in progress, plus an advisory partnership with Victory Securities in Hong Kong.",
    ],
    solution: {
      lead: "Wavebridge Prime (KR & Global)",
      groups: [
        {
          title: "Institutional prime brokerage",
          items: [
            "All-in-one prime brokerage platform offering execution, liquidity, custody, and compliance.",
            "Global connectivity: headquartered in Korea, extending regulated infrastructure into the EU and supporting cross-border partnerships across Asia.",
          ],
        },
      ],
    },
    businessModel: {
      lead: "Fee-based institutional services",
      items: ["Prime brokerage and custody service fees.", "Compliance-driven advisory revenues."],
    },
    achievements: [],
    highlights: [
      "Korea's only licensed institutional prime broker (VASP + ISMS)",
      "Advisory partner to Victory Securities (Hong Kong)",
      "Among the first MiCA-licensed CASPs in the EU (Lithuania, in progress)",
      "Bridging Asia and Europe through unified compliance and institutional standards",
    ],
    hashtags: ["DigitalAsset", "PrimeBrokerage", "RegTech"],
    website: null,
    deck: { name: "Wavebridge_onepager.pdf", size: "3.8 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "stockeeper",
    name: "STOCKEEPER Co. Ltd",
    programme: "FINNECT",
    sector: "STO / AgriFinance",
    hq: "Seoul, South Korea",
    banner: {
      brand: "bankcow",
      title: "Data-driven Hanwoo STO platform",
      tags: "#STO #Livestock #Investment",
    },
    summary:
      "Stockeeper operates Bankcow, a platform that digitalizes and securitizes livestock assets through data-driven investment.",
    summary_ko:
      "스토키퍼는 데이터 기반 투자를 통해 축산 자산을 디지털화하고 증권화하는 플랫폼 '뱅카우'를 운영합니다.",
    hq_ko: "대한민국 서울",
    funding_ko: "시리즈 B — 700만 달러 조달 / 기업가치 2,800만 달러",
    overview_ko: [
      "뱅카우는 데이터 기반 축산 투자와 한우 밸류체인 수직계열화를 통해 신뢰할 수 있고 확장 가능한 수익을 제공하는 고성장 STO 플랫폼입니다.",
      "청약률 100% 이상을 일관되게 달성하며 평균 140% 초과청약을 기록하고 있고, 검증된 데이터·기술과 생산·가공·유통 전반의 수직계열화를 통해 견고하게 성장하고 있습니다.",
    ],
    overview: [
      "Bankcow is a fast-growing STO platform leveraging data-driven livestock investment and a fully integrated Korean Beef (Hanwoo) value chain to deliver trusted and scalable returns.",
      "The platform has achieved consistent 100%+ subscription rates with 140% average oversubscription, and strong growth driven by proven data, technology, and vertical integration across production, processing, and retail.",
    ],
    funding: "Series B — USD 7M raise / USD 28M pre-money",
    team: [],
    problem: [
      "Difficulty for farmers to access stable financing for cattle breeding, farm facility development, and management.",
      "Fluctuating cow market prices leave farmers vulnerable to earnings volatility and dampen appetite to reinvest.",
      "Lack of a transparent, scalable, and liquid investment vehicle in the Korean/ASEAN livestock market.",
      "Individuals have limited platforms through which to participate in the real livestock ecosystem and its investments.",
    ],
    opportunity: [
      "Korea's Hanwoo (Korean cattle) market is valued at USD 18B, covering roughly 4 million cattle.",
      "Low utilization (~30%) of barn space and farm facilities.",
      "Higher value lies in vertical integration of the livestock chain — currently nascent.",
    ],
    advantage: [
      "The only licensed STO investment platform for live Hanwoo cattle.",
      "Real-time tracking of livestock and their score evaluation.",
      "Full-cycle integration across farming, processing, and retail.",
    ],
    solution: {
      lead: "Livestock STO",
      groups: [
        {
          title: "How it works",
          items: [
            "The STO structure helps under-utilized farm assets enhance productivity.",
            "Farmers benefit from easier access to capital; investors increase returns from smarter farm management.",
            "Ensures a transparent livestock ecosystem.",
            "Delivers consistent quality and rationally priced beef to consumers.",
          ],
        },
      ],
    },
    businessModel: {
      lead: "Issuance, operations, and vertical retail",
      items: [
        "Livestock STO issuance and management.",
        "Real-time, data-driven herd operation and management.",
        "B2B2C sale of meat products, leveraging automated processing and distribution.",
        "Mid-term plans to expand STO/RWA into other product categories.",
      ],
    },
    achievements: [],
    highlights: [
      "Korea's first licensed livestock finance platform",
      "₩10B+ ($7M) accumulated AUM",
      "Integrated value chain: Bankcow – Gogi Design Lab – Honest Hanwoo",
      "Preparing for global STO listing",
    ],
    hashtags: ["STO", "Livestock", "Investment"],
    website: null,
    deck: { name: "Bankcow_onepager.pdf", size: "4.2 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },
];

export const SECTORS = ["All", "FinTech", "RWA / Private Credit", "Digital Assets", "STO / AgriFinance"];

// ============================================================
// Demand side — organisations running open innovation in Singapore.
// Statistics are illustrative samples for design review.
// ============================================================

export const ORGS = [
  {
    slug: "imda-oip",
    name: "IMDA Open Innovation Platform",
    short: "IMDA OIP",
    logo: "/logos/imda.png",
    logoW: 382,
    type: "national",
    typeLabel: "National platform",
    desc: "Singapore's national platform matching real business problems from industry to digital solution providers, with co-funding for successful prototypes.",
    name_ko: "IMDA 오픈 이노베이션 플랫폼",
    typeLabel_ko: "국가 플랫폼",
    desc_ko:
      "산업계의 실제 비즈니스 과제를 디지털 솔루션 제공자와 연결하고, 성공한 프로토타입에 매칭 펀딩을 지원하는 싱가포르 국가 플랫폼입니다.",
    cadence_ko:
      "상시 공고이며, 2~3월과 5월에 집중적으로 발주됩니다.",
    engagement_ko:
      "게시된 과제 정의서에 대해 솔루션을 제출합니다. 선정된 기업은 과제 발주처와 직접 매칭되며, 프로토타입 개발을 위한 매칭 펀딩을 받을 수 있습니다.",
    focus: ["AI & Data", "Digital Services", "Smart Nation", "Enterprise Tech"],
    link: "https://www.openinnovation.gov.sg/",
    stats: { calls: 106, funding: "S$20.1M", awarded: 280, awardedValue: "S$18.5M" },
    monthly: [
      { m: "Jan", calls: 12, value: 22 },
      { m: "Feb", calls: 31, value: 68 },
      { m: "Mar", calls: 14, value: 30 },
      { m: "Apr", calls: 13, value: 25 },
      { m: "May", calls: 24, value: 56 },
      { m: "Jun", calls: 9, value: 14 },
      { m: "Jul", calls: 6, value: 11 },
    ],
    cadence: "Rolling calls, with concentrated batches in Feb–Mar and May.",
    engagement:
      "Solutions are submitted against published problem statements. Shortlisted providers are matched directly with the problem owner and may receive co-funding to build a prototype.",
    calls: [
      { title: "Shelf-level inventory visibility for supermarket chains", sector: "Retail", funding: "S$50,000", deadline: "8 Aug 2026", status: "open" },
      { title: "Predictive maintenance for container handling equipment", sector: "Logistics", funding: "S$70,000", deadline: "22 Aug 2026", status: "open" },
      { title: "Automated compliance reporting for financial institutions", sector: "FinTech", funding: "S$60,000", deadline: "30 Jul 2026", status: "closing" },
    ],
  },
  {
    slug: "open-innovation-network",
    name: "Open Innovation Network (OIN)",
    short: "OIN",
    logo: "/logos/oin.png",
    logoW: 187,
    type: "national",
    typeLabel: "National platform",
    desc: "A whole-of-government network aggregating innovation calls across Singapore's public agencies, connecting public-sector problem owners with solution providers.",
    name_ko: "오픈 이노베이션 네트워크 (OIN)",
    typeLabel_ko: "국가 플랫폼",
    desc_ko:
      "싱가포르 공공기관 전반의 혁신 공고를 통합하여, 공공부문 과제 발주처와 솔루션 제공자를 연결하는 범정부 네트워크입니다.",
    cadence_ko:
      "각 기관이 주도하며, 공공부문 예산 주기(3~5월)에 집중됩니다.",
    engagement_ko:
      "개별 기관이 공고를 게시합니다. 제안 기업은 주관 기관과 직접 소통하며, 성공한 파일럿은 정부 조달로 이어지는 경우가 많습니다.",
    focus: ["Public Sector", "HealthTech", "Urban Solutions", "Sustainability"],
    link: "https://www.openinnovationnetwork.gov.sg/",
    stats: { calls: 74, funding: "S$14.6M", awarded: 191, awardedValue: "S$12.9M" },
    monthly: [
      { m: "Jan", calls: 8, value: 14 },
      { m: "Feb", calls: 15, value: 29 },
      { m: "Mar", calls: 21, value: 44 },
      { m: "Apr", calls: 10, value: 18 },
      { m: "May", calls: 11, value: 21 },
      { m: "Jun", calls: 6, value: 10 },
      { m: "Jul", calls: 3, value: 5 },
    ],
    cadence: "Agency-driven calls clustered around the public-sector budget cycle (Mar–May).",
    engagement:
      "Calls are published by individual agencies. Providers respond to the sponsoring agency; successful pilots often convert into government procurement.",
    calls: [
      { title: "Reducing no-show rates in specialist outpatient clinics", sector: "HealthTech", funding: "Co-funded pilot", deadline: "15 Sep 2026", status: "open" },
      { title: "Real-time flood sensing for low-lying urban catchments", sector: "Urban", funding: "Co-funded pilot", deadline: "5 Sep 2026", status: "open" },
    ],
  },
  {
    slug: "enterprise-singapore",
    name: "Enterprise Singapore",
    short: "EnterpriseSG",
    logo: "/logos/esg.png",
    logoW: 312,
    type: "national",
    typeLabel: "National agency",
    desc: "The government agency championing enterprise development, running open calls and co-innovation programmes that connect corporates with startups on market-entry and growth challenges.",
    name_ko: "엔터프라이즈 싱가포르",
    typeLabel_ko: "정부 기관",
    desc_ko:
      "기업 성장을 지원하는 정부기관으로, 시장 진입 및 성장 과제를 놓고 대기업과 스타트업을 연결하는 공모와 공동혁신 프로그램을 운영합니다.",
    cadence_ko:
      "프로그램 단위 공고이며, 연초 발표되는 산업 로드맵과 연동됩니다.",
    engagement_ko:
      "산업 프로그램과 액셀러레이터 파트너를 통해 진행됩니다. LodestarT는 EnterpriseSG 연계 파트너와 협력하여 한국 솔루션을 적합한 트랙에 배치합니다.",
    focus: ["Enterprise Growth", "Sustainability", "Supply Chain", "Market Entry"],
    link: "https://www.openinnovationnetwork.gov.sg/",
    stats: { calls: 58, funding: "S$26.4M", awarded: 143, awardedValue: "S$22.1M" },
    monthly: [
      { m: "Jan", calls: 6, value: 18 },
      { m: "Feb", calls: 9, value: 31 },
      { m: "Mar", calls: 12, value: 46 },
      { m: "Apr", calls: 14, value: 52 },
      { m: "May", calls: 8, value: 27 },
      { m: "Jun", calls: 5, value: 16 },
      { m: "Jul", calls: 4, value: 12 },
    ],
    cadence: "Programme-based calls, typically aligned to sector roadmaps announced early in the year.",
    engagement:
      "Engagement runs through sector programmes and accelerator partners. LodestarT works with EnterpriseSG-linked partners to position Korean solutions into relevant tracks.",
    calls: [
      { title: "Embodied carbon reduction in commercial retrofits", sector: "Sustainability", funding: "Co-funded pilot", deadline: "30 Sep 2026", status: "open" },
    ],
  },
  {
    slug: "monetary-authority-singapore",
    name: "Monetary Authority of Singapore",
    short: "MAS",
    logo: "/logos/mas.png",
    logoW: 294,
    type: "national",
    typeLabel: "Regulator",
    desc: "Singapore's central bank and financial regulator, running the regulatory sandbox and industry-wide innovation programmes across payments, capital markets, and digital assets.",
    name_ko: "싱가포르 통화청 (MAS)",
    typeLabel_ko: "규제 기관",
    desc_ko:
      "싱가포르 중앙은행이자 금융 규제기관으로, 결제·자본시장·디지털 자산 전반에서 규제 샌드박스와 산업 혁신 프로그램을 운영합니다.",
    cadence_ko:
      "샌드박스는 상시 접수이며, 주제별 프로그램은 싱가포르 핀테크 페스티벌 주기에 맞춰 발표됩니다.",
    engagement_ko:
      "LodestarT FINNECT 기수에 가장 적합한 경로입니다. 통상 샌드박스 적격성 논의부터 시작한 뒤 기관 파일럿으로 이어집니다.",
    focus: ["FinTech", "RegTech", "Digital Assets", "Payments"],
    link: "https://www.openinnovationnetwork.gov.sg/",
    stats: { calls: 41, funding: "S$31.2M", awarded: 96, awardedValue: "S$27.4M" },
    monthly: [
      { m: "Jan", calls: 4, value: 21 },
      { m: "Feb", calls: 7, value: 38 },
      { m: "Mar", calls: 9, value: 44 },
      { m: "Apr", calls: 6, value: 29 },
      { m: "May", calls: 8, value: 41 },
      { m: "Jun", calls: 4, value: 19 },
      { m: "Jul", calls: 3, value: 14 },
    ],
    cadence: "Sandbox intake is rolling; thematic programmes are announced around the Singapore FinTech Festival cycle.",
    engagement:
      "Most relevant route for LodestarT's FINNECT cohort. Engagement typically begins with a sandbox-eligibility conversation before any institutional pilot.",
    calls: [
      { title: "Institutional-grade custody and settlement for tokenized assets", sector: "Digital Assets", funding: "Sandbox + pilot", deadline: "12 Sep 2026", status: "open" },
      { title: "Cross-border payment reconciliation for regional corridors", sector: "Payments", funding: "Co-funded pilot", deadline: "28 Jul 2026", status: "closing" },
    ],
  },
  {
    slug: "regional-financial-institution",
    name: "Regional Financial Institution",
    short: "Corporate",
    type: "corporate",
    typeLabel: "Corporate — LodestarT sourced",
    desc: "A Singapore-headquartered financial group seeking AI and data solutions across investment research, risk monitoring, and client servicing. Identity disclosed to matched companies.",
    name_ko: "역내 금융기관",
    typeLabel_ko: "대기업 — LodestarT 발굴",
    desc_ko:
      "투자 리서치, 리스크 모니터링, 고객 서비스 전반에 걸쳐 AI·데이터 솔루션을 찾는 싱가포르 본사 금융그룹입니다. 기관명은 매칭된 기업에만 공개됩니다.",
    cadence_ko:
      "공개 입찰이 아닌, LodestarT의 직접 관계를 통해 니즈가 드러납니다.",
    engagement_ko:
      "공개 공고가 없습니다. LodestarT가 내부 적합성 검토를 거쳐 니즈당 2~3개 기업의 숏리스트를 소개합니다.",
    focus: ["AI & Data", "Investment Research", "Risk", "Digital Assets"],
    link: null,
    stats: { calls: 6, funding: "Direct PoC", awarded: 4, awardedValue: "Undisclosed" },
    monthly: [
      { m: "Jan", calls: 1, value: 0 },
      { m: "Feb", calls: 0, value: 0 },
      { m: "Mar", calls: 2, value: 0 },
      { m: "Apr", calls: 1, value: 0 },
      { m: "May", calls: 1, value: 0 },
      { m: "Jun", calls: 1, value: 0 },
      { m: "Jul", calls: 0, value: 0 },
    ],
    cadence: "Needs surface through LodestarT's direct relationship, not public tender.",
    engagement:
      "No public call. LodestarT introduces a shortlist of two to three companies per need, following an internal fit review.",
    calls: [
      { title: "AI-assisted investment research and screening", sector: "FinTech", funding: "Paid PoC", deadline: "Rolling", status: "open" },
      { title: "Real-time risk monitoring across multi-asset portfolios", sector: "RegTech", funding: "Paid PoC", deadline: "Rolling", status: "open" },
    ],
  },
];

export const ORG_TYPES = [
  { value: "all", label: "All organisations" },
  { value: "national", label: "National platforms & agencies" },
  { value: "corporate", label: "Corporate — LodestarT sourced" },
];

// ============================================================
// Engagement services (LodestarT-delivered)
// ============================================================

export const SERVICES = [
  {
    n: "01",
    title: "Information Sessions",
    title_ko: "인포메이션 세션",
    desc: "Market-entry briefings covering the Singapore regulatory landscape, grant programmes, and the open innovation calendar — so companies arrive prepared, not surprised.",
    desc_ko:
      "싱가포르 규제 환경, 지원 사업, 오픈 이노베이션 일정을 다루는 시장 진입 브리핑입니다. 기업이 놀라지 않고, 준비된 상태로 도착하게 합니다.",
  },
  {
    n: "02",
    title: "Office Hours",
    title_ko: "오피스 아워",
    desc: "Recurring 1:1 slots with the LodestarT team to pressure-test positioning, pricing, and PoC scope before it reaches an institutional counterpart.",
    desc_ko:
      "LodestarT 팀과의 정기 1:1 세션입니다. 기관 상대에게 가기 전에 포지셔닝, 가격, PoC 범위를 함께 점검합니다.",
  },
  {
    n: "03",
    title: "Mentoring",
    title_ko: "멘토링",
    desc: "Matched advisors from our ecosystem — operators who have closed institutional deals in Singapore and can shorten the learning curve considerably.",
    desc_ko:
      "싱가포르에서 기관 계약을 성사시켜 본 실무자들을 매칭해 드립니다. 학습 곡선을 크게 단축할 수 있습니다.",
  },
  {
    n: "04",
    title: "Business Partner Meetings",
    title_ko: "비즈니스 파트너 미팅",
    desc: "Curated introductions to corporates, distributors, and integrators whose stated needs match the company's solution — qualified before the first meeting.",
    desc_ko:
      "기업의 솔루션과 실제 니즈가 맞는 대기업, 유통사, SI 업체를 선별해 소개합니다. 첫 미팅 전에 적합성을 검증합니다.",
  },
  {
    n: "05",
    title: "PoC Discovery & Delivery",
    title_ko: "PoC 발굴 및 실행",
    desc: "We source the opportunity, shape the scope, negotiate terms, and project-manage delivery — from kickoff through evaluation report.",
    desc_ko:
      "기회를 발굴하고, 범위를 설계하고, 조건을 협상하고, 실행을 관리합니다. 킥오프부터 평가 리포트까지 함께합니다.",
  },
  {
    n: "06",
    title: "Media & PR Coverage",
    title_ko: "미디어 및 PR",
    desc: "Announcement articles and case-study coverage of pilot outcomes across LodestarT channels and partner media.",
    desc_ko:
      "파일럿 성과에 대한 보도자료와 사례 연구를 LodestarT 채널과 파트너 미디어를 통해 확산합니다.",
  },
];

export const FLOW = [
  { n: "01", title: "Discover", desc: "Map the company's solution against active open innovation calls and LodestarT-sourced institutional demand.", title_ko: "발굴", desc_ko: "기업의 솔루션을 진행 중인 오픈 이노베이션 공고 및 LodestarT가 발굴한 기관 수요와 매핑합니다." },
  { n: "02", title: "Analyse", desc: "Study the counterpart's past calls, award history, budget cadence, and decision structure before making contact.", title_ko: "분석", desc_ko: "접촉 전에 상대의 과거 공고, 선정 이력, 예산 주기, 의사결정 구조를 분석합니다." },
  { n: "03", title: "Connect", desc: "Warm introduction with a prepared value hypothesis — never a cold pitch.", title_ko: "연결", desc_ko: "준비된 가치 가설과 함께 소개합니다. 콜드 피치는 하지 않습니다." },
  { n: "04", title: "Scope", desc: "Structured meetings with question frameworks; scope, success metrics, and commercial terms agreed.", title_ko: "설계", desc_ko: "질문 프레임워크를 갖춘 구조화된 미팅을 통해 범위, 성과 지표, 계약 조건을 합의합니다." },
  { n: "05", title: "Deliver", desc: "Project-managed pilot with shared reporting, and a documented path to commercial rollout.", title_ko: "실행", desc_ko: "공유 리포팅과 함께 파일럿을 관리하고, 상용 계약으로 가는 경로를 문서화합니다." },
];

// ============================================================
// Open innovation calls — the demand side a company can pursue.
// `cover` picks an abstract cover treatment; swap for real imagery
// by adding `image: "/covers/xyz.jpg"` and rendering it in ChallengeCard.
// Owner logos are wordmarks until real assets land in /public/logos.
// ============================================================

export const CHALLENGES = [
  {
    id: "sgh-histopath",
    title: "Synthetic histopathological image generation for training",
    orgSlug: "imda-oip",
    platform: "IMDA OIP",
    owner: "Singapore General Hospital",
    ownerMark: "SGH",
    ownerLogo: "/logos/sgh.png",
    ownerLogoW: 323,
    sector: "Healthcare",
    fn: "Operations",
    cover: "health",
    tags: ["Artificial Intelligence (Generative)", "Medtech"],
    desc: "How can we generate realistic, privacy-preserving synthetic histopathology images to train diagnostic models without exposing patient data?",
    title_ko: "훈련용 합성 조직병리 이미지 생성",
    sector_ko: "헬스케어",
    desc_ko:
      "환자 데이터를 노출하지 않고 진단 모델을 학습시킬 수 있는, 사실적이면서 프라이버시를 보호하는 합성 조직병리 이미지를 어떻게 생성할 수 있을까요?",
    prize: "S$ 50,000",
    deadline: "14 Aug 2026",
    status: "open",
  },
  {
    id: "msf-child-protection",
    title: "Early warning and response system for child protection",
    orgSlug: "open-innovation-network",
    platform: "OIN",
    owner: "Ministry of Social and Family Development",
    ownerMark: "MSF",
    ownerLogo: "/logos/msf.png",
    ownerLogoW: 195,
    sector: "Professional Services",
    fn: "Operations",
    cover: "public",
    tags: ["Advanced Sensors", "Internet of Things (IoT)"],
    desc: "How might we develop an early-warning and response system that provides continuous, non-intrusive monitoring of at-risk households?",
    title_ko: "아동 보호를 위한 조기 경보 및 대응 시스템",
    sector_ko: "전문 서비스",
    desc_ko:
      "위기 가정을 지속적이고 비침습적으로 모니터링할 수 있는 조기 경보·대응 시스템을 어떻게 개발할 수 있을까요?",
    prize: "S$ 80,000",
    deadline: "14 Aug 2026",
    status: "open",
  },
  {
    id: "mas-tokenized-custody",
    title: "Institutional custody and settlement for tokenized assets",
    orgSlug: "monetary-authority-singapore",
    platform: "MAS",
    owner: "Monetary Authority of Singapore",
    ownerMark: "MAS",
    ownerLogo: "/logos/mas.png",
    ownerLogoW: 294,
    sector: "FinTech",
    fn: "Infrastructure",
    cover: "finance",
    tags: ["Digital Assets", "Custody", "RegTech"],
    desc: "How might institutions custody, settle, and audit tokenized securities under a compliant framework that satisfies both MAS and cross-border regulators?",
    title_ko: "토큰화 자산의 기관급 커스터디 및 결제",
    sector_ko: "핀테크",
    desc_ko:
      "MAS와 해외 규제기관 요건을 동시에 충족하는 규제 준수 체계 하에서, 기관이 토큰화 증권을 어떻게 보관·결제·감사할 수 있을까요?",
    prize: "Sandbox + pilot",
    deadline: "12 Sep 2026",
    status: "open",
  },
  {
    id: "mas-cross-border-recon",
    title: "Cross-border payment reconciliation for regional corridors",
    orgSlug: "monetary-authority-singapore",
    platform: "MAS",
    owner: "Monetary Authority of Singapore",
    ownerMark: "MAS",
    ownerLogo: "/logos/mas.png",
    ownerLogoW: 294,
    sector: "FinTech",
    fn: "Operations",
    cover: "finance",
    tags: ["Payments", "AI & Data"],
    desc: "How can we automate reconciliation across multi-currency corridors where settlement finality and reporting standards differ by jurisdiction?",
    title_ko: "역내 결제 회랑의 크로스보더 정산 자동화",
    sector_ko: "핀테크",
    desc_ko:
      "결제 완결성과 보고 기준이 관할권마다 다른 다통화 회랑에서 정산 대사를 어떻게 자동화할 수 있을까요?",
    prize: "Co-funded pilot",
    deadline: "28 Jul 2026",
    status: "closing",
  },
  {
    id: "port-predictive-maintenance",
    title: "Predictive maintenance for container handling equipment",
    orgSlug: "imda-oip",
    platform: "IMDA OIP",
    owner: "Port Logistics Operator",
    ownerMark: "PLO",
    sector: "Logistics",
    fn: "Operations",
    cover: "logistics",
    tags: ["Sensor Fusion", "Machine Learning", "Industry 4.0"],
    desc: "How might we predict failures in cranes and prime movers 72 hours in advance, using existing sensor telemetry rather than new hardware?",
    title_ko: "컨테이너 하역 장비 예측 정비",
    sector_ko: "물류",
    desc_ko:
      "신규 하드웨어 없이 기존 센서 데이터만으로 크레인과 야드 트랙터의 고장을 72시간 전에 예측할 수 있을까요?",
    prize: "S$ 70,000",
    deadline: "22 Aug 2026",
    status: "open",
  },
  {
    id: "retail-shelf-visibility",
    title: "Shelf-level inventory visibility for supermarket chains",
    orgSlug: "imda-oip",
    platform: "IMDA OIP",
    owner: "Grocery Retail Group",
    ownerMark: "GRG",
    sector: "Retail",
    fn: "Operations",
    cover: "retail",
    tags: ["Computer Vision", "Robotics"],
    desc: "How can we track on-shelf availability in real time across 60+ stores without re-fitting existing shelving or halting operations?",
    title_ko: "슈퍼마켓 체인의 진열대 재고 실시간 파악",
    sector_ko: "리테일",
    desc_ko:
      "기존 진열대를 개조하거나 영업을 중단하지 않고, 60개 이상 매장의 진열대 재고를 실시간으로 파악할 수 있을까요?",
    prize: "S$ 50,000",
    deadline: "8 Aug 2026",
    status: "open",
  },
  {
    id: "esg-embodied-carbon",
    title: "Reducing embodied carbon in commercial retrofits",
    orgSlug: "enterprise-singapore",
    platform: "EnterpriseSG",
    owner: "Property Developer Consortium",
    ownerMark: "PDC",
    sector: "Sustainability",
    fn: "Design",
    cover: "climate",
    tags: ["Circular Construction", "Materials", "Measurement"],
    desc: "How might we cut embodied carbon by 25% or more in office retrofits, with measurement rigorous enough to withstand third-party verification?",
    title_ko: "상업용 건물 리모델링의 내재 탄소 감축",
    sector_ko: "지속가능성",
    desc_ko:
      "제3자 검증을 통과할 만큼 엄밀한 측정 체계를 갖추면서, 오피스 리모델링의 내재 탄소를 25% 이상 줄일 수 있을까요?",
    prize: "Co-funded pilot",
    deadline: "30 Sep 2026",
    status: "open",
  },
  {
    id: "oin-clinic-noshow",
    title: "Reducing no-show rates in specialist outpatient clinics",
    orgSlug: "open-innovation-network",
    platform: "OIN",
    owner: "Public Healthcare Cluster",
    ownerMark: "PHC",
    sector: "Healthcare",
    fn: "Operations",
    cover: "health",
    tags: ["Behavioural AI", "Scheduling"],
    desc: "How can we cut appointment no-shows — currently averaging 18% across clinics — without penalising patients facing genuine access barriers?",
    title_ko: "전문의 외래 진료 노쇼율 감소",
    sector_ko: "헬스케어",
    desc_ko:
      "실질적 접근 장벽에 처한 환자에게 불이익을 주지 않으면서, 현재 평균 18%인 예약 노쇼율을 어떻게 낮출 수 있을까요?",
    prize: "Co-funded pilot",
    deadline: "15 Sep 2026",
    status: "open",
  },
  {
    id: "corp-ai-research",
    title: "AI-assisted investment research and screening",
    orgSlug: "regional-financial-institution",
    platform: "LodestarT sourced",
    owner: "Regional Financial Institution",
    ownerMark: "RFI",
    sector: "FinTech",
    fn: "Research",
    cover: "finance",
    tags: ["AI & Data", "Investment Research"],
    desc: "A Singapore-headquartered financial group is seeking AI solutions to automate investment screening and research coverage. Identity disclosed to matched companies.",
    title_ko: "AI 기반 투자 리서치 및 스크리닝",
    sector_ko: "핀테크",
    desc_ko:
      "싱가포르에 본사를 둔 금융 그룹이 투자 스크리닝과 리서치 커버리지를 자동화할 AI 솔루션을 찾고 있습니다. 기관명은 매칭된 기업에만 공개됩니다.",
    prize: "Paid PoC",
    deadline: "Rolling",
    status: "open",
  },
];

export const CHALLENGE_SECTORS = [
  "Healthcare",
  "FinTech",
  "Logistics",
  "Retail",
  "Sustainability",
  "Professional Services",
];

export const CHALLENGE_PLATFORMS = ["IMDA OIP", "OIN", "MAS", "EnterpriseSG", "LodestarT sourced"];

export const CHALLENGE_STATUS = [
  { value: "all", label: "All" },
  { value: "open", label: "Open" },
  { value: "closing", label: "Closing soon" },
];

// ============================================================
// Trust marks — real logo files in /public/logos (transparent PNG, 96px tall).
// `w` is the intrinsic width at that height, used for correct aspect ratio.
// ============================================================

export const TRUSTED_BY = [
  { name: "Korean Chamber of Commerce in Singapore", src: "/logos/kocham.png", w: 368 },
  { name: "Seoul Business Agency", src: "/logos/sba.png", w: 166 },
  { name: "Chung Mong-Koo Foundation", src: "/logos/cmk-foundation.png", w: 336 },
  { name: "Korea Arts Management Service", src: "/logos/kams.png", w: 250 },
  { name: "Fintech Center Korea", src: "/logos/fintech-center-korea.png", w: 403 },
];

export const PARTNERS = [
  { name: "Pinetree Securities", src: "/logos/pinetree.png", w: 252 },
  { name: "WILT", src: "/logos/wilt.png", w: 257 },
  { name: "MYSC", src: "/logos/mysc.png", w: 282 },
  { name: "CO-AXIS", src: "/logos/coaxis.png", w: 89 },
  { name: "Centre for Impact Investing and Practices", src: "/logos/ciip.png", w: 432 },
  { name: "Temasek Lifesciences Laboratory", src: "/logos/temasek-lsl.png", w: 143 },
];
