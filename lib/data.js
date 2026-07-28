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
    edition: "2025",
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
    edition: "2025",
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
    edition: "2025",
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
    edition: "2025",
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

  {
    slug: "eastseabrother",
    name: "Eastseabrother Co., Ltd.",
    programme: "KIMST",
    sector: "Pet Food / Blue Food",
    hq: "Goseong, Gangwon-do, South Korea",
    banner: {
      brand: "Eastseabrother",
      title: "Sashimi-grade seafood pet food, from Korea to the U.S.",
      tags: "#PetFood #BlueFood #D2C",
    },
    summary:
      "Eastseabrother turns whole, sashimi-grade local seafood into preservative-free pet treats, having sold out a dedicated U.S. retail shelf, won Plug and Play's Silicon Valley shark-tank competition outright, and built an NPS of 76.3% among Korean customers.",
    summary_ko:
      "동해형씨는 강원 고성 지역 수산물을 원물 그대로 활용한 반려동물 수제식품 브랜드로, 미국 EarthWise Pet 단독매대 완판, 실리콘밸리 Plug and Play 샤크탱크 종합 1위, NPS 76.3%의 국내 팬덤을 확보했습니다.",
    hq_ko: "대한민국 강원특별자치도 고성군",
    funding_ko:
      "엔젤 5천만원(어반플레이 홍주석 대표, 21년 12월) + 중소벤처기업진흥공단 3억원(기업가치 50억, 25년) — 민간 VC 포함 약 5억원 신규 투자 유치 진행 중 (중진공 외 3개사로부터는 1억 이하 조건으로 거절)",
    overview_ko: [
      "2019년 개인사업자로 시작해 2021년 법인 전환한 동해형씨는 강원 고성 항구에서 입찰한 횟감 수준의 생선을 원물 그대로 반건조·완건조하여 반려동물 간식으로 만드는 수산물 펫푸드 브랜드입니다. 채소·육류와 달리 형태 보존이 어려운 수산물을 염분 0.1% 이하, 첨가물 없이 가공하는 고유 제조법 특허를 보유하고 있습니다.",
      "2023년 국내 펫산업 최초로 국무총리상을 수상했고, 2024년 홍콩·필리핀·사우디 수출을 시작으로 2025년에는 실리콘밸리 Plug and Play 샤크탱크에서 AI·Tech·SaaS 스타트업 20개사를 제치고 종합 1등, 스탠포드 컨슈머 액셀러레이터 프로그램의 Maum Market에서 K-뷰티 브랜드 등 14개사와 경쟁해 판매액·베스트부스 1위를 차지했습니다. 현재 미국 내 200개 체인을 보유한 EarthWise Pet에 단독매대로 입점해 있으며, 2025년 12월 내 뉴욕·LA의 Maum Store와 멕시코 Back to Raw 입점이 예정되어 있습니다.",
    ],
    overview: [
      "Founded in 2019 (incorporated 2021), Eastseabrother is a South Korean seafood pet-food brand based in Goseong, Gangwon-do. It sources sashimi-grade fish through a local seafood auction and dries it whole — patented to preserve shape and nutrition at under 0.1% salinity with no additives, unlike the meat- and vegetable-based pet treats that dominate the market.",
      "Korea's pet industry's first Prime Minister's Award winner (2023), the company began exporting to Hong Kong, the Philippines, and Saudi Arabia in 2024. In 2025 it placed 1st overall against 20 Korean AI/Tech/SaaS startups at a Plug and Play Silicon Valley shark-tank event, and won 1st place (total sales and best booth) among 14 companies including major K-beauty brands at Stanford's Consumer Accelerator Maum Market. It currently holds an exclusive shelf at EarthWise Pet (a 200-store U.S. chain), with placements at Maum Store (NY/LA) and Back to Raw (Mexico) confirmed for December 2025.",
    ],
    funding:
      "Angel ₩50M (Dec 2021, from Urban Play's Hong Ju-seok) + KOSME ₩300M at ₩5B valuation (2025) — raising ~₩500M incl. private VC (3 other VCs offered <₩100M and were declined)",
    team: [
      { name: "Eun-yul Kim", role: "Founder & CEO", notes: "Planning, design & overall management · Architecture (Sungkyunkwan Univ.)" },
      { name: "Seong-il Hwang", role: "COO", notes: "Corporate sales background · Domestic/overseas sales & trade accounts" },
      { name: "Ye-ji Song", role: "Head of Customer Experience", notes: "Longest-tenured employee · Production/quality & VIP management" },
      { name: "Seo-yul Hwang", role: "Operations", notes: "5 yrs operations planning · Accounting major" },
    ],
    problem: [
      "The pet-food market is dominated by unhygienic, producer-centric processed foods rather than transparent, fresh-ingredient options.",
      "Existing choices are largely limited to high-saturated-fat meat or low-palatability vegetables, with grain gluten causing digestive and allergy issues.",
      "Alternative diets (raw feeding, insect protein) carry real anxiety around parasites, cost, and palatability.",
      "Consumers lack clear labeling and life-stage-appropriate nutrition information at the point of purchase.",
    ],
    opportunity: [
      "Global pet industry: USD 261B (2022) → USD 350B (2027E), +6.1% CAGR; pet food is the single largest category at ~38%.",
      "In the US pet-food market (₩69.5T in 2024), premium dry food (31.1%) and treats (25.6%) together exceed 50% — Eastseabrother's exact product categories — with the premium treat segment growing at 10.36% CAGR.",
      "Seafood produces just 1–5kg of carbon per kg consumed versus 150–750kg for meat, aligning with rising sustainability-minded pet ownership.",
    ],
    advantage: [
      "Patented manufacturing process preserving whole-fish shape and nutrition at <0.1% salinity without additives — GC-MS/MS testing shows 5x+ the aroma compounds and 18x+ the hardness/texture retention of competing seafood pet treats.",
      "40+ single-species seafood SKUs (21 premium, domestic-sourced; 19 casual, import-blended) versus competitors' unfocused multi-category ranges.",
      "26 domestic/international IP registrations (2 manufacturing patents, 2 trademarks, 13 design/copyright registrations, ISO 22000, US FDA).",
      "NPS 76.3% — more than double the premium pet-brand average (~40–50%) and on par with Starbucks/Netflix-tier loyalty; 371,475 cumulative pets served, 31,067 aggregated customers.",
    ],
    solution: {
      lead: "Whole-fish, additive-free seafood pet food",
      groups: [
        {
          title: "Premium line — domestic, sashimi-grade",
          items: [
            "21 types, whole-fish/half-dried, direct-manufactured under the brand's own IP.",
            "2024 sales ₩269.2M at 48.2% margin; sold in Hong Kong, Singapore, Thailand (planned), with the US/Europe/Japan the expected next-tier demand.",
          ],
        },
        {
          title: "Casual line — imported, cost-accessible",
          items: [
            "19 types, freeze-dried, OEM-manufactured with Korean-script packaging aimed at Hallyu-sensitive Southeast Asian markets.",
            "2024 sales ₩248.4M at 34.9% margin; the higher-volume export driver (70.2% of export value).",
          ],
        },
        {
          title: "Life-stage curation",
          items: ["Curated recommendations by pet age, weight, health condition, and dietary need across all 40+ SKUs."],
        },
      ],
    },
    businessModel: {
      lead: "D2C + retail + export, split across three channels",
      items: [
        "Online (41.4% of 2024 revenue): owned store + premium platforms — lower commission fees than competitors.",
        "Offline (39.9%): in-house flagship store in Goseong plus curated exhibition placements.",
        "Export (18.7%, growing to a 2028 target of 40%+): direct-brand entry into the US market, not OEM or one-off test shipments — a rare direct-export case for a traditional-manufacturing SME recognized at the 30th Korea Distribution Awards.",
      ],
    },
    achievements: [
      "Korea's first Prime Minister's Award in the pet industry (Sept 2022).",
      "Top-10 Strong SME (Global category) among 9,000+ companies (2024); Gangwon Export Special Award alongside Samyang Foods and 10 other companies (2025).",
      "Exclusive shelf ('Fish Market' concept) at EarthWise Pet, a 200-store US pet retail chain — 10+ overseas and 2 domestic news features.",
      "1st place overall (Best Product + Best Market Potential) at Plug and Play's Silicon Valley shark-tank among 20 Korean AI/Tech/SaaS startups (Aug 2025).",
      "1st place (total sales + best booth) at Stanford Consumer Accelerator's Maum Market, San Francisco, competing against 14 companies incl. major K-beauty brands (Sept 2025).",
      "30th Korea Distribution Awards — Maeil Business Group Chairman's Award, first-ever recipient in the 'Globalization & Export Promotion' category (Dec 2025).",
    ],
    highlights: [
      "NPS 76.3% — Starbucks/Netflix-tier loyalty, 2x+ the premium pet-brand average",
      "5-year organic growth, CAGR 120.93% (2021–2025 revenue/output)",
      "40+ single-category SKUs, 26 IP registrations, ISO 22000 + US FDA",
      "Targeting ₩10B (≈$7M+) revenue and 40%+ export share by 2028–29",
    ],
    hashtags: ["PetFood", "BlueFood", "D2C"],
    website: "https://www.eastseabrother.com",
    deck: { name: "IR자료_주식회사_동해형씨.pdf", size: "21.3 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "willog",
    name: "Willog Inc.",
    programme: "KIMST",
    sector: "Marine Logistics / AIoT",
    hq: "Seoul, South Korea (Singapore entity established for SEA expansion)",
    banner: {
      brand: "Willog",
      title: "AIoT supply-chain intelligence for marine logistics",
      tags: "#AIoT #ColdChain #MarineLogistics",
    },
    summary:
      "Willog builds patented IoT sensors and an AI platform that track location, temperature, humidity, shock, tilt, and light across the seafood and marine cold chain, preventing spoilage losses, and is expanding into Southeast Asia through a Singapore entity and MOUs in Indonesia.",
    summary_ko:
      "윌로그는 위치·온도·습도·충격·기울기·조도 6가지 데이터를 실시간 수집하는 특허 IoT 센서와 AI 플랫폼으로 해양수산 물류의 손실을 방지하며, 싱가포르 법인 설립과 인도네시아 MOU를 기반으로 동남아시아 시장에 진출하고 있습니다.",
    hq_ko: "대한민국 서울 (동남아 진출을 위한 싱가포르 법인 설립 완료)",
    funding_ko:
      "지분투자 라운드 미공개 — 정부 R&D/사업화 자금 기준 Scale-Up TIPS 14.25억(2023~2026) · KAIA 융복합R&D 11.60억(2025~2027) · 초격차 DIPS 2.00억(2026~2027) · 농림부 콜드체인AI 1.12억(2026~2030) 수행 중",
    overview_ko: [
      "2021년 5월 창업한 윌로그는 해상·육상 운송과 창고 보관 전 구간에서 발생하는 데이터 사각지대를 해소하는 AIoT 공급망 인텔리전스 기업입니다. 특허 IoT 센서(Willog SAFE), 통합 데이터 플랫폼(CONTROL TOWER), AI 버티컬 인사이트(INTELLIGENCE) 3단 구조로 위치·온도·습도·충격·기울기·조도 6가지 핵심 데이터를 실시간 수집·분석합니다.",
      "2025년 매출 40.1억원, 고객사 100개 이상, 계약갱신율 100%·이탈율 0%를 기록했으며, 국토부 물류대상·NIPA ICT대상·대통령 표창을 수상했습니다. 육군 스마트물류 MOU, 인도네시아 ICCA MOU를 체결했고, 2026년에는 싱가포르 법인을 거점으로 인도네시아·말레이시아·베트남·태국 해양수산 물류 시장에 순차적으로 진출할 계획입니다.",
    ],
    overview: [
      "Founded in May 2021, Willog is an AIoT supply-chain intelligence company closing the data blind spots that occur across sea/land transport and warehouse storage. Its three-layer stack — patented IoT sensors (Willog SAFE), an integrated data platform (CONTROL TOWER), and AI vertical insight (INTELLIGENCE) — collects and analyzes six core data types in real time: location, temperature, humidity, shock, tilt, and light.",
      "In 2025 the company posted ₩4.01B in revenue with 100+ client companies, a 100% contract renewal rate, and 0% churn, and has been recognized with the Ministry of Land's Logistics Award, the NIPA ICT Award, and a Presidential Citation. It has signed an MOU with the Korean Army on smart logistics and an MOU with Indonesia's ICCA, and plans to expand sequentially into Indonesia, Malaysia, Vietnam, and Thailand's marine/seafood logistics markets in 2026 via its newly established Singapore entity.",
    ],
    funding:
      "No disclosed equity round in this deck — operating on government R&D/commercialization grants: Scale-Up TIPS ₩1.425B (2023–2026), KAIA R&D ₩1.16B (2025–2027), 초격차 DIPS ₩200M (2026–2027), MAFRA cold-chain AI ₩112M (2026–2030)",
    team: [{ name: "Hyun-ho Shin", role: "Head of External Affairs", notes: "Represented in this deck; full leadership team not disclosed" }],
    problem: [
      "Global supply chains lose an estimated $1.3T annually, with data blind spots during sea/land transport and warehousing as the core cause.",
      "~30% of seafood and food products are lost to spoilage from temperature/humidity excursions — about $1T in food and seafood discarded annually worldwide.",
      "The average company loses 3–7% of revenue to supply-chain risks such as cold-chain failure, shock, and delay.",
      "Without real-time tracking of all six variables (location, temperature, humidity, shock, tilt, light), losses cannot be prevented proactively.",
    ],
    opportunity: [
      "Marine/seafood cold chain (Smart Blue Food): maintaining freshness from sea to inland destination end-to-end prevents export losses and strengthens distribution competitiveness.",
      "Coastal/port logistics: real-time container shock/tilt/location tracking eliminates blind spots across shipping and ports.",
      "Traditional industry DX: AI/IoT/big-data-driven smart logistics fused into shipbuilding, shipping, and port operations.",
      "Supply-chain AI intelligence: Southeast Asia (Indonesia, Malaysia, Vietnam, Thailand) targeted directly as a marine-trade logistics hub via the Singapore entity.",
    ],
    advantage: [
      "Korea's only 6-in-1 real-time logistics data collection system, built on 4 patented IoT sensors, achieving zero blind spots across the sea-transport-to-warehouse chain.",
      "Proven commercial traction: 100+ clients, 100% contract renewal, 0% churn, ₩4.01B 2025 revenue (up from ₩1.537B in 2023).",
      "Already-validated global readiness: Singapore entity established, ICCA (Indonesia) MOU signed, Korean Army smart-logistics MOU signed.",
      "44 IP registrations (20 patents, 7 designs, 17 trademarks) plus ISO 14001/27001/27017 certification.",
    ],
    solution: {
      lead: "Willog SAFE + CONTROL TOWER + INTELLIGENCE",
      groups: [
        {
          title: "Willog SAFE — patented IoT sensor devices",
          items: [
            "S2, T1, V2 device line collecting 6 core data types in real time: location, temperature, humidity, shock, tilt, light.",
            "24/7 monitoring across the entire sea-to-warehouse segment, with seawater temperature/humidity-specialized sensor modules.",
          ],
        },
        {
          title: "Willog CONTROL TOWER — data platform",
          items: [
            "End-to-end integrated visibility across port, warehouse, and transport operations via a unified dashboard.",
            "Real-time anomaly alerts and response workflows, with multi-language support for Southeast Asia localization.",
          ],
        },
        {
          title: "Willog INTELLIGENCE — AI vertical insight",
          items: [
            "Logistics-vertical AI risk prediction and dynamic risk management (Dynamic RM).",
            "Predictive seafood spoilage detection and ETA optimization with cost-saving recommendations.",
          ],
        },
      ],
    },
    businessModel: {
      lead: "IoT hardware + SaaS platform + AI insight subscription (B2B)",
      items: [
        "Targets shippers with high-value/sensitive cargo (life sciences & pharma, semiconductors/precision equipment, chemicals & energy, premium F&B) and logistics service providers (global freight forwarders, 3PL/specialized warehousing).",
        "2026 strategic targets: Compliance (GxP-regulated bio/medtech shippers), Asset Protection (semiconductor/precision-equipment shock damage prevention), and Efficiency (ESG-reporting companies needing carbon/visibility data).",
        "2026 go-to-market for Southeast Asia via direct sales (Singapore entity B2B contracts), partnerships (local logistics companies/associations), and government MOU-to-commercialization pathways.",
      ],
    },
    achievements: [
      "MAT 2026: AQL 2,090 units (130.6% of target), SQL 359 units (+20% YoY).",
      "MOUs signed with the Korean Army (smart logistics) and Indonesia's ICCA.",
      "Government R&D/commercialization funding: Scale-Up TIPS ₩1.425B, KAIA R&D ₩1.16B, 초격차 DIPS ₩0.2B, in progress.",
      "Ministry of Land, Infrastructure and Transport Logistics Award, NIPA ICT Award, and a Presidential Citation.",
      "20 patents, 7 design registrations, 17 trademarks; ISO 14001/27001/27017 certified.",
    ],
    highlights: [
      "Revenue CAGR: ₩1.537B (2023) → ₩2.851B (2024) → ₩4.01B (2025)",
      "100+ clients, 100% renewal rate, 0% churn",
      "73 employees, government projects running across 4 ministries",
      "2026 roadmap: Singapore localization → Indonesia/Vietnam PoC → 2+ new MOUs → global VC fundraising (Q1 '27)",
    ],
    hashtags: ["AIoT", "ColdChain", "MarineLogistics"],
    website: null,
    deck: { name: "윌로그_2026_해양수산AC_발표심사_자료.pdf", size: "588 KB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "cutshion-pionoid",
    name: "CUTSHION Inc. (Pionoid)",
    programme: "KIMST",
    sector: "Robotics Middleware",
    hq: "Seoul, South Korea (U.S. entity established in Fairfax County, VA)",
    banner: {
      brand: "Pionoid",
      title: "The middleware platform for robotics applications",
      tags: "#Robotics #Middleware #IndustrialAI",
    },
    summary:
      "Cutshion operates Pionoid, a middleware platform sitting between robot OS/hardware and applications — already proven with mobile welding robots deployed at Hyundai Heavy Industries (the world's #1 shipbuilder) — and is scaling toward a general-purpose robot-app ecosystem with a developer-subscription and app-store revenue model.",
    summary_ko:
      "컷션(대표 이민석)은 로봇 OS/하드웨어와 애플리케이션 사이의 미들웨어 플랫폼 '피오노이드'를 운영합니다. 세계 1위 조선사 현대중공업에 도입된 모바일 용접로봇으로 검증받았으며, 개발자 구독료와 다운로드 수익쉐어 기반의 로봇 앱 생태계로 확장 중입니다.",
    hq_ko: "대한민국 서울 (미국 버지니아주 페어팩스 카운티 법인 설립)",
    funding_ko: "시드 5억원 유치 — Pre-A 및 Series A 투자 유치 진행 중 (미국 시장 진출 단계)",
    overview_ko: [
      "컷션은 로봇 애플리케이션 개발을 표준화하는 미들웨어 플랫폼 '피오노이드'를 개발하는 로보틱스 기업입니다. 조선업의 핵심 공정인 용접 인력이 10년 내 20.3만 명에서 9.5만 명으로 절반 이상 감소하는 문제에서 출발해, 12kg 모바일 용접로봇 3대를 세계 1위 조선사 현대중공업에 납품하고 실제 현장에서 운영 중입니다.",
      "용접 로봇에서 출발해 샌딩·페인팅·검사 등 조선 특화 로봇 애플리케이션으로 확장하고 있으며, '피오노이드'는 로봇 OS/하드웨어(Google, Amazon, NVIDIA 등)와 로봇 앱 개발사(Bear Robotics, Clobot 등) 사이의 범용(General-Purpose) SW중심 미들웨어로 포지셔닝하고 있습니다. 개발자에게는 웹 프레임워크·SDK·가상 시뮬레이션·통합 API를, 로봇 사용자에게는 앱 배포·라이선스 관리·OTA 업데이트를 제공하는 'Factory + Store' 구조입니다.",
    ],
    overview: [
      "Cutshion Inc. develops Pionoid, a middleware platform that standardizes the development and distribution of robot applications. The company started from a stark labor problem — shipbuilding's welding workforce is set to fall by more than half within a decade (203,000 → 95,000) — and has delivered 3 units of its 12kg mobile welding robot to Hyundai Heavy Industries, the world's #1 shipbuilder, where they are operating on-site today.",
      "Having proven itself in welding, the company is expanding into other shipyard-specific robot applications (sanding, painting, inspecting), positioning Pionoid as a software-centric, general-purpose middleware layer between robot OS/hardware providers (Google, Amazon, NVIDIA) and robot-app developers (Bear Robotics, Clobot, etc.). The platform runs on a 'Factory + Store' structure: Factory gives developers a web framework, SDKs, virtual simulation, and a unified API library; Store handles app distribution, license management, and OTA updates for robot end-users.",
    ],
    funding: "Seed ₩500M raised — currently raising Pre-A & Series A alongside U.S. market entry",
    team: [
      { name: "Minseok Lee", role: "Founder & CEO", notes: "M.S. Computer Science, Seoul National Univ. · Ex-VP @Future Robot · 25 yrs IT & Robotics" },
      { name: "Sangjo Kim", role: "CTO", notes: "Mechanical Design, Hanyang Univ. · Ex-Chief Researcher @LG Electronics · 32 yrs robotics (incl. robot vacuum cleaners)" },
      { name: "Taejin Kim", role: "CIO", notes: "M.S. Seoul National Univ., Ph.D. Seoul Nat'l Univ. of Science & Technology · Co-CEO @Biz Data · 10 yrs AI business" },
      { name: "Ingu Kang", role: "CMO", notes: "Hanyang Univ. Law · Ex-Marketing Director @Future Robot, RoboCare · 20 yrs robot marketing" },
      { name: "Shinhee Mo", role: "COO", notes: "Ph.D. candidate, Architecture, Chosun Univ. · Licensed architect · 10 yrs IT venture management" },
      { name: "Heesun Kim", role: "CSO", notes: "Ph.D. Clothing & Textiles, Seoul National Univ. · Ex-Team Lead @GS Shop · 30 yrs marketing" },
      { name: "Deokgeun Kim", role: "CDO", notes: "Industrial Design, Hongik Univ. · Ex-Team Lead, LG Electronics Design Lab" },
      { name: "Jinhyeong Cho", role: "CLO", notes: "Law, Chung-Ang Univ. · Ex-Team Lead @Hana Capital · 25 yrs F&B/healthcare" },
    ],
    problem: [
      "Shipbuilding's welding workforce is projected to fall by more than half within a decade (203,000 → 95,000), directly threatening production speed — no welders, no ships.",
      "Robot software development today is fragmented: apps must be rebuilt per robot brand/hardware spec, with no standardized way to develop once and deploy across many robot platforms.",
    ],
    opportunity: [
      "The robotics market is rapidly shifting to a software-driven model: TAM (Global Robotics Market) $53.2B, SAM (Global Robotics SW Market) $20.1B, SOM (US Robot SW market) $13.6B.",
      "General-purpose, software-centric middleware remains a largely open position between hardware-centric robot makers (Universal Robots, Doosan, Yaskawa, ABB) and special-purpose robot-app companies.",
    ],
    advantage: [
      "Already proven at the world's #1 shipbuilder: Hyundai Heavy Industries has 3 mobile welding robot units in real on-site operation.",
      "Expansion beyond welding into sanding, painting, and inspection robot applications on the same middleware base.",
      "Positioned as the middleware connecting robot OS/hardware giants (Google, Amazon, NVIDIA, Meta) to robot-app developers (Bear Robotics, Clobot, Connected Robotics) — a 'Built on Pionoid' ecosystem strategy.",
      "Industry partnerships already in place (JAKA, BorgWarner, Mushiny, Omron, Zimmer Group, Thira Robotics) and clients including Mega Coffee, HD Hyundai Heavy Industries, Yoochang, MANN+HUMMEL, Screen HD Korea.",
    ],
    solution: {
      lead: "Pionoid — middleware between Robot OS/HW and Applications",
      groups: [
        {
          title: "Factory (for developers)",
          items: ["Web framework & SDKs", "Virtual simulation", "Unified API library"],
        },
        {
          title: "Store (for robot users)",
          items: ["App distribution", "License management", "OTA updates"],
        },
        {
          title: "Applications built on Pionoid",
          items: ["Welding (proven, in production)", "Sanding", "Painting", "Inspecting"],
        },
      ],
    },
    businessModel: {
      lead: "Two-sided platform: developer subscription + usage-based revenue share",
      items: [
        "For developers: annual subscription fee for access to Factory tools (SDKs, simulation, API library).",
        "For robot users: per-download fee with revenue share back to the app developer — an app-store model for robotics ('More Apps → More Users → More Revenue').",
      ],
    },
    achievements: [
      "Delivered 3 mobile welding robot units to Hyundai Heavy Industries (world's #1 shipbuilder), operating on-site.",
      "Supplied a palletizing robot to Screen HD Korea.",
      "Commercialized a barista robot; supplied an AI drawing robot to a regional Korean education office.",
      "Participated in CES 2024 and CES 2025.",
      "Raised ₩500M in seed funding.",
      "Established a U.S. entity in Fairfax County, VA, entering the U.S. market with its barista robot; participating in the 2026 NRA Show Chicago.",
    ],
    highlights: [
      "Proven welding-robot deployment at the world's #1 shipbuilder",
      "'Built on Pionoid' ecosystem strategy — scaling via high-impact robot apps",
      "Positioned as general-purpose, software-centric middleware between Robot OS and Robot App layers",
      "Roadmap: 2024–25 commercial deployment → current U.S. market entry & Pre-A/Series A → 2027–29 platform scale-up & IPO",
    ],
    hashtags: ["Robotics", "Middleware", "IndustrialAI"],
    website: null,
    deck: { name: "쿳션_2026_해양수산AC_발표심사_자료.pdf", size: "2.1 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "haesong",
    name: "Haesong S&T Co., Ltd.",
    programme: "KIMST",
    sector: "Alternative Seaweed / Food Ingredients",
    hq: "Gwangju, South Korea",
    banner: {
      brand: "HAESONG",
      title: "Standardizing the world's 'black semiconductor' — alternative seaweed at industrial scale",
      tags: "#AlternativeSeaweed #FoodIngredients #B2BTrade",
    },
    summary:
      "Haesong S&T is a B2B food-ingredient trading and manufacturing company that sources, standardizes and exports seaweed and marine raw materials across 7 countries, and has developed a patented alternative-seaweed (artificial laver) technology that solves the industry's core supply bottleneck — a 3-month annual farming window and 24-hour shelf life for raw wet laver — at roughly half the cost and four times the raw-material pool of traditional dried laver.",
    summary_ko:
      "해송물산은 한국·러시아·중국산 해조류를 표준화해 일본 등 7개국에 유통하는 B2B 식품원료 무역기업으로, 연중 3개월 양식·24시간 유통기한이라는 김 산업의 구조적 공급 한계를 극복하는 특허 대체김(인공김) 기술을 개발해 기존 대비 절반 원가, 4배 이상의 원료 풀로 태국·베트남·일본 주요 기업들과 PoC를 진행하고 있습니다.",
    hq_ko: "대한민국 광주광역시 첨단",
    funding_ko:
      "IR자료 내 지분투자 라운드 별도 기재 없음 — 특허(등록4/출원2), 인증4건(미국FDA, HACCP, 벤처기업, 연구개발전담부서) 보유, 2024년 900만 달러 수출 실적 기반 사업 확장 중",
    overview_ko: [
      "2020년 5월 설립된 해송물산은 미국·일본·러시아·중국·인도·동남아·남미를 잇는 수출입 네트워크를 기반으로 해조류·건조과일·수산물(부산물) 원료를 표준화해 일본 등지의 식품기업에 공급하는 B2B 식품원료 무역기업입니다. 산지별로 상이한 김·다시마 원료를 두께·강도·색상·해조취 등 기준에 따라 4개 등급으로 표준화하는 ODM 역량을 보유하고 있습니다.",
      "2022년 대체김(인공김) 기술 개발을 시작해 해조류 중금속 흡착 기술, 해조취·풍미 제어 기술, 맞춤형 성질 제어 기술 등 14단계 공정을 자체 개발했으며, 미국 FDA 인증과 국내 특허 2건(중금속 제거 해조류 가공방법, 미역피클)을 보유하고 있습니다. 태국 1위 김스낵 기업 TAOKENOI, 베트남 Smile Nuts, 일본 대형 종합상사 KATO SANGYO(연매출 12조원), SOKAN, Mirai, Hamaotome 등과 PoC 및 실제 공정 적용 테스트를 진행 중이며, 2026~2036년 매출 200억→1,200억원, 2036년 이후 5,000억원 규모의 3단계 성장 시나리오를 제시하고 있습니다.",
    ],
    overview: [
      "Founded in May 2020, Haesong S&T is a B2B food-ingredient trading company built on an export/import network spanning the US, Japan, Russia, China, India, Southeast Asia, and South America, standardizing seaweed, dried-fruit, and marine-byproduct raw materials for supply to Japanese and other food manufacturers. Its ODM capability standardizes laver and kelp from different growing regions into four quality grades based on thickness, tensile strength, color, and odor.",
      "Since 2022 the company has developed a proprietary 'alternative seaweed' (artificial laver) technology — a 14-step process covering heavy-metal adsorption, odor/flavor control, and customizable texture — holding a US FDA certification and two domestic patents (heavy-metal-removal seaweed processing, kelp pickle). It is running PoC and live production trials with Thailand's #1 seaweed-snack brand TAOKENOI, Vietnam's Smile Nuts, Japan's KATO SANGYO (a ₩12T-revenue general trading house), SOKAN, Mirai, and Hamaotome, and lays out a 3-stage growth scenario from ₩20B (2020–26) to ₩120B (2026–36) to ₩500B (2036+).",
    ],
    funding: "No equity round disclosed in this deck — self-funded growth via $9M in 2024 export revenue, 4 patents/certifications, and government R&D-lab recognition",
    team: [
      { name: "Jun-hwa Song", role: "Founder & CEO", notes: "Osaka Sangyo Univ. production systems (grad study) · Jeonnam National Univ. MBA · 17+ yrs in the seaweed industry · Ex-Hyundai Motor" },
      { name: "Yeong-hun Son", role: "Management Strategy", notes: "Sejong Univ. AI (grad study) · Hongik Univ. Big Data · Korea Health Promotion Institute researcher" },
      { name: "Eun-ji Kwak", role: "Distribution & Sales", notes: "Chosun Univ. Chinese Literature · 3+ yrs in the seaweed industry · Japan sales & communications" },
    ],
    problem: [
      "Korean laver (gim) farming is limited to a roughly 3-month annual window in 5–15°C water, while harvested raw wet laver has only a 24-hour shelf life before quality degrades.",
      "Intermediate-goods (dried laver) quality varies year to year and region to region because factories blend auction-sourced wet laver from multiple coastal areas with no standardized input specification.",
      "Manufacturers must pay upfront in cash each year for a full year's worth of raw material within a narrow purchasing window, straining working capital and inventory risk.",
      "Climate change is projected to further shrink laver farming yields — a 1°C water-temperature rise alone is estimated to cause ₩476.3B in industry damage — even as global demand and Korea's government export target ($1.8B by 2027) keep rising.",
    ],
    opportunity: [
      "TAM (global seaweed/laver industry): ~₩8T by 2028E, growing at an 8–10% CAGR as global demand for a healthy, low-carbon protein/snack source rises.",
      "SAM (global B2B processed-seaweed ingredient market): ~₩4T, covering seaweed-snack OEM, boxed-lunch laver, and furikake-style categories with repeat-purchase, long-term supply contracts.",
      "SOM (Japan + Southeast Asia + Korea laver raw-material market): ~₩2T immediately addressable; a 5% share scenario alone implies ₩100B+ in revenue.",
      "Korea's laver exports already rank as its #2 single food-ingredient export item ($1.1B of $13B total food exports in 2025, ~20% of all food exports), with the government targeting $1.8B by 2027.",
    ],
    advantage: [
      "Cost & quality: alternative seaweed supplied at 10%+ below standard laver pricing with roughly 30% of the raw-material cost structure, while offering 4x+ the usable raw-material pool (Russian/Chinese unused coastal seaweed plus Korean natural seaweed) versus traditional laver farming.",
      "Proprietary process technology: heavy-metal adsorption/removal tech (2 domestic patents + 1 tech-transfer), odor/flavor control, and texture customization across 14 process steps — validated in-house via amino-acid and nutrient-composition comparison testing.",
      "Certifications & IP: US FDA certification, HACCP, venture-company certification, dedicated R&D department recognition; 4 registered patents, 4 certifications, 2 patents pending.",
      "Commercial traction: live PoC/production trials with Thailand's TAOKENOI (#1 seaweed snack brand), Vietnam's Smile Nuts, and Japan's KATO SANGYO, SOKAN, Mirai, and Hamaotome — several already discussing quota and import-classification treatment with local authorities.",
    ],
    solution: {
      lead: "Alternative Seaweed (대체김) — a standardized raw-material layer for the global laver industry",
      groups: [
        {
          title: "Raw-material sourcing",
          items: [
            "Russian & Chinese unused coastal seaweed plus Korean natural seaweed feed a raw-material pool 4x larger than traditional laver farming.",
            "Removes the industry's dependence on a 3-month annual harvest window.",
          ],
        },
        {
          title: "14-step proprietary process",
          items: [
            "Pre-treatment, heavy-metal removal, drying/texture control, and stabilization technology engineered for year-round (12-month) production.",
            "Molecular-level plasticization (SPI protein–glycerol hydrogen bonding) delivers flexibility on par with traditional dried laver.",
          ],
        },
        {
          title: "Standardized product tiers",
          items: ["Four quality grades (snack/sandwich/powder/premium use) standardized by thickness, tensile strength, color, and odor for different customer categories."],
        },
      ],
    },
    businessModel: {
      lead: "PoC → mass production → long-term supply contract, engineered for customer lock-in",
      items: [
        "Targets B2B raw-material buyers: furikake/seaweed-powder processors (Japan), seaweed-snack OEM factories (Southeast Asia), and boxed-lunch/seasoned-laver manufacturers (Korea) — not end consumers.",
        "Revenue shifts customers from lump-sum annual prepayment to monthly recurring supply, improving customer cash flow while securing Haesong's recurring revenue.",
        "Lock-in via customer-specific raw-material customization (blend ratio tailored to each customer's production line), making it costly for a locked-in buyer to switch suppliers.",
      ],
    },
    achievements: [
      "US FDA certification (Oct 2024); HACCP certification (Mar 2025); venture-company certification (Sep 2023); dedicated R&D department recognition (Aug 2025).",
      "2 registered patents (heavy-metal-removal seaweed processing; kelp pickle) + 1 trademark registration (바다몽초) + 2 patents pending.",
      "$9M in export revenue (2024), up from $1.5M (2023); Korea Fisheries Products Export Merit Award (Dec 2025).",
      "PoC/live-production trials underway with TAOKENOI (Thailand), Smile Nuts/Good Food (Vietnam), and KATO SANGYO, SOKAN, Mirai, Hamaotome (Japan).",
    ],
    highlights: [
      "3-stage growth roadmap: ₩20B (2020–26) → ₩150B (2026–36) → ₩500B (2036+)",
      "Alternative-seaweed raw-material pool 4x traditional laver farming, at ~30% of the cost",
      "7-country export/import infrastructure (Japan, China, Russia, US, India, SE Asia, S. America) with 32 active trading partners",
      "Already selling own consumer brands (미역김자반, SNACKSEA) alongside its B2B ingredient business",
    ],
    hashtags: ["AlternativeSeaweed", "FoodIngredients", "B2BTrade"],
    website: "https://www.haesongsnt.com",
    deck: { name: "해송물산_회사소개서_IR자료_26_04_22.pdf", size: "15.6 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "xylolabs",
    name: "Xylolabs Inc.",
    programme: "KIMST",
    sector: "Predictive Maintenance / Physical AI",
    hq: "Seoul, South Korea",
    banner: {
      brand: "Xylolabs",
      title: "Physical AI predictive maintenance for smart ports",
      tags: "#PredictiveMaintenance #PhysicalAI #PortTech",
    },
    summary:
      "Xylolabs builds Xylo-Zero, an on-device Physical AI sensor that fuses acoustic and PLC/drive data to detect equipment failure signs in continuously-run port and industrial machinery before they cause safety incidents, already running PoCs with Busan Port Authority, KOMIPO, KOSPO, and SK Shipping.",
    summary_ko:
      "자일로랩스는 항만·발전·제조 현장처럼 멈출 수 없는 연속운용 설비의 이상 징후를 음향·PLC 데이터 융합 AI로 실시간 감지하는 온디바이스 Physical AI 예측정비 솔루션 '자일로제로(Xylo-Zero)'를 개발하며, 부산항만공사·한국중부발전·한국남부발전·SK해운 등과 PoC를 진행하고 있습니다.",
    hq_ko: "대한민국 서울특별시 송파구 문정동",
    funding_ko:
      "2026년 2분기 시드 라운드 약 10억원 투자유치 진행 — 2025년 12월 법인 설립(기업부설연구소 포함), 2026년 총 13.4억원 운영 예산(매출·투자·정부지원금 재원)",
    overview_ko: [
      "2025년 12월 설립된 자일로랩스는 항만·발전·제조 현장의 연속운용 핵심설비에 부착해 이상 징후를 실시간으로 탐지하는 온디바이스 Physical AI 예측정비 솔루션 '자일로제로(Xylo-Zero)'를 개발합니다. 지름 100mm, 무게 300g의 비개조 부착형(자석/볼트) 디바이스가 마이크 2개와 가속도계·환경센서로 음향·PLC/드라이브 운전 데이터를 멀티모달로 수집하고, 운전상태 인지 기반 Context Gating 기술로 현장 상황별 신호를 선별 분석해 엣지에서 실시간 추론합니다.",
      "부산항만공사와는 부산신항 대형 크레인 설비를 대상으로 2026년 3월~6월 PoC를 진행 중이며(PoC 이후 2년간 총 20억원 규모 본 사업 예정), 한국중부발전 LNG 발전소 가스터빈, 한국남부발전 저탄장 아이들러, SK해운 선박 기관실 제어설비 등으로 PoC를 확장하고 있습니다. CEO 안광석은 서울대 공학박사(음향·오디오 정보분석)로 설비 상태분석·신호처리 분야 12년 경력을 보유하고 있으며, 2026년 목표는 PoC 10곳 확보와 매출 10억원 달성입니다.",
    ],
    overview: [
      "Founded in December 2025, Xylolabs develops Xylo-Zero, an on-device Physical AI predictive-maintenance sensor for continuously-operating port, power-plant, and manufacturing equipment. The 100mm-diameter, ~300g, non-invasive magnet/bolt-mounted device fuses acoustic signals (2 microphones) with accelerometer/environmental sensor data and PLC/drive operating data, using a proprietary 'Context Gating' technique that reads the machine's operating state to select and analyze the relevant signal in real time at the edge.",
      "The company is running a PoC on large gantry cranes at Busan New Port with Busan Port Authority (Mar–Jun 2026, with a ₩2B, 2-year follow-on program already earmarked post-PoC), and expanding PoCs to LNG gas-turbine generators (KOMIPO), coal-yard idler equipment (KOSPO), and vessel engine-room control gear (SK Shipping). CEO Kwangseok Ahn holds a Ph.D. in Engineering from Seoul National University (acoustics/audio signal analysis) with 12 years in equipment-condition analysis and signal processing; the company's 2026 target is 10 PoCs and ₩1B in revenue.",
    ],
    funding: "~₩1B Seed round targeted for Q2 2026 — ₩1.34B total 2026 operating budget from revenue, investment, and government grants",
    team: [
      { name: "Kwangseok Ahn", role: "Founder & CEO", notes: "Ph.D. Engineering, Seoul National Univ. (acoustics) · Ex-Perigee Aerospace R&D center lead · 12 yrs in equipment condition analysis & signal processing" },
      { name: "Jiyong Yoon", role: "CTO", notes: "Electrical & Computer Engineering, Seoul National Univ. · Data pipeline & operations infrastructure" },
      { name: "Soohwan Kim", role: "CFO", notes: "B.A. Economics, Seoul National Univ. · Ex-CFO @Perigee Aerospace, Ex-CFO @Frenttrip · KRX tech-listing reviewer" },
    ],
    problem: [
      "Port equipment (cranes, gantries) runs continuously under high noise and constantly varying load, and cannot be taken offline for routine inspection.",
      "When failures do occur, they escalate straight into logistics disruption or major safety incidents, but early-stage anomaly signs are difficult to identify under continuous operation.",
      "The prevailing maintenance model is reactive (fix-after-failure) with no clear criterion for when intervention is warranted — creating a narrow, high-risk gap between reacting too early (unnecessary production stoppage) and too late (safety incident).",
    ],
    opportunity: [
      "285 port accidents recorded over the last 5 years in Korea alone, with repeated calls for structural countermeasures — a clear near-term demand signal for predictive-maintenance systems in port operations.",
      "Beyond ports, the same architecture applies to any continuously-run critical equipment: power generation (LNG gas turbines, coal-yard idlers), shipping (vessel engine-room control gear), and general manufacturing.",
      "Government and utility procurement increasingly requires or rewards predictive-maintenance and safety-monitoring capability, creating pull-through demand from public-sector operators (Busan Port Authority, KOMIPO, KOSPO).",
    ],
    advantage: [
      "Context-aware multimodal fusion: combines standard PLC data with acoustic signals via 'Context Gating' that reads the machine's operating state to select which signals matter moment-to-moment — rather than static threshold alerts.",
      "Non-invasive, retrofit deployment: a 100mm/300g magnet-or-bolt-mounted device requires no equipment modification, with edge AI inference removing dependency on constant connectivity.",
      "Multi-sector PoC traction already secured across ports (BPA), power generation (KOMIPO, KOSPO), and shipping (SK Shipping) within months of incorporation — plus a Digital Twin dashboard and LLM-based operator decision support layered on top of the sensor.",
      "Founding team combines 12 years of acoustic/signal-processing research (CEO, ex-satellite-systems R&D lead) with prior aerospace CFO and tech-listing review experience.",
    ],
    solution: {
      lead: "Xylo-Zero — on-device Physical AI predictive maintenance",
      groups: [
        {
          title: "Data collection",
          items: ["Acoustic (2-mic) + accelerometer + environmental sensors fused with standard PLC/drive operating data — multimodal by design."],
        },
        {
          title: "Context Gating analysis",
          items: ["Reads the equipment's operating-state context to selectively analyze the signals relevant to that state, rather than applying one static model to all conditions."],
        },
        {
          title: "Real-time judgment & action",
          items: ["Edge AI inference on-device outputs a simple Normal / Inspection-needed signal, feeding a Digital Twin dashboard and an LLM layer for operator decision support."],
        },
      ],
    },
    businessModel: {
      lead: "Hardware device + Digital Twin platform + decision-support software, sold B2B/B2G into critical infrastructure operators",
      items: [
        "Entry via PoC with port, power, and shipping operators, converting into multi-year infrastructure/monitoring contracts (e.g., Busan Port Authority's earmarked ₩2B, 2-year follow-on program).",
        "Expansion path from port cranes into construction-site safety management, then into heavy industry/plant/manufacturing equipment monitoring using the same core sensor and platform.",
      ],
    },
    achievements: [
      "PoC confirmed with Busan Port Authority on large gantry cranes at Busan New Port (Mar–Jun 2026), with a ₩2B, 2-year follow-on program already budgeted post-PoC.",
      "Selected for Korea Institute of Marine Science & Technology Promotion's 2026 Blue Startup program; PoCs underway with KOMIPO (gas turbines), KOSPO (idler equipment), and SK Shipping (engine-room control gear).",
      "Selected for BNK Gyeongnam Bank's 2026 CHAIN-G program (3rd cohort) and MYSC's EMA Original 2026 accelerator.",
      "Founding team's prior track record includes 3x wins in Seoul National Univ.'s Real-World Problem competition, an AI Grand Challenge Minister's Award (2021), and a National AI Grand Challenge award (2019).",
    ],
    highlights: [
      "2026 target: 10+ PoCs across ports/energy/shipping and ₩1B in revenue",
      "Founding team: 12-year acoustic/signal-processing R&D lead (CEO) + aerospace-sector CFO/CTO experience",
      "3-year roadmap: Xylo-Zero (2026) → Xylo-Mini/Xylo-One (2027) → unified 'Xylo Solution' platform (2028)",
      "Patent filed (2026) for multimodal industrial-equipment anomaly-detection data collection",
    ],
    hashtags: ["PredictiveMaintenance", "PhysicalAI", "PortTech"],
    website: "https://xylolabs.com",
    deck: { name: "자일로랩스_2026_해양수산AC_발표심사_자료.pdf", size: "7.0 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },

  {
    slug: "double-t",
    name: "Double T Inc.",
    programme: "KIMST",
    sector: "Industrial Safety / Digital Twin",
    hq: "Suwon, South Korea",
    banner: {
      brand: "Double T",
      title: "Turning invisible risk into visible safety, from factories to the open sea",
      tags: "#IndustrialSafety #DigitalTwin #ComputerVision",
    },
    summary:
      "Double T runs Haimdall, a digital-twin safety platform that uses computer vision and UWB positioning to detect worker falls and hazardous behavior in real time — proven with zero incidents across subway depots, factories, and a biobank freezer room — and is now applying it to prevent man-overboard accidents on Korea's distant-water fishing fleet, with a signed contract to deploy across Dongwon Industries' entire 33-vessel fleet.",
    summary_ko:
      "더블티는 컴퓨터 비전과 UWB 위치추적 기반 디지털트윈 안전 플랫폼 '헤임달(Haimdall)'을 서울교통공사·HNT·국립인체자원은행 등 현장에서 사고 0건으로 검증했으며, 이제 원양어선 해상 추락사고 방지로 확장해 동원산업 원양어선 33척 전체 선단 도입 계약을 체결했습니다.",
    hq_ko: "대한민국 경기도 수원시 권선구 권광로97 더블티타워",
    funding_ko:
      "IR자료 내 지분투자 라운드 별도 기재 없음 — 자본금 1.22억원, 임직원 29명, 중소벤처기업부 장관상 수상 및 2026 넥스트 유니콘 프로젝트 후보기업 선정",
    overview_ko: [
      "2021년 1월 설립된 더블티는 '보이지 않는 위험을 보이는 안전으로' 만드는 데이터 기반 안전 플랫폼 기업으로, 디지털트윈·컴퓨터비전·UWB 위치추적을 결합한 '헤임달(Haimdall)'을 공급합니다. 서울교통공사 지하철 차량기지에서는 도입 이후 감전·끼임 사고 0건, HNT 중소 제조 현장에서는 지게차 충돌 사고 예측 82건 방어·실사고 0건, 국립인체자원은행 바이오뱅크 냉동고에서는 갇힘 사고를 원천 차단하는 등 까다로운 공공·산업 현장에서 실증을 마쳤습니다.",
      "동원산업과는 원양어선 33척 전체 선단에 해상 추락 방지 및 위치 관제 시스템 도입 계약을 체결했으며, 배 옆면 난간을 넘어서는 순간을 0.5초 내 감지(오보율 0.1% 이하)하는 가상 펜스(Virtual Fence) 기술과 갑판 전체를 3D 공간으로 인식하는 360도 사각지대 제거 기술을 적용합니다. 국내 유일 안전보건공단 인증을 획득했으며, 중소벤처기업부 장관상 수상 및 2026 넥스트 유니콘 프로젝트 후보기업으로 선정되어 네이버클라우드·삼성생명·토스·DELL 등과 협업을 확대하고 있습니다.",
    ],
    overview: [
      "Founded in January 2021, Double T is a data-driven safety-intelligence company turning invisible workplace risk into visible, actionable safety data through Haimdall, a platform combining digital twin modeling, computer vision, and UWB positioning. It has been validated in demanding public/industrial sites: zero electrocution/entrapment incidents at Seoul Metro's subway depot since deployment, 82 predicted-and-averted forklift collisions with zero actual incidents at manufacturer HNT, and elimination of freezer-entrapment risk at the National Biobank of Korea's sub-zero storage facility.",
      "Double T has signed a contract to deploy its man-overboard prevention and vessel-positioning system across Dongwon Industries' entire 33-vessel distant-water fishing fleet, using a 'Virtual Fence' that detects a worker crossing a vessel's railing within 0.5 seconds (under 0.1% false-alarm rate) and 360-degree blind-spot elimination that reads the whole deck as 3D space rather than a flat camera image. The company holds Korea's only Korea Occupational Safety & Health Agency (KOSHA) certification for its category, has won a Ministry of SMEs and Startups Minister's Award, is a candidate for the government's '2026 Next Unicorn' project, and is expanding partnerships with Naver Cloud, Samsung Life, Toss, and Dell.",
    ],
    funding: "No equity round disclosed in this deck — ₩122M paid-in capital, 29 employees, Ministry of SMEs & Startups Minister's Award, 2026 Next Unicorn Project candidate",
    team: [
      { name: "Youngjun Kim", role: "Founder & CEO", notes: "B.S. Computer Science, Kyung Hee Univ. · M.S. coursework, Data Science, Kyung Hee Univ. · Ex-LG Electronics (2015–2020, LG Electronics Innovation Award 2019) · Led LG Gram PC planning & development" },
    ],
    problem: [
      "Korea's Serious Accidents Punishment Act now imposes criminal liability (1+ year imprisonment or up to ₩1B fine) on executives after a fatal workplace accident, with punitive damages up to 5x, and coverage expanded (Jan 2024) to worksites with as few as 5 employees.",
      "On distant-water fishing vessels specifically, 63.1% of marine casualties in the last 25 years (3,513 incidents) were 'safety accidents,' with man-overboard incidents carrying a very high fatality rate.",
      "Long voyages leave almost no video, position, or condition data at the time of an incident, making root-cause reconstruction — and therefore prevention of repeat incidents — extremely difficult.",
      "Existing safety solutions detect only the accident itself, after the fact — with no way to diagnose the accumulating risk state of a site before an accident occurs.",
    ],
    opportunity: [
      "Korea's disaster/safety-industry market grew from ₩47T (2019) to ₩59T (2023) as the Serious Accidents Act pushed safety investment from a 'cost' to a 'condition for survival,' with safety-management capability now a core criterion in large-enterprise vendor registration and public tenders.",
      "The industry is shifting from reactive, analog incident response toward ICT/AI-based preventive smart safety — creating demand for systems that read a site's ongoing risk state (a dynamic risk map), not just individual incidents.",
      "The 33-vessel fleet-wide contract with Dongwon Industries demonstrates a repeatable expansion model into Korea's broader distant-water fishing industry beyond the initial pilot vessel.",
    ],
    advantage: [
      "Sub-second, low-false-alarm detection: crossing-the-railing events are detected within 0.5 seconds at under 0.1% false-alarm rate, with AI actively canceling wave/vessel-motion noise in real time.",
      "True 3D risk recognition: the deck is modeled as 3D space (not a flat 2D camera view), distinguishing work zones from transit zones to focus monitoring on abnormal movement in genuinely hazardous areas.",
      "Proven, zero-incident track record across highly demanding public/industrial sites (subway depot, manufacturing floor, sub-zero biobank storage) — the company's stated core differentiator versus point-solution competitors.",
      "Korea's only KOSHA-certified solution in its safety-application category, creating a de facto standard status for government subsidy/grant-linked adoption (₩50M voucher per company under the accident-prevention voucher program) among sub-50-employee sites.",
    ],
    solution: {
      lead: "Haimdall — digital-twin safety intelligence, from factory floor to open sea",
      groups: [
        {
          title: "On-vessel detection (Virtual Fence)",
          items: [
            "Digital-twin models the entire vessel, treating the railing/edge as a virtual fence boundary between safe and hazardous zones.",
            "Detects a worker crossing the railing within 0.5s, with AI motion-compensation for waves/vessel sway keeping false alarms under 0.1%.",
            "3D deck recognition (not 2D) eliminates blind spots and distinguishes work zones from transit zones.",
          ],
        },
        {
          title: "Digital twin & ecosystem",
          items: [
            "Worker position tracking (±50cm), automatic movement-history logging, automated incident reports, and automatic hazard-zone-entry alerts to on-site managers.",
            "Mobile app, smartwatch, and helmet-integrated sensors connect workers into the same real-time safety network as vessel managers and HQ.",
          ],
        },
        {
          title: "Command dashboard",
          items: ["A single dashboard shares the same safety data from HQ executives down to on-site crew, computing risk indices by work type and issuing pre-emptive safety-check guidance."],
        },
      ],
    },
    businessModel: {
      lead: "B2B/B2G safety-platform licensing across shipping, manufacturing, and public infrastructure operators",
      items: [
        "Reference-driven expansion: proven public-sector deployments (Seoul Metro, National Biobank) build credibility to win private industrial and marine clients (HNT, Dongwon Industries).",
        "Government-subsidized adoption channel: the accident-prevention voucher program funds up to ₩50M per company toward Haimdall adoption at sub-50-employee sites, converting into confirmed revenue for Double T as the designated supplier.",
        "Category-defining certification (sole KOSHA-certified vendor) positions Double T as the de facto required standard for subsidy-linked smart-safety-equipment procurement.",
      ],
    },
    achievements: [
      "Sole holder of a Korea Occupational Safety & Health Agency (KOSHA) certification in the high-risk-industry disaster-prevention smart-safety-app category.",
      "Ministry of SMEs and Startups Minister's Award; TIPA Value-up Award (top 1% growth-potential R&D grantee); Gyeonggi Provincial Governor's Citation.",
      "Selected as a candidate for the government's '2026 Next Unicorn' project and for the Ministry of SMEs' AI-based Smart Manufacturing Innovation 3.0 strategy, with priority placement on Naver Cloud Marketplace.",
      "Signed contract to deploy across Dongwon Industries' entire 33-vessel distant-water fishing fleet; deployments at Seoul Metro (0 incidents since go-live), HNT (82 predicted collisions averted, 0 actual incidents), and National Biobank of Korea (freezer entrapment prevention).",
      "Expanding partnerships with Naver Cloud, Dell Technologies, Samsung Life, and Toss.",
    ],
    highlights: [
      "Zero-incident track record across subway, manufacturing, and biobank deployments",
      "Sole KOSHA-certified vendor in its category — de facto standard for government safety-subsidy programs",
      "33-vessel fleet-wide contract with Dongwon Industries for man-overboard prevention",
      "Government-subsidized go-to-market: up to ₩50M/company adoption voucher for sub-50-employee sites",
    ],
    hashtags: ["IndustrialSafety", "DigitalTwin", "ComputerVision"],
    website: "https://doublt.com",
    deck: { name: "더블티_2026_해양수산AC_발표심사_자료.pdf", size: "4.6 MB" },
    hosts: [{ name: "Moon-Young Tae", role: "LodestarT", type: "Host" }],
  },
];

export const SECTORS = [
  "All",
  "FinTech",
  "RWA / Private Credit",
  "Digital Assets",
  "STO / AgriFinance",
  "Pet Food / Blue Food",
  "Marine Logistics / AIoT",
  "Robotics Middleware",
  "Alternative Seaweed / Food Ingredients",
  "Predictive Maintenance / Physical AI",
  "Industrial Safety / Digital Twin",
];

// ------------------------------------------------------------------
// PROGRAMMES — the events / accelerator cohorts that companies came
// through. This is the PRIMARY grouping on the Startups page: each
// programme renders a card, clicking it filters the roster below.
//
// Adding a company later = add its slug to the right `companies` array
// (and add the company object to STARTUPS). Nothing else changes —
// the card grid, the filter chips and the counts all derive from here,
// so the page scales from 10 companies to 30+ without layout work.
//
// Adding a brand-new event = append an object below. `logo` + `bg`
// drive the card cover; drop the artwork in /public/logos/programmes/.
// `companies: []` is fine — the card renders in a "roster coming"
// state so it can go live before the list is confirmed.
// ------------------------------------------------------------------
export const PROGRAMMES = [
  {
    slug: "finnect",
    name: "FINNECT",
    name_ko: "FINNECT",
    tagline: "Korea–Singapore fintech bridge",
    tagline_ko: "한국–싱가포르 핀테크 브리지",
    host: "Fintech Center Korea (FCK)",
    host_ko: "핀테크지원센터 (FCK)",
    years: "2025 · 2026",
    place: "Singapore",
    place_ko: "싱가포르",
    logo: "/logos/programmes/finnect.png",
    bg: "#0a0a0a",
    logoScale: 0.62,
    desc:
      "The flagship Korea–Singapore fintech programme, run with Fintech Center Korea. The 2025 and 2026 cohorts are listed together — payments, digital assets, tokenized real-world assets and financial AI.",
    desc_ko:
      "핀테크지원센터(FCK)와 함께 운영하는 한국–싱가포르 핀테크 대표 프로그램입니다. 2025년과 2026년 기수를 함께 모아 보여줍니다 — 결제, 디지털 자산, 실물자산 토큰화, 금융 AI.",
    companies: ["deepsearch", "forest-jalan", "wavebridge", "stockeeper"],
  },
  {
    slug: "kimst",
    name: "KIMST Marine Global",
    name_ko: "KIMST 해양수산 글로벌",
    tagline: "Blue economy accelerator",
    tagline_ko: "블루 이코노미 액셀러레이터",
    host: "Korea Institute of Marine Science & Technology Promotion",
    host_ko: "해양수산과학기술진흥원 (KIMST)",
    years: "2026",
    place: "Singapore",
    place_ko: "싱가포르",
    logo: "/logos/programmes/kimst.png",
    bg: "#ffffff",
    logoScale: 0.46,
    desc:
      "Korea's national marine science and technology agency cohort — blue food, marine logistics, port robotics and predictive maintenance companies taken to Singapore for proof of concept.",
    desc_ko:
      "해양수산과학기술진흥원(KIMST) 기수입니다. 블루푸드, 해양 물류, 항만 로보틱스, 예지보전 기업들이 싱가포르에서 PoC를 진행합니다.",
    companies: ["eastseabrother", "willog", "cutshion-pionoid", "haesong", "xylolabs", "double-t"],
  },
  {
    slug: "cmk",
    name: "Hyundai Motor Chung Mong-Koo Foundation",
    name_ko: "현대차 정몽구 재단",
    tagline: "Social impact & mobility ventures",
    tagline_ko: "사회혁신 · 모빌리티 벤처",
    host: "Chung Mong-Koo Foundation",
    host_ko: "현대차 정몽구 재단",
    years: "2026",
    place: "Singapore",
    place_ko: "싱가포르",
    logo: "/logos/programmes/cmk.png",
    bg: "#014282",
    logoScale: 0.72,
    desc:
      "Corporate foundation cohort backing Korean ventures with social and mobility impact, brought into the Singapore and Southeast Asian market.",
    desc_ko:
      "사회적 임팩트와 모빌리티 분야의 한국 벤처를 지원하는 기업재단 기수로, 싱가포르 및 동남아 시장 진출을 함께합니다.",
    companies: [],
  },
  {
    slug: "kised-climate",
    name: "KISED Climate Tech",
    name_ko: "창업진흥원 기후테크",
    tagline: "Climate & sustainability cohort",
    tagline_ko: "기후 · 지속가능성 기수",
    host: "Korea Institute of Startup & Entrepreneurship Development",
    host_ko: "창업진흥원 (KISED)",
    years: "2026",
    place: "Singapore",
    place_ko: "싱가포르",
    logo: "/logos/programmes/kised.png",
    bg: "#ffffff",
    logoScale: 0.68,
    desc:
      "Climate technology cohort under Korea's national startup agency — decarbonisation, clean energy and sustainability companies matched to Singapore demand.",
    desc_ko:
      "창업진흥원 기후테크 기수입니다. 탈탄소, 청정에너지, 지속가능성 기업을 싱가포르 수요처와 연결합니다.",
    companies: [],
  },
];

/* slug -> programme, so a company row can label itself without a lookup loop. */
export const PROGRAMME_BY_COMPANY = PROGRAMMES.reduce((acc, prog) => {
  prog.companies.forEach((c) => {
    acc[c] = prog;
  });
  return acc;
}, {});

// ------------------------------------------------------------------
// Theme groupings for the Startups page card grid.
// Each theme lists the `slug`s of STARTUPS that belong to it, so
// adding a company later is just adding its slug to a theme's list
// (or adding a brand-new theme object below — the grid auto-flows,
// no layout changes needed as the roster grows toward 9 themes).
// `cover` selects the composed SVG art in components/ThemeCard.js;
// swap in a real photo later via an `image: "/covers/xxx.jpg"` field
// the same way ChallengeCard.js does it.
// ------------------------------------------------------------------
export const STARTUP_THEMES = [
  {
    slug: "ai-financial-data",
    title: "AI & Financial Data",
    title_ko: "AI · 금융 데이터",
    desc: "Applying machine intelligence to markets, research and financial decision-making.",
    desc_ko: "시장, 리서치, 금융 의사결정에 AI를 적용하는 기업들.",
    cover: "ai",
    companies: ["deepsearch"],
  },
  {
    slug: "digital-assets",
    title: "Digital Assets & Tokenization",
    title_ko: "디지털 자산 · 토큰화",
    desc: "Bringing traditional and alternative assets on-chain, from custody to security tokens.",
    desc_ko: "커스터디부터 증권형 토큰까지, 전통·대체 자산을 온체인으로 옮기는 기업들.",
    cover: "tokenization",
    companies: ["wavebridge", "stockeeper"],
  },
  {
    slug: "alt-finance-rwa",
    title: "Alternative Finance & RWA",
    title_ko: "대체금융 · RWA",
    desc: "Structuring private credit and real-world assets for new pools of investors.",
    desc_ko: "사모신용과 실물자산을 새로운 투자자 풀에 맞게 구조화하는 기업들.",
    cover: "rwa",
    companies: ["forest-jalan"],
  },
  {
    slug: "blue-economy",
    title: "Blue Economy & Marine Innovation",
    title_ko: "블루 이코노미 · 해양산업",
    desc: "Seafood, marine logistics, and ocean-linked ventures turning Korea's coastal industries into export-ready brands and platforms.",
    desc_ko: "수산물, 해양 물류 등 한국의 연안 산업을 수출 브랜드와 플랫폼으로 전환하는 기업들.",
    cover: "ocean",
    companies: ["eastseabrother", "willog", "haesong"],
  },
  {
    slug: "robotics-automation",
    title: "Robotics & Industrial Automation",
    title_ko: "로보틱스 · 산업 자동화",
    desc: "Middleware and hardware replacing scarce industrial labor with deployable robot applications.",
    desc_ko: "부족한 산업 인력을 대체하는 로봇 애플리케이션과 미들웨어를 만드는 기업들.",
    cover: "robotics",
    companies: ["cutshion-pionoid"],
  },
  {
    slug: "physical-ai-safety",
    title: "Physical AI & Safety Intelligence",
    title_ko: "피지컬 AI · 안전 인텔리전스",
    desc: "Sensor-driven Physical AI reading the real-time condition of critical equipment and worksites to predict failures and prevent accidents before they happen.",
    desc_ko: "실시간 센서 데이터로 설비와 현장의 상태를 읽어 고장과 사고를 사전에 예측·예방하는 피지컬 AI 기업들.",
    cover: "safety",
    companies: ["xylolabs", "double-t"],
  },
];

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
  { name: "Embassy of the Republic of Korea to Singapore", src: "/logos/korea-embassy.png", w: 172 },
];

export const PARTNERS = [
  { name: "Pinetree Securities", src: "/logos/pinetree.png", w: 252 },
  { name: "WILT", src: "/logos/wilt.png", w: 257 },
  { name: "MYSC", src: "/logos/mysc.png", w: 282 },
  { name: "CO-AXIS", src: "/logos/coaxis.png", w: 89 },
  { name: "Centre for Impact Investing and Practices", src: "/logos/ciip.png", w: 432 },
  { name: "Temasek Lifesciences Laboratory", src: "/logos/temasek-lsl.png", w: 143 },
  { name: "SBF", src: "/logos/sbf.svg", w: 220 },
  { name: "Enterprise Singapore", src: "/logos/enterprise-sg.png", w: 312 },
  { name: "Startup SG", src: "/logos/startup-sg.png", w: 373 },
  { name: "EDB Singapore", src: "/logos/edb-sg.png", w: 194 },
  { name: "IMDA", src: "/logos/imda-full.png", w: 138 },
  { name: "Open Innovation Network", src: "/logos/oin-full.png", w: 187 },
  { name: "ACE SG", src: "/logos/ace-sg.png", w: 144 },
  { name: "raiSE Singapore", src: "/logos/raise-sg.png", w: 138 },
  { name: "HTX", src: "/logos/htx.png", w: 70 },
  { name: "IPI Singapore", src: "/logos/ipi-sg.png", w: 229 },
  { name: "SNEF", src: "/logos/snef.png", w: 409 },
  { name: "SVCA", src: "/logos/svca.png", w: 314 },
  { name: "SGInnovate", src: "/logos/sginnovate.png", w: 123 },
  { name: "BANSEA", src: "/logos/bansea.png", w: 155 },
  { name: "Angel Central", src: "/logos/angel-central.png", w: 236 },
  { name: "e27", src: "/logos/e27.png", w: 177 },
  { name: "Tech in Asia", src: "/logos/tech-in-asia.png", w: 112 },
  { name: "FinTech Singapore", src: "/logos/fintech-sg.png", w: 259 },
];

// ============================================================
// KOREAN DETAIL LAYER
// Full-KO translations for the startup detail pages, challenge
// cards, and org call lists. Kept as one merge block so the
// English source objects above stay readable; the loops at the
// bottom graft `_ko` fields onto the same objects that pick()
// in lib/i18n.js already resolves. Adding a new company later:
// add its slug here with the same shape (all keys optional).
// ============================================================

const KO_STARTUP_DETAIL = {
  deepsearch: {
    banner_title_ko: "AI 기반 금융 엔진",
    problem_ko: [
      "방대하고 복잡하게 흩어져 있는 금융 데이터·뉴스·거시지표 처리의 비효율.",
      "비용·시간·전문성의 한계로 금융회사가 자체적으로 금융 AI 엔진과 솔루션을 구축하기 어려움.",
      "인력 규모의 한계로 분석 커버리지가 제한됨.",
    ],
    opportunity_ko: [
      "AI를 효과적이고 빠르게 접목해 혁신적인 금융 솔루션 제공.",
      "전통 자산 밖으로 분석 범위를 넓혀 미개척 시장 잠재력 확보.",
      "낮은 비용으로 더 높은 효율 달성.",
    ],
    advantage_ko: [
      "고도로 발전한 금융 시장(한국)에서 검증 완료.",
      "국민연금(NPS), 한국거래소(KRX), 주요 은행(신한·KB), 증권사(한국투자증권·삼성증권) 등 국내 주요 금융기관의 약 40%가 도입.",
    ],
    achievements_ko: [
      "Finorma가 2,000건 이상의 M&A 딜을 지원.",
      "운용자산 1,200조 원 규모의 국민연금이 투자 업무에 활용.",
      "한국거래소와 넥스트레이드 양쪽의 시장 모니터링 역할 수행.",
      "삼성자산운용과 함께 KODEX 2차전지산업 ETF 출시 (2018년 9월, KRX).",
      "KRX 최초의 액티브 ETF인 KODEX 이노테크 액티브(2020년 9월)와 KBSTAR 비메모리반도체 액티브 ETF(2021년 6월) 출시.",
    ],
    highlights_ko: [
      "FY25 매출 400만 달러 · FY25 CAGR 30%",
      "독보적 기술력",
      "검증된 트랙 레코드",
      "FAaaS 상용화 준비 완료",
    ],
    solution_ko: {
      lead_ko: "Finorma API (FAaaS)",
      groups_ko: [
        {
          title_ko: "금융 AI SaaS",
          items_ko: [
            "금융기관이 자체 AI 기반 서비스를 손쉽게 구축할 수 있는 종합 금융 AI SaaS.",
            "방대한 실시간 금융 데이터에 즉시 접근.",
            "주식, ETF, 뉴스, 공시(한/미), 실적 콜, 거시지표, 특허, ESG 데이터까지 커버.",
          ],
        },
        {
          title_ko: "AI 기반 기능",
          items_ko: ["지능형 Q&A", "맞춤형 브리핑", "리스크 모니터링·알림", "자동화된 리서치"],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "B2B API 라이선싱",
      items_ko: [
        "Finorma 엔진과 특화 금융 AI 에이전트(AI 애널리스트, AI 투자 매니저)를 API로 라이선싱.",
        "고객이 정교한 실시간 자동화 AI 금융 서비스를 빠르게 구축·배포하도록 지원 — 업무 품질, 시간 절감, 비용 절감으로 가치를 창출.",
      ],
    },
  },

  "forest-jalan": {
    banner_title_ko: "동남아를 위한 토큰화 사모신용",
    problem_ko: [
      "Web 3.0 투자자는 수익형 자산의 양극화에 직면 — 가격 변동성이 큰 DeFi의 고위험·고수익과 국채 담보 RWA의 저위험·저수익.",
      "인도네시아 소상공인(MSME)은 담보와 신용 이력이 부족해 투명한 대출 솔루션이 절대적으로 부족 (인도네시아 자금 격차: 1,540억 달러).",
      "차주 측은 급여일 전 현금 부족, 신용카드 접근 불가, 가계 유동성 부족 문제를 겪음.",
    ],
    opportunity_ko: [
      "매출채권을 담보로 한 토큰화 사모신용으로 Web3 유동성을 Web2 차주에 연결, 연 13–17% 수익률 목표.",
      "긍정적 초기 트랙션: 20만 달러 파일럿 조달과 토큰화 완료, 추가 100만 달러 약정 확보.",
    ],
    advantage_ko: [
      "Grab 파트너 가맹점·일자리 플랫폼 JOOB를 통한 독점적 차주·데이터 소싱.",
      "배분, 자산 프로필, 연체/NPL 에이징까지 보여주는 실시간 투자자 포트폴리오 대시보드.",
      "환율(FX)·부실채권(NPL) 백스톱을 갖춘 리스크 완화 구조.",
    ],
    achievements_ko: [],
    highlights_ko: [
      "암호화폐 시장 변동성과 무관하게 연 13–17% 수익을 내는 투자 가능한 사모신용 RWA 자산",
      "기초자산에 대한 실시간 데이터로 지속적인 리스크 평가",
      "JOOB를 통한 Grab 파트너십 기반의 독점적 차주 발굴",
    ],
    solution_ko: {
      lead_ko: "eNote 파이낸스",
      groups_ko: [
        {
          title_ko: "토큰화 매출채권",
          items_ko: [
            "MSME 대출 풀을 기초자산으로 하는 투자 가능한 실물자산 토큰.",
            "최종 차주와 독점 데이터를 Grab JOOB에서 소싱.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "발굴부터 유통까지 풀스택",
      items_ko: [
        "Grab과 함께 JOOB 일자리 포털 앱 운영.",
        "JOOB에서 MSME 차주를 발굴·심사.",
        "Web 3.0 스테이블코인 자본으로 MSME에 대출.",
        "차주 데이터를 투자자에게 실시간 공개.",
        "모든 거래와 자금 흐름을 온체인에서 정산.",
      ],
    },
  },

  wavebridge: {
    banner_title_ko: "기관을 위한 디지털 자산 인프라",
    problem_ko: [
      "강한 규제를 받는 디지털 자산 거래소에 대한 기관의 접근 제한.",
      "대규모 거래를 위한 유동성 부족과 초기 단계에 머문 프라임 브로커리지 서비스.",
      "기업이 쓸 수 있는 컴플라이언스 대응 인프라 옵션의 부재.",
      "디지털 자산 전문 트레이딩 인력 부족.",
    ],
    opportunity_ko: [
      "한국의 디지털자산기본법과 EU MiCA가 글로벌 표준을 재편 중.",
      "ETF와 규제 명확화로 가속화되는 기관의 디지털 자산 도입 확대.",
    ],
    advantage_ko: [
      "엄격한 규제 환경에서 획득한 라이선스 기반의 확고한 선도 지위.",
      "한국: 비트코인 ETF와 기업 도입을 지원할 수 있는 유일한 인가 기관 프라임 브로커.",
      "EU/아시아: MiCA 라이선스 취득 진행 중, 홍콩 Victory Securities와 자문 파트너십.",
    ],
    achievements_ko: [],
    highlights_ko: [
      "한국 유일의 인가 기관 프라임 브로커 (VASP + ISMS)",
      "홍콩 Victory Securities 자문 파트너",
      "EU 최초 그룹의 MiCA 인가 CASP (리투아니아, 진행 중)",
      "통합 컴플라이언스와 기관 표준으로 아시아와 유럽을 연결",
    ],
    solution_ko: {
      lead_ko: "Wavebridge Prime (한국 & 글로벌)",
      groups_ko: [
        {
          title_ko: "기관 프라임 브로커리지",
          items_ko: [
            "체결, 유동성, 커스터디, 컴플라이언스를 아우르는 올인원 프라임 브로커리지 플랫폼.",
            "글로벌 연결성: 한국 본사를 기반으로 EU까지 규제 인프라를 확장하고 아시아 전역의 크로스보더 파트너십을 지원.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "수수료 기반 기관 서비스",
      items_ko: ["프라임 브로커리지 및 커스터디 서비스 수수료.", "컴플라이언스 기반 자문 수익."],
    },
  },

  stockeeper: {
    banner_title_ko: "데이터 기반 한우 STO 플랫폼",
    problem_ko: [
      "축산 농가가 번식·시설·경영을 위한 안정적 자금 조달에 어려움.",
      "소값 변동으로 농가 수익이 불안정해지고 재투자 의욕이 저하.",
      "한국/아세안 축산 시장에 투명하고 확장 가능하며 유동성 있는 투자 수단 부재.",
      "개인이 실물 축산 생태계와 그 투자에 참여할 수 있는 플랫폼이 제한적.",
    ],
    opportunity_ko: [
      "한국 한우 시장 규모 180억 달러, 약 400만 두.",
      "축사·농장 시설 가동률이 약 30%로 낮음.",
      "축산 밸류체인의 수직 통합에 더 큰 가치가 있으나 아직 초기 단계.",
    ],
    advantage_ko: [
      "살아있는 한우를 대상으로 한 유일한 인가 STO 투자 플랫폼.",
      "가축 실시간 추적 및 등급 평가.",
      "사육–가공–유통을 아우르는 전주기 통합.",
    ],
    achievements_ko: [],
    highlights_ko: [
      "한국 최초의 인가 축산 금융 플랫폼",
      "누적 AUM 100억 원+ (약 700만 달러)",
      "통합 밸류체인: 뱅카우 – 고기 디자인 랩 – 정직한 한우",
      "글로벌 STO 상장 준비 중",
    ],
    solution_ko: {
      lead_ko: "축산 STO",
      groups_ko: [
        {
          title_ko: "작동 방식",
          items_ko: [
            "STO 구조가 저활용 농장 자산의 생산성 향상을 지원.",
            "농가는 더 쉬운 자본 조달을, 투자자는 더 스마트한 농장 운영을 통한 수익 제고를 얻음.",
            "투명한 축산 생태계 보장.",
            "소비자에게 일관된 품질의 합리적 가격 소고기 제공.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "발행·운영·수직 유통",
      items_ko: [
        "축산 STO 발행 및 관리.",
        "실시간 데이터 기반 사육·운영 관리.",
        "자동화된 가공·유통을 활용한 육류 B2B2C 판매.",
        "중기적으로 STO/RWA를 다른 상품군으로 확장 계획.",
      ],
    },
  },

  eastseabrother: {
    banner_title_ko: "횟감급 수산 펫푸드, 한국에서 미국까지",
    problem_ko: [
      "펫푸드 시장이 투명한 신선 원료 옵션보다 비위생적이고 생산자 중심적인 가공식품에 지배됨.",
      "기존 선택지는 포화지방이 높은 육류나 기호성 낮은 채소에 편중되고, 곡물 글루텐은 소화·알레르기 문제를 유발.",
      "대체식(생식, 곤충 단백질)은 기생충·비용·기호성에 대한 실질적 불안을 동반.",
      "소비자는 구매 시점에 명확한 표기와 생애주기별 영양 정보를 얻기 어려움.",
    ],
    opportunity_ko: [
      "글로벌 펫 산업: 2,610억 달러(2022) → 3,500억 달러(2027E), CAGR +6.1%; 펫푸드가 약 38%로 단일 최대 카테고리.",
      "미국 펫푸드 시장(2024년 69.5조 원)에서 프리미엄 건식(31.1%)과 간식(25.6%)이 합산 50% 이상 — 이스트씨브라더의 정확한 제품 카테고리 — 프리미엄 간식 세그먼트는 CAGR 10.36%로 성장.",
      "수산물은 소비 1kg당 탄소 배출이 1–5kg으로 육류(150–750kg) 대비 압도적으로 낮아, 지속가능성을 중시하는 반려 문화 확산과 부합.",
    ],
    advantage_ko: [
      "첨가물 없이 염도 0.1% 미만으로 생선 원형과 영양을 보존하는 특허 제조공정 — GC-MS/MS 검사에서 경쟁 수산 간식 대비 향 성분 5배+, 경도/조직감 유지력 18배+.",
      "단일 어종 수산 SKU 40여 종(프리미엄 국내산 21종, 캐주얼 수입 블렌드 19종) — 경쟁사의 초점 없는 다품목 구성과 대비.",
      "국내외 지식재산 26건 등록(제조 특허 2, 상표 2, 디자인/저작권 13, ISO 22000, 미국 FDA).",
      "NPS 76.3% — 프리미엄 펫 브랜드 평균(약 40–50%)의 2배 이상, 스타벅스/넷플릭스급 충성도; 누적 급여 반려동물 371,475마리, 누적 고객 31,067명.",
    ],
    achievements_ko: [
      "펫 업계 최초 국무총리상 수상 (2022년 9월).",
      "9,000여 개 기업 중 강소기업 톱10(글로벌 부문, 2024); 삼양식품 등 10개사와 함께 강원 수출 특별상 (2025).",
      "미국 200개 매장 펫 리테일 체인 EarthWise Pet에 '피시마켓' 콘셉트 단독 매대 입점 — 해외 10건+, 국내 2건 언론 보도.",
      "Plug and Play 실리콘밸리 샤크탱크에서 한국 AI/테크/SaaS 스타트업 20개사 중 종합 1위(베스트 제품 + 베스트 시장 잠재력, 2025년 8월).",
      "스탠퍼드 컨슈머 액셀러레이터 마음마켓(샌프란시스코)에서 주요 K-뷰티 브랜드 포함 14개사와 경쟁해 1위(총매출 + 베스트 부스, 2025년 9월).",
      "제30회 한국유통대상 — 매경미디어그룹 회장상, '세계화·수출촉진' 부문 최초 수상 (2025년 12월).",
    ],
    highlights_ko: [
      "NPS 76.3% — 스타벅스/넷플릭스급 충성도, 프리미엄 펫 브랜드 평균의 2배+",
      "5년 유기적 성장, CAGR 120.93% (2021–2025 매출/생산)",
      "단일 카테고리 SKU 40+, 지식재산 26건, ISO 22000 + 미국 FDA",
      "2028–29년 매출 100억 원(약 700만 달러+), 수출 비중 40%+ 목표",
    ],
    solution_ko: {
      lead_ko: "생선 원형 그대로, 무첨가 수산 펫푸드",
      groups_ko: [
        {
          title_ko: "프리미엄 라인 — 국내산 횟감급",
          items_ko: [
            "21종, 생선 원형/반건조, 자체 IP로 직접 제조.",
            "2024년 매출 2억 6,920만 원·마진 48.2%; 홍콩·싱가포르 판매 중, 태국 예정, 미국/유럽/일본이 다음 수요처.",
          ],
        },
        {
          title_ko: "캐주얼 라인 — 수입산, 합리적 가격",
          items_ko: [
            "19종, 동결건조, 한글 패키지 OEM 제조로 한류에 민감한 동남아 시장 겨냥.",
            "2024년 매출 2억 4,840만 원·마진 34.9%; 수출액의 70.2%를 차지하는 볼륨 드라이버.",
          ],
        },
        {
          title_ko: "생애주기 큐레이션",
          items_ko: ["전체 40여 SKU에 대해 반려동물의 나이·체중·건강 상태·식이 필요에 따른 맞춤 추천."],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "D2C + 리테일 + 수출, 3개 채널 분산",
      items_ko: [
        "온라인(2024년 매출의 41.4%): 자사몰 + 프리미엄 플랫폼 — 경쟁사 대비 낮은 수수료.",
        "오프라인(39.9%): 고성 자체 플래그십 스토어와 큐레이션 전시 입점.",
        "수출(18.7%, 2028년 40%+ 목표): OEM이나 일회성 테스트 선적이 아닌 자체 브랜드 직수출로 미국 진출 — 제30회 한국유통대상에서 인정받은 전통 제조 중소기업의 드문 직수출 사례.",
      ],
    },
  },

  willog: {
    banner_title_ko: "해양 물류를 위한 AIoT 공급망 인텔리전스",
    problem_ko: [
      "글로벌 공급망은 연간 약 1.3조 달러의 손실을 보며, 해상/육상 운송·보관 중 데이터 사각지대가 핵심 원인.",
      "수산물·식품의 약 30%가 온습도 이탈로 부패 폐기 — 전 세계 연간 약 1조 달러 규모.",
      "평균적인 기업은 콜드체인 실패·충격·지연 등 공급망 리스크로 매출의 3–7%를 손실.",
      "위치·온도·습도·충격·기울기·조도 6개 변수의 실시간 추적 없이는 손실을 선제적으로 예방할 수 없음.",
    ],
    opportunity_ko: [
      "해양/수산 콜드체인(스마트 블루푸드): 바다에서 내륙 목적지까지 신선도를 끝까지 유지해 수출 손실을 막고 유통 경쟁력 강화.",
      "연안/항만 물류: 컨테이너 충격·기울기·위치 실시간 추적으로 해운·항만 전 구간의 사각지대 제거.",
      "전통 산업 DX: AI/IoT/빅데이터 기반 스마트 물류를 조선·해운·항만 운영에 융합.",
      "공급망 AI 인텔리전스: 싱가포르 법인을 거점으로 동남아(인도네시아·말레이시아·베트남·태국)를 해양 무역 물류 허브로 직접 공략.",
    ],
    advantage_ko: [
      "특허 IoT 센서 4종 기반, 해상운송-창고 전 구간 사각지대 제로를 달성한 한국 유일의 6-in-1 실시간 물류 데이터 수집 시스템.",
      "검증된 상업 트랙션: 고객사 100+, 계약 갱신율 100%, 이탈률 0%, 2025년 매출 40.1억 원(2023년 15.37억 원에서 성장).",
      "이미 검증된 글로벌 준비 태세: 싱가포르 법인 설립, 인도네시아 ICCA MOU, 한국 육군 스마트물류 MOU 체결.",
      "지식재산 44건(특허 20, 디자인 7, 상표 17)과 ISO 14001/27001/27017 인증.",
    ],
    achievements_ko: [
      "MAT 2026: AQL 2,090대(목표 대비 130.6%), SQL 359대(전년 대비 +20%).",
      "한국 육군(스마트 물류), 인도네시아 ICCA와 MOU 체결.",
      "정부 R&D/사업화 자금: 스케일업 TIPS 14.25억 원, KAIA R&D 11.6억 원, 초격차 DIPS 2억 원 진행 중.",
      "국토교통부 물류대상, NIPA ICT 어워드, 대통령 표창 수상.",
      "특허 20건, 디자인 7건, 상표 17건; ISO 14001/27001/27017 인증.",
    ],
    highlights_ko: [
      "매출 CAGR: 15.37억 원(2023) → 28.51억 원(2024) → 40.1억 원(2025)",
      "고객사 100+, 갱신율 100%, 이탈률 0%",
      "임직원 73명, 4개 부처 정부 과제 수행 중",
      "2026 로드맵: 싱가포르 현지화 → 인도네시아/베트남 PoC → 신규 MOU 2건+ → 글로벌 VC 펀드레이징 (2027년 1분기)",
    ],
    solution_ko: {
      lead_ko: "Willog SAFE + CONTROL TOWER + INTELLIGENCE",
      groups_ko: [
        {
          title_ko: "Willog SAFE — 특허 IoT 센서 디바이스",
          items_ko: [
            "위치·온도·습도·충격·기울기·조도 6대 핵심 데이터를 실시간 수집하는 S2·T1·V2 디바이스 라인.",
            "해수 온습도 특화 센서 모듈로 해상-창고 전 구간을 24/7 모니터링.",
          ],
        },
        {
          title_ko: "Willog CONTROL TOWER — 데이터 플랫폼",
          items_ko: [
            "통합 대시보드로 항만·창고·운송 운영의 엔드투엔드 가시성 확보.",
            "실시간 이상 알림과 대응 워크플로우, 동남아 현지화를 위한 다국어 지원.",
          ],
        },
        {
          title_ko: "Willog INTELLIGENCE — AI 버티컬 인사이트",
          items_ko: [
            "물류 버티컬 AI 리스크 예측과 동적 리스크 관리(Dynamic RM).",
            "수산물 부패 예측 감지와 ETA 최적화, 비용 절감 제안.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "IoT 하드웨어 + SaaS 플랫폼 + AI 인사이트 구독 (B2B)",
      items_ko: [
        "고가/민감 화물 화주(생명과학·제약, 반도체/정밀장비, 화학·에너지, 프리미엄 F&B)와 물류 서비스 기업(글로벌 포워더, 3PL/특수 창고)을 타깃.",
        "2026 전략 타깃: 컴플라이언스(GxP 규제 바이오/메드텍 화주), 자산 보호(반도체/정밀장비 충격 파손 방지), 효율(탄소/가시성 데이터가 필요한 ESG 보고 기업).",
        "2026 동남아 시장 진입: 직접 영업(싱가포르 법인 B2B 계약), 파트너십(현지 물류사/협회), 정부 MOU→사업화 경로.",
      ],
    },
  },

  "cutshion-pionoid": {
    banner_title_ko: "로보틱스 애플리케이션을 위한 미들웨어 플랫폼",
    problem_ko: [
      "조선업 용접 인력이 10년 내 절반 이하로 감소 전망(20.3만 → 9.5만 명), 생산 속도에 직접적 위협 — 용접공이 없으면 배도 없다.",
      "오늘날 로봇 소프트웨어 개발은 파편화 — 로봇 브랜드/하드웨어 스펙마다 앱을 다시 만들어야 하며, 한 번 개발해 여러 로봇 플랫폼에 배포하는 표준화된 방법이 없음.",
    ],
    opportunity_ko: [
      "로보틱스 시장이 소프트웨어 중심 모델로 빠르게 전환: TAM(글로벌 로보틱스 시장) 532억 달러, SAM(글로벌 로보틱스 SW 시장) 201억 달러, SOM(미국 로봇 SW 시장) 136억 달러.",
      "하드웨어 중심 로봇 제조사(유니버설로봇, 두산, 야스카와, ABB)와 특수목적 로봇앱 기업 사이의 범용 소프트웨어 중심 미들웨어 포지션은 대부분 공백.",
    ],
    advantage_ko: [
      "세계 1위 조선사에서 이미 검증: 현대중공업에서 모바일 용접 로봇 3대가 실제 현장 가동 중.",
      "동일한 미들웨어 기반으로 용접을 넘어 샌딩·도장·검사 로봇 애플리케이션으로 확장.",
      "로봇 OS/하드웨어 대기업(구글, 아마존, 엔비디아, 메타)과 로봇앱 개발사(베어로보틱스, 클로봇, 커넥티드로보틱스)를 잇는 미들웨어 포지션 — 'Built on Pionoid' 생태계 전략.",
      "JAKA, 보그워너, Mushiny, 옴론, Zimmer Group, 티라로보틱스 등 산업 파트너십과 메가커피, HD현대중공업, 유창, MANN+HUMMEL, Screen HD Korea 등 고객 확보.",
    ],
    achievements_ko: [
      "세계 1위 조선사 현대중공업에 모바일 용접 로봇 3대 납품, 현장 가동 중.",
      "Screen HD Korea에 팔레타이징 로봇 공급.",
      "바리스타 로봇 상용화; 지역 교육청에 AI 드로잉 로봇 공급.",
      "CES 2024, CES 2025 참가.",
      "시드 투자 5억 원 유치.",
      "미국 버지니아주 페어팩스 카운티에 미국 법인 설립, 바리스타 로봇으로 미국 시장 진출; 2026 NRA Show 시카고 참가.",
    ],
    highlights_ko: [
      "세계 1위 조선사에서 검증된 용접 로봇 실전 배치",
      "'Built on Pionoid' 생태계 전략 — 고임팩트 로봇앱으로 확장",
      "로봇 OS와 로봇 앱 사이의 범용 소프트웨어 중심 미들웨어 포지션",
      "로드맵: 2024–25 상용 배치 → 현재 미국 진출 & Pre-A/시리즈A → 2027–29 플랫폼 스케일업 & IPO",
    ],
    solution_ko: {
      lead_ko: "Pionoid — 로봇 OS/HW와 애플리케이션 사이의 미들웨어",
      groups_ko: [
        {
          title_ko: "Factory (개발자용)",
          items_ko: ["웹 프레임워크 & SDK", "가상 시뮬레이션", "통합 API 라이브러리"],
        },
        {
          title_ko: "Store (로봇 사용자용)",
          items_ko: ["앱 배포", "라이선스 관리", "OTA 업데이트"],
        },
        {
          title_ko: "Pionoid 기반 애플리케이션",
          items_ko: ["용접 (검증 완료, 생산 가동 중)", "샌딩", "도장", "검사"],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "양면 플랫폼: 개발자 구독 + 사용량 기반 수익 셰어",
      items_ko: [
        "개발자: Factory 도구(SDK, 시뮬레이션, API 라이브러리) 이용을 위한 연간 구독료.",
        "로봇 사용자: 다운로드당 요금과 앱 개발자에 대한 수익 셰어 — 로보틱스판 앱스토어 모델('More Apps → More Users → More Revenue').",
      ],
    },
  },

  haesong: {
    banner_title_ko: "세계의 '검은 반도체'를 표준화하다 — 산업 규모의 대체김",
    problem_ko: [
      "한국 김 양식은 수온 5–15°C의 연간 약 3개월로 제한되고, 수확한 물김의 유통기한은 24시간에 불과.",
      "공장이 여러 연안의 위판 물김을 표준 원료 규격 없이 혼합해 중간재(마른김) 품질이 해마다·지역마다 들쭉날쭉.",
      "제조사는 좁은 매입 시기에 1년치 원료를 현금으로 선지급해야 해 운전자본과 재고 리스크 부담.",
      "기후변화로 김 양식 수확량은 더 줄어들 전망 — 수온 1°C 상승만으로 업계 피해 4,763억 원 추정 — 반면 글로벌 수요와 정부 수출 목표(2027년 18억 달러)는 계속 상승.",
    ],
    opportunity_ko: [
      "TAM(글로벌 해조류/김 산업): 2028년 약 8조 원, 건강한 저탄소 단백질/스낵 원료로 CAGR 8–10% 성장.",
      "SAM(글로벌 B2B 가공 해조류 원료 시장): 약 4조 원 — 김스낵 OEM, 도시락김, 후리카케류의 반복 구매·장기 공급계약 카테고리.",
      "SOM(일본+동남아+한국 김 원료 시장): 즉시 공략 가능한 약 2조 원; 5% 점유 시나리오만으로 매출 1,000억 원+ 함의.",
      "한국 김 수출은 이미 단일 식품 원료 수출 2위(2025년 식품 수출 130억 달러 중 11억 달러, 약 20%)이며 정부는 2027년 18억 달러를 목표.",
    ],
    advantage_ko: [
      "비용·품질: 일반 김 대비 10%+ 저렴한 공급가와 약 30% 수준의 원료 원가 구조, 원료 풀은 전통 김 양식의 4배+(러시아·중국 미이용 연안 해조류 + 한국 자연산 해조류).",
      "독자 공정 기술: 중금속 흡착·제거 기술(국내 특허 2건 + 기술이전 1건), 이취·풍미 제어, 14단계 공정의 조직감 커스터마이징 — 아미노산·영양성분 비교 검사로 자체 검증.",
      "인증·IP: 미국 FDA, HACCP, 벤처기업 인증, 기업부설연구소 인정; 등록 특허 4건, 인증 4건, 출원 특허 2건.",
      "상업 트랙션: 태국 TAOKENOI(김스낵 1위), 베트남 Smile Nuts, 일본 KATO SANGYO·SOKAN·Mirai·Hamaotome와 PoC/실생산 진행 — 일부는 이미 현지 당국과 쿼터·수입 분류 협의 중.",
    ],
    achievements_ko: [
      "미국 FDA 인증(2024.10); HACCP 인증(2025.3); 벤처기업 인증(2023.9); 기업부설연구소 인정(2025.8).",
      "등록 특허 2건(중금속 제거 해조류 가공; 다시마 피클) + 상표 1건(바다몽초) + 출원 특허 2건.",
      "수출 매출 900만 달러(2024, 2023년 150만 달러에서 성장); 수산물 수출 유공 표창(2025.12).",
      "태국 TAOKENOI, 베트남 Smile Nuts/Good Food, 일본 KATO SANGYO·SOKAN·Mirai·Hamaotome와 PoC/실생산 진행 중.",
    ],
    highlights_ko: [
      "3단계 성장 로드맵: 200억 원(2020–26) → 1,500억 원(2026–36) → 5,000억 원(2036+)",
      "대체김 원료 풀은 전통 김 양식의 4배, 원가는 약 30%",
      "7개국 수출입 인프라(일본·중국·러시아·미국·인도·동남아·남미), 32개 거래처 가동 중",
      "B2B 원료 사업과 함께 자체 소비자 브랜드(미역김자반, SNACKSEA) 판매 중",
    ],
    solution_ko: {
      lead_ko: "대체김(Alternative Seaweed) — 글로벌 김 산업의 표준화된 원료 레이어",
      groups_ko: [
        {
          title_ko: "원료 소싱",
          items_ko: [
            "러시아·중국 미이용 연안 해조류와 한국 자연산 해조류로 전통 김 양식 대비 4배 큰 원료 풀 확보.",
            "연 3개월 수확기에 대한 업계 의존 제거.",
          ],
        },
        {
          title_ko: "14단계 독자 공정",
          items_ko: [
            "연중(12개월) 생산을 위한 전처리, 중금속 제거, 건조/조직감 제어, 안정화 기술.",
            "분자 수준 가소화(SPI 단백질–글리세롤 수소결합)로 전통 마른김 수준의 유연성 구현.",
          ],
        },
        {
          title_ko: "표준화된 제품 등급",
          items_ko: [
            "두께·인장강도·색·이취 기준으로 4개 품질 등급(스낵/샌드위치/분말/프리미엄용)을 표준화해 고객군별 대응.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "PoC → 양산 → 장기 공급계약, 고객 락인 설계",
      items_ko: [
        "B2B 원료 구매자 타깃: 후리카케/김분말 가공사(일본), 김스낵 OEM 공장(동남아), 도시락김/조미김 제조사(한국) — 최종 소비자가 아님.",
        "연 1회 일시 선지급을 월 단위 반복 공급으로 전환해 고객 현금흐름을 개선하면서 해송의 반복 매출을 확보.",
        "고객별 원료 커스터마이징(각 고객 생산라인에 맞춘 배합비)으로 락인 — 전환 비용을 높여 공급처 변경을 어렵게 함.",
      ],
    },
  },

  xylolabs: {
    banner_title_ko: "스마트 항만을 위한 피지컬 AI 예지보전",
    problem_ko: [
      "항만 장비(크레인, 갠트리)는 고소음·상시 변동 하중 아래 연속 가동되어 정기 점검을 위해 세울 수 없음.",
      "고장이 나면 곧바로 물류 차질이나 중대 안전사고로 직결되지만, 연속 가동 중 초기 이상 징후 포착은 어려움.",
      "지배적인 정비 모델은 고장 후 수리(사후 대응)로, 개입 시점의 명확한 기준이 없어 너무 이른 대응(불필요한 가동 중단)과 너무 늦은 대응(안전사고) 사이의 좁고 위험한 간극이 존재.",
    ],
    opportunity_ko: [
      "한국에서만 최근 5년간 항만 사고 285건이 기록되고 구조적 대책 요구가 반복 — 항만 운영 예지보전 시스템에 대한 명확한 단기 수요 신호.",
      "항만을 넘어 동일 아키텍처가 모든 연속 가동 핵심 설비에 적용 가능: 발전(LNG 가스터빈, 저탄장 아이들러), 해운(선박 기관실 제어 장비), 일반 제조.",
      "정부·공기업 조달이 예지보전·안전 모니터링 역량을 점점 요구하거나 우대 — 공공 운영사(부산항만공사, 중부발전, 남부발전)발 수요 견인.",
    ],
    advantage_ko: [
      "맥락 인지 멀티모달 융합: 표준 PLC 데이터와 음향 신호를 'Context Gating'으로 결합, 설비의 운전 상태를 읽어 순간마다 중요한 신호를 선택 — 정적 임계값 알림이 아님.",
      "비침습 레트로핏 배치: 100mm/300g 자석·볼트 장착형 디바이스로 설비 개조가 불필요하고, 엣지 AI 추론으로 상시 연결 의존성 제거.",
      "창업 수개월 만에 항만(BPA), 발전(중부발전·남부발전), 해운(SK해운)까지 멀티섹터 PoC 트랙션 확보 — 센서 위에 디지털 트윈 대시보드와 LLM 기반 운영자 의사결정 지원 레이어까지.",
      "창업팀은 12년 음향/신호처리 연구(CEO, 전 위성시스템 R&D 리드)와 항공우주 CFO·기술상장 심사 경력을 결합.",
    ],
    achievements_ko: [
      "부산항만공사와 부산신항 대형 갠트리 크레인 PoC 확정(2026.3–6), PoC 이후 2년 20억 원 후속 프로그램 예산 기확보.",
      "해양수산과학기술진흥원 2026 블루 스타트업 프로그램 선정; 중부발전(가스터빈), 남부발전(아이들러), SK해운(기관실 제어 장비)과 PoC 진행 중.",
      "BNK경남은행 2026 CHAIN-G 3기, MYSC EMA Original 2026 액셀러레이터 선정.",
      "창업팀 이력: 서울대 실전문제연구 대회 3회 우승, AI 그랜드챌린지 장관상(2021), 국가 AI 그랜드챌린지 수상(2019).",
    ],
    highlights_ko: [
      "2026 목표: 항만/에너지/해운 PoC 10건+ 및 매출 10억 원",
      "창업팀: 12년 음향/신호처리 R&D 리드(CEO) + 항공우주 CFO/CTO 경력",
      "3개년 로드맵: Xylo-Zero(2026) → Xylo-Mini/Xylo-One(2027) → 통합 'Xylo Solution' 플랫폼(2028)",
      "멀티모달 산업설비 이상감지 데이터 수집 특허 출원(2026)",
    ],
    solution_ko: {
      lead_ko: "Xylo-Zero — 온디바이스 피지컬 AI 예지보전",
      groups_ko: [
        {
          title_ko: "데이터 수집",
          items_ko: [
            "음향(2마이크) + 가속도계 + 환경 센서를 표준 PLC/드라이브 운전 데이터와 융합 — 설계부터 멀티모달.",
          ],
        },
        {
          title_ko: "Context Gating 분석",
          items_ko: [
            "설비의 운전 상태 맥락을 읽어 해당 상태에 유의미한 신호만 선택적으로 분석 — 모든 조건에 하나의 정적 모델을 적용하지 않음.",
          ],
        },
        {
          title_ko: "실시간 판단 & 조치",
          items_ko: [
            "온디바이스 엣지 AI 추론이 정상/점검 필요의 단순 신호를 출력하고, 디지털 트윈 대시보드와 운영자 의사결정 지원 LLM 레이어로 연결.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "하드웨어 디바이스 + 디지털 트윈 플랫폼 + 의사결정 지원 소프트웨어 — 핵심 인프라 운영사 대상 B2B/B2G 판매",
      items_ko: [
        "항만·발전·해운 운영사와의 PoC로 진입해 다년 인프라/모니터링 계약으로 전환(예: 부산항만공사의 2년 20억 원 후속 프로그램).",
        "항만 크레인에서 건설현장 안전관리로, 이어 동일한 핵심 센서·플랫폼으로 중공업/플랜트/제조 설비 모니터링까지 확장.",
      ],
    },
  },

  "double-t": {
    banner_title_ko: "보이지 않는 위험을 보이는 안전으로 — 공장에서 먼바다까지",
    problem_ko: [
      "중대재해처벌법이 사망사고 시 경영진에게 형사책임(1년 이상 징역 또는 최대 10억 원 벌금)을 부과하고 징벌적 손해배상은 최대 5배, 2024년 1월부터 5인 이상 사업장으로 적용 확대.",
      "원양어선에서는 최근 25년 해양 인명사고(3,513건)의 63.1%가 '안전사고'였고, 특히 해상 추락은 치명률이 매우 높음.",
      "장기 항해는 사고 시점의 영상·위치·상태 데이터를 거의 남기지 않아 원인 규명과 재발 방지가 극히 어려움.",
      "기존 안전 솔루션은 사고 자체를 사후에 감지할 뿐 — 사고 전 현장의 누적 위험 상태를 진단할 방법이 없음.",
    ],
    opportunity_ko: [
      "중대재해처벌법으로 안전 투자가 '비용'에서 '생존 조건'으로 바뀌며 한국 재난안전산업 시장이 47조 원(2019)에서 59조 원(2023)으로 성장, 안전관리 역량이 대기업 협력사 등록과 공공 입찰의 핵심 기준으로 부상.",
      "업계가 사후 아날로그 대응에서 ICT/AI 기반 예방형 스마트 안전으로 전환 — 개별 사고가 아닌 현장의 상시 위험 상태(동적 리스크 맵)를 읽는 시스템 수요 창출.",
      "동원산업 33척 선단 전체 계약은 초기 파일럿 선박을 넘어 한국 원양어업 전반으로 확장 가능한 반복 모델을 입증.",
    ],
    advantage_ko: [
      "1초 미만·저오경보 감지: 난간 통과 이벤트를 0.5초 내, 오경보율 0.1% 미만으로 감지 — AI가 파도/선체 요동 노이즈를 실시간 상쇄.",
      "진정한 3D 위험 인식: 갑판을 평면 2D 카메라 뷰가 아닌 3D 공간으로 모델링, 작업 구역과 이동 구역을 구분해 실제 위험 구역의 이상 움직임에 집중.",
      "지하철 차량기지, 제조 현장, 영하 바이오뱅크 저장고 등 고난도 공공/산업 현장에서 무사고 트랙 레코드 입증 — 포인트 솔루션 경쟁사 대비 핵심 차별점.",
      "해당 안전 앱 카테고리에서 한국 유일의 KOSHA 인증 솔루션 — 50인 미만 사업장 대상 정부 보조금(재해예방 바우처, 기업당 5,000만 원) 연계 도입의 사실상 표준.",
    ],
    achievements_ko: [
      "고위험 업종 재해예방 스마트 안전 앱 카테고리에서 한국산업안전보건공단(KOSHA) 인증 단독 보유.",
      "중소벤처기업부 장관상; TIPA 밸류업 어워드(성장 잠재력 상위 1% R&D 수혜기업); 경기도지사 표창.",
      "정부 '2026 넥스트 유니콘' 프로젝트 및 중기부 AI 스마트제조혁신 3.0 전략 후보 선정, 네이버클라우드 마켓플레이스 우선 배치.",
      "동원산업 원양어선 33척 선단 전체 배치 계약; 서울교통공사(가동 후 무사고), HNT(충돌 예측 82건 회피·실사고 0건), 국립중앙인체자원은행(냉동고 갇힘 방지) 배치.",
      "네이버클라우드, 델 테크놀로지스, 삼성생명, 토스와 파트너십 확대 중.",
    ],
    highlights_ko: [
      "지하철·제조·바이오뱅크 배치 전반의 무사고 트랙 레코드",
      "카테고리 내 유일 KOSHA 인증 벤더 — 정부 안전 보조금 사업의 사실상 표준",
      "동원산업과 33척 선단 전체 해상 추락 방지 계약",
      "정부 보조 시장 진입: 50인 미만 사업장 대상 기업당 최대 5,000만 원 도입 바우처",
    ],
    solution_ko: {
      lead_ko: "헤임달(Haimdall) — 공장 바닥에서 먼바다까지, 디지털 트윈 안전 인텔리전스",
      groups_ko: [
        {
          title_ko: "선상 감지 (가상 펜스)",
          items_ko: [
            "디지털 트윈으로 선박 전체를 모델링하고, 난간/모서리를 안전 구역과 위험 구역 사이의 가상 펜스 경계로 처리.",
            "난간 통과를 0.5초 내 감지, 파도/선체 요동에 대한 AI 모션 보정으로 오경보율 0.1% 미만 유지.",
            "2D가 아닌 3D 갑판 인식으로 사각지대를 없애고 작업 구역과 이동 구역을 구분.",
          ],
        },
        {
          title_ko: "디지털 트윈 & 생태계",
          items_ko: [
            "작업자 위치 추적(±50cm), 이동 이력 자동 기록, 사고 보고서 자동 생성, 위험구역 진입 시 현장 관리자 자동 알림.",
            "모바일 앱, 스마트워치, 헬멧 일체형 센서로 작업자를 선박 관리자·본사와 같은 실시간 안전 네트워크에 연결.",
          ],
        },
        {
          title_ko: "지휘 대시보드",
          items_ko: [
            "본사 경영진부터 현장 선원까지 동일한 안전 데이터를 하나의 대시보드로 공유하고, 작업 유형별 위험 지수를 산출해 선제적 안전점검 가이드를 발행.",
          ],
        },
      ],
    },
    businessModel_ko: {
      lead_ko: "해운·제조·공공 인프라 운영사 대상 B2B/B2G 안전 플랫폼 라이선싱",
      items_ko: [
        "레퍼런스 기반 확장: 검증된 공공 배치(서울교통공사, 국립중앙인체자원은행)로 신뢰를 쌓아 민간 산업·해양 고객(HNT, 동원산업)을 수주.",
        "정부 보조 도입 채널: 재해예방 바우처가 50인 미만 사업장의 헤임달 도입에 기업당 최대 5,000만 원을 지원 — 지정 공급사인 더블티의 확정 매출로 전환.",
        "카테고리 정의 인증(유일 KOSHA 인증 벤더)으로 보조금 연계 스마트 안전장비 조달의 사실상 필수 표준 지위 확보.",
      ],
    },
  },
};

/* Challenge cards — owner, function, tags, prize */
const KO_CHALLENGE = {
  "sgh-histopath": { owner_ko: "싱가포르 종합병원 (SGH)", fn_ko: "운영", tags_ko: ["인공지능 (생성형)", "메드테크"] },
  "msf-child-protection": { owner_ko: "사회가족개발부 (MSF)", fn_ko: "운영", tags_ko: ["첨단 센서", "사물인터넷 (IoT)"] },
  "mas-tokenized-custody": { owner_ko: "싱가포르 통화청 (MAS)", fn_ko: "인프라", tags_ko: ["디지털 자산", "커스터디", "레그테크"], prize_ko: "샌드박스 + 파일럿" },
  "mas-cross-border-recon": { owner_ko: "싱가포르 통화청 (MAS)", fn_ko: "운영", tags_ko: ["결제", "AI & 데이터"], prize_ko: "매칭펀딩 파일럿" },
  "port-predictive-maintenance": { owner_ko: "항만 물류 운영사", fn_ko: "운영", tags_ko: ["센서 융합", "머신러닝", "인더스트리 4.0"] },
  "retail-shelf-visibility": { owner_ko: "식료품 리테일 그룹", fn_ko: "운영", tags_ko: ["컴퓨터 비전", "로보틱스"] },
  "esg-embodied-carbon": { owner_ko: "부동산 개발사 컨소시엄", fn_ko: "설계", tags_ko: ["순환 건설", "소재", "측정"], prize_ko: "매칭펀딩 파일럿" },
  "oin-clinic-noshow": { owner_ko: "공공 의료 클러스터", fn_ko: "운영", tags_ko: ["행동 AI", "스케줄링"], prize_ko: "매칭펀딩 파일럿" },
  "corp-ai-research": { owner_ko: "역내 금융기관", fn_ko: "리서치", tags_ko: ["AI & 데이터", "투자 리서치"], prize_ko: "유료 PoC" },
};

/* Org pages — focus chips + open-call rows (matched by array order) */
const KO_ORG = {
  "imda-oip": {
    focus_ko: ["AI & 데이터", "디지털 서비스", "스마트네이션", "엔터프라이즈 테크"],
    calls_ko: [
      { title_ko: "슈퍼마켓 체인의 매대 단위 재고 가시성", sector_ko: "리테일" },
      { title_ko: "컨테이너 하역 장비 예지보전", sector_ko: "물류" },
      { title_ko: "금융기관 컴플라이언스 보고 자동화", sector_ko: "핀테크" },
    ],
  },
  "open-innovation-network": {
    focus_ko: ["공공부문", "헬스테크", "도시 솔루션", "지속가능성"],
    calls_ko: [
      { title_ko: "전문의 외래 클리닉 노쇼율 감소", sector_ko: "헬스테크", funding_ko: "매칭펀딩 파일럿" },
      { title_ko: "저지대 도심 유역 실시간 침수 감지", sector_ko: "도시", funding_ko: "매칭펀딩 파일럿" },
    ],
  },
  "enterprise-singapore": {
    focus_ko: ["기업 성장", "지속가능성", "공급망", "시장 진출"],
    calls_ko: [{ title_ko: "상업시설 리트로핏의 내재탄소 감축", sector_ko: "지속가능성", funding_ko: "매칭펀딩 파일럿" }],
  },
  "monetary-authority-singapore": {
    focus_ko: ["핀테크", "레그테크", "디지털 자산", "결제"],
    calls_ko: [
      { title_ko: "토큰화 자산의 기관급 커스터디·결제", sector_ko: "디지털 자산", funding_ko: "샌드박스 + 파일럿" },
      { title_ko: "역내 회랑 크로스보더 결제 대사", sector_ko: "결제", funding_ko: "매칭펀딩 파일럿" },
    ],
  },
  "regional-financial-institution": {
    focus_ko: ["AI & 데이터", "투자 리서치", "리스크", "디지털 자산"],
    calls_ko: [
      { title_ko: "AI 기반 투자 리서치·스크리닝", sector_ko: "핀테크", funding_ko: "유료 PoC" },
      { title_ko: "멀티에셋 포트폴리오 실시간 리스크 모니터링", sector_ko: "레그테크", funding_ko: "유료 PoC" },
    ],
  },
};

/* ---- graft the Korean layer onto the source objects ---- */
STARTUPS.forEach((s) => {
  const k = KO_STARTUP_DETAIL[s.slug];
  if (!k) return;
  if (k.banner_title_ko) s.banner.title_ko = k.banner_title_ko;
  ["problem_ko", "opportunity_ko", "advantage_ko", "achievements_ko", "highlights_ko"].forEach((f) => {
    if (k[f]) s[f.replace("_ko", "") + "_ko"] = k[f];
  });
  if (k.solution_ko) {
    s.solution.lead_ko = k.solution_ko.lead_ko;
    (k.solution_ko.groups_ko ?? []).forEach((g, i) => {
      if (s.solution.groups[i]) Object.assign(s.solution.groups[i], g);
    });
  }
  if (k.businessModel_ko) {
    s.businessModel.lead_ko = k.businessModel_ko.lead_ko;
    s.businessModel.items_ko = k.businessModel_ko.items_ko;
  }
});

CHALLENGES.forEach((c) => {
  const k = KO_CHALLENGE[c.id];
  if (k) Object.assign(c, k);
});

ORGS.forEach((o) => {
  const k = KO_ORG[o.slug];
  if (!k) return;
  if (k.focus_ko) o.focus_ko = k.focus_ko;
  (k.calls_ko ?? []).forEach((c, i) => {
    if (o.calls[i]) Object.assign(o.calls[i], c);
  });
});
