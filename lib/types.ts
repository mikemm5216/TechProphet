export type Lang = "zh" | "en";
export type LocalizedString = { zh: string; en: string };

export type Region = "Global" | "Taiwan" | "China" | "Japan/Korea" | "US/EU";
export type SupplyChainLayer = "Upstream" | "Midstream" | "Downstream" | "Cross-layer";
export type SignalType = "Policy" | "Company Filing" | "Company PR" | "Media Signal" | "Trade Show" | "Tender" | "Market Signal";
export type Maturity = "Lab" | "Sampling" | "Ramp" | "Mass Production";

export type BriefItem = {
  id: string;
  rank: number;
  title: LocalizedString;
  sourceName: string;
  sourceUrl: string;
  region: Region;
  signalType: SignalType;
  layer: SupplyChainLayer;
  tags: string[];
  summary: LocalizedString;
  supplyChainImpact: LocalizedString;
  oldVsNew: {
    oldLabel: LocalizedString;
    oldDescription: LocalizedString;
    newLabel: LocalizedString;
    newDescription: LocalizedString;
  };
  moSight: LocalizedString;
  metrics: LocalizedString[];
  businessTalk: LocalizedString;
  maturity: Maturity;
  confidence: "Verified public source" | "Cross-checked" | "Needs review";
};

export type DailyBrief = {
  date: string;
  edition: string;
  marketWeather: "Calm" | "Volatile" | "Hot" | "Mixed";
  headline: LocalizedString;
  items: BriefItem[];
};
