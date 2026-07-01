import type { DailyBrief } from "./types";

export const todayBrief: DailyBrief = {
  date: "2026-07-01",
  edition: "V0.1 Beta Sample",
  marketWeather: "Hot",
  headline: "AI infrastructure is still pulling the whole electronics chain upward — but power, packaging, optics, and China signals decide who benefits next.",
  items: [
    {
      id: "cpo-switch-ai-datacenter",
      rank: 1,
      title: "CPO moves from buzzword to switch-roadmap pressure point",
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/cpo",
      region: "Global",
      signalType: "Market Signal",
      layer: "Cross-layer",
      tags: ["CPO", "800G", "1.6T", "AI Data Center", "Switch"],
      summary: "High-speed AI data centers are pushing electrical interconnects toward power and heat limits. Co-Packaged Optics is becoming a practical path for next-generation switch platforms.",
      supplyChainImpact: "Optical engines, switch ASICs, advanced substrates, thermal design, test equipment, and datacenter system integrators become more tightly linked.",
      oldVsNew: {
        oldLabel: "Pluggable Optics",
        oldDescription: "Optical modules sit at the front panel. Electrical signals travel across PCB traces first, which adds loss, heat, and board-design pressure at higher speeds.",
        newLabel: "CPO",
        newDescription: "Optical engines move closer to the switch ASIC. The electrical path becomes much shorter, reducing signal loss and power burden."
      },
      moSight: "Think of old pluggable optics as sending every package through a far-away warehouse before delivery. CPO moves the warehouse next to the store. The package still moves, but the wasteful commute shrinks.",
      metrics: ["Power reduction often discussed around 30%+ depending on architecture", "Designed for 800G / 1.6T class pressure", "Lower electrical path length improves signal integrity"],
      businessTalk: "For switch, thermal, connector, and optics customers: CPO is not just a speed upgrade. It changes where value sits inside the box — closer to optics, packaging, thermal, and test.",
      maturity: "Sampling",
      confidence: "Needs review"
    },
    {
      id: "hbm3e-ai-gpu-memory",
      rank: 2,
      title: "HBM3E keeps memory as the gatekeeper of AI GPU supply",
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/hbm3e",
      region: "Taiwan",
      signalType: "Media Signal",
      layer: "Upstream",
      tags: ["HBM3E", "TSV", "AI GPU", "Memory", "Advanced Packaging"],
      summary: "AI accelerators need memory bandwidth more than traditional capacity. HBM3E matters because it stacks DRAM vertically near the processor to widen the data highway.",
      supplyChainImpact: "Memory vendors, TSV process, advanced packaging, substrate, testing, and GPU platform planning all become bottleneck-sensitive.",
      oldVsNew: {
        oldLabel: "GDDR-style memory layout",
        oldDescription: "Memory chips sit around the processor like separate houses. Data travels farther, using more board area and power.",
        newLabel: "HBM3E stack",
        newDescription: "DRAM dies are stacked vertically and connected through TSVs, like elevators through a high-rise building."
      },
      moSight: "GDDR is a suburb: many houses, lots of roads. HBM is a skyscraper beside the office: more people move through elevators, faster and with less commuting.",
      metrics: ["Bandwidth reaches TB/s-class system relevance", "Shorter paths improve energy efficiency", "Yield and stacking quality directly affect AI GPU availability"],
      businessTalk: "For customers touching substrates, thermal, testing, or server platforms: do not only ask who has memory capacity. Ask who can pass qualification, yield, and package-level reliability.",
      maturity: "Ramp",
      confidence: "Needs review"
    },
    {
      id: "china-ev-sic-power-module",
      rank: 3,
      title: "China EV power module signals keep SiC and thermal suppliers on watch",
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/china-ev-sic",
      region: "China",
      signalType: "Company Filing",
      layer: "Midstream",
      tags: ["SiC", "EV", "Power Module", "Thermal", "China Supply Chain"],
      summary: "China EV makers and tier suppliers continue to push higher-efficiency power platforms. SiC is less about marketing and more about reducing conversion loss and managing heat under higher voltage.",
      supplyChainImpact: "Power semiconductors, substrates, module packaging, thermal interface materials, connectors, busbars, and EMS assembly are affected.",
      oldVsNew: {
        oldLabel: "Silicon power devices",
        oldDescription: "Mature and cost-effective, but efficiency and heat become harder under high-voltage, high-power EV requirements.",
        newLabel: "SiC power modules",
        newDescription: "Higher switching efficiency and better high-temperature behavior, useful for compact, high-voltage EV power systems."
      },
      moSight: "Silicon is the reliable old truck. SiC is the lighter race truck: more expensive up front, but it wastes less energy and handles heat better when the route gets steep.",
      metrics: ["Better efficiency can reduce thermal burden", "High-voltage EV platforms amplify value", "Cost and yield remain adoption constraints"],
      businessTalk: "For component sales: do not pitch SiC alone. Pitch the surrounding opportunity — thermal, power module packaging, connectors, busbars, and reliability validation.",
      maturity: "Mass Production",
      confidence: "Needs review"
    }
  ]
};
