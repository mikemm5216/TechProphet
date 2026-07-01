import type { Lang, LocalizedString, Region, SupplyChainLayer, Maturity, SignalType } from "./types";

export function normalizeLang(value?: string | string[] | null): Lang {
  const lang = Array.isArray(value) ? value[0] : value;
  return lang === "en" ? "en" : "zh";
}

export function textOf(value: LocalizedString, lang: Lang) {
  return value[lang] || value.zh;
}

export function withLang(path: string, lang: Lang) {
  const [base, hash] = path.split("#");
  const joiner = base.includes("?") ? "&" : "?";
  return `${base}${joiner}lang=${lang}${hash ? `#${hash}` : ""}`;
}

export const navCopy = {
  zh: {
    brief: "今日戰情",
    archive: "歷史資料",
    card: "分享圖卡",
    waitlist: "訂閱",
    toggle: "EN"
  },
  en: {
    brief: "Today Brief",
    archive: "Archive",
    card: "Share Card",
    waitlist: "Subscribe",
    toggle: "中"
  }
} satisfies Record<Lang, Record<string, string>>;

export const homeCopy = {
  zh: {
    eyebrow: "GLOBAL ELECTRONICS INTELLIGENCE BRIEF",
    title: "全球電子供應鏈每日戰情",
    hero: "今天電子業最值得注意的三個訊號：新技術、供應鏈變化、客戶可能會問的問題，一次整理給你。",
    primaryCta: "閱讀今日戰情",
    secondaryCta: "查看歷史資料",
    liveTitle: "今日頭條",
    topSignalsTitle: "今日 Top 3",
    topSignalsLead: "每一天只選三件真正值得你注意的事：看得懂、講得出口、能拿去跟客戶溝通。",
    archiveTitle: "歷史戰情",
    archiveLead: "每日版本會保留下來，方便回看技術趨勢、供應鏈轉折與客戶談資。",
    signupTitle: "訂閱每日戰情",
    signupLead: "留下 Email，每天收到電子業重點、Mo’s Sight 與客戶溝通話術。",
    footer: "TechProphet 內容僅供產業資訊整理與商務溝通參考，不構成投資建議、採購建議或任何保證。完整內容請以原始公開來源為準。"
  },
  en: {
    eyebrow: "GLOBAL ELECTRONICS INTELLIGENCE BRIEF",
    title: "Daily electronics supply-chain intelligence",
    hero: "The three electronics signals that matter today: new technologies, supply-chain shifts, and what your customers may ask next.",
    primaryCta: "Read today’s brief",
    secondaryCta: "Browse archive",
    liveTitle: "Lead signal",
    topSignalsTitle: "Today’s Top 3",
    topSignalsLead: "Only three signals each day: clear enough to understand, useful enough to discuss with customers.",
    archiveTitle: "Brief archive",
    archiveLead: "Every daily edition is preserved so you can track technology trends, supply-chain shifts, and customer talking points over time.",
    signupTitle: "Subscribe to the daily brief",
    signupLead: "Leave your email to receive daily electronics signals, Mo’s Sight, and customer-ready talking points.",
    footer: "TechProphet content is for industry briefing and business communication reference only. It is not investment advice, procurement advice, or a guarantee. Please refer to original public sources for complete information."
  }
} as const;

export const labels = {
  zh: {
    top: "重點",
    summary: "重點摘要",
    moSight: "Mo’s Sight",
    supplyChainImpact: "供應鏈影響",
    businessTalk: "客戶溝通話術",
    keyMetrics: "關鍵數據",
    source: "原始來源",
    signalType: "訊號類型",
    maturity: "成熟度",
    oldWay: "原本做法",
    newWay: "新做法",
    openPng: "開啟 PNG 圖卡",
    notAdvice: "產業簡報用途，非投資建議",
    sourceLinkRequired: "請保留原始來源連結"
  },
  en: {
    top: "Top",
    summary: "Summary",
    moSight: "Mo’s Sight",
    supplyChainImpact: "Supply-chain impact",
    businessTalk: "Business Talk",
    keyMetrics: "Key metrics",
    source: "Original source",
    signalType: "Signal type",
    maturity: "Maturity",
    oldWay: "Old way",
    newWay: "New way",
    openPng: "Open PNG card",
    notAdvice: "Industry briefing only, not investment advice",
    sourceLinkRequired: "Keep original source link"
  }
} satisfies Record<Lang, Record<string, string>>;

export const regionLabels: Record<Lang, Record<Region, string>> = {
  zh: { Global: "全球", Taiwan: "台灣", China: "中國", "Japan/Korea": "日韓", "US/EU": "美歐" },
  en: { Global: "Global", Taiwan: "Taiwan", China: "China", "Japan/Korea": "Japan/Korea", "US/EU": "US/EU" }
};

export const layerLabels: Record<Lang, Record<SupplyChainLayer, string>> = {
  zh: { Upstream: "上游", Midstream: "中游", Downstream: "下游", "Cross-layer": "跨供應鏈" },
  en: { Upstream: "Upstream", Midstream: "Midstream", Downstream: "Downstream", "Cross-layer": "Cross-layer" }
};

export const maturityLabels: Record<Lang, Record<Maturity, string>> = {
  zh: { Lab: "研發中", Sampling: "送樣/驗證", Ramp: "放量中", "Mass Production": "量產" },
  en: { Lab: "Lab", Sampling: "Sampling", Ramp: "Ramp", "Mass Production": "Mass Production" }
};

export const signalTypeLabels: Record<Lang, Record<SignalType, string>> = {
  zh: {
    Policy: "政策訊號",
    "Company Filing": "公司公告",
    "Company PR": "公司新聞稿",
    "Media Signal": "媒體訊號",
    "Trade Show": "展會訊號",
    Tender: "招標/採購",
    "Market Signal": "市場訊號"
  },
  en: {
    Policy: "Policy",
    "Company Filing": "Company filing",
    "Company PR": "Company PR",
    "Media Signal": "Media signal",
    "Trade Show": "Trade show",
    Tender: "Tender",
    "Market Signal": "Market signal"
  }
};

export const marketWeatherLabels: Record<Lang, Record<string, string>> = {
  zh: { Calm: "平穩", Volatile: "震盪", Hot: "偏熱", Mixed: "分歧" },
  en: { Calm: "Calm", Volatile: "Volatile", Hot: "Hot", Mixed: "Mixed" }
};

export const signupCopy = {
  zh: {
    placeholder: "your@email.com",
    submit: "訂閱樣刊",
    loading: "送出中",
    roles: ["業務 / BD", "PM / 產品", "採購", "主管 / 經營者", "工程 / 研發", "投資 / 研究"]
  },
  en: {
    placeholder: "your@email.com",
    submit: "Subscribe",
    loading: "Submitting",
    roles: ["Sales / BD", "PM / Product", "Procurement", "Executive", "Engineer / R&D", "Investor / Research"]
  }
} as const;
