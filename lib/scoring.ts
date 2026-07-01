export type RawSignal = {
  title: string;
  regionWeight?: number;
  globalImpact?: number;
  taiwanLink?: number;
  chinaSupplyChainImpact?: number;
  termValue?: number;
  businessTalkValue?: number;
};

export function scoreSignal(signal: RawSignal) {
  const globalImpact = signal.globalImpact ?? 0;
  const chinaSupplyChainImpact = signal.chinaSupplyChainImpact ?? 0;
  const taiwanLink = signal.taiwanLink ?? 0;
  const termValue = signal.termValue ?? 0;
  const businessTalkValue = signal.businessTalkValue ?? 0;

  return Math.round(
    globalImpact * 0.25 +
      chinaSupplyChainImpact * 0.20 +
      taiwanLink * 0.20 +
      termValue * 0.20 +
      businessTalkValue * 0.15
  );
}
