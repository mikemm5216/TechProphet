import type { DailyBrief } from "./types";

export const todayBrief: DailyBrief = {
  date: "2026-07-01",
  edition: "Beta Sample",
  marketWeather: "Hot",
  headline: {
    zh: "AI 基礎建設仍在拉動電子供應鏈，但下一波受益者取決於封裝、光通訊、功率與散熱瓶頸誰先被打開。",
    en: "AI infrastructure is still pulling the electronics chain upward, but the next winners depend on who solves packaging, optics, power, and thermal bottlenecks first."
  },
  items: [
    {
      id: "cpo-switch-ai-datacenter",
      rank: 1,
      title: {
        zh: "CPO 從流行詞變成交換器路線圖壓力點",
        en: "CPO moves from buzzword to switch-roadmap pressure point"
      },
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/cpo",
      region: "Global",
      signalType: "Market Signal",
      layer: "Cross-layer",
      tags: ["CPO", "800G", "1.6T", "AI Data Center", "Switch"],
      summary: {
        zh: "AI 資料中心的高速傳輸正在逼近銅線功耗、發熱與訊號衰減極限。CPO 之所以重要，是因為它把光引擎拉近交換晶片，減少高速電訊號要跑的距離。",
        en: "High-speed AI data centers are pushing electrical interconnects toward power, heat, and signal-loss limits. CPO matters because it moves optical engines closer to the switch ASIC, shortening the high-speed electrical path."
      },
      supplyChainImpact: {
        zh: "光引擎、交換器 ASIC、先進基板、散熱、測試設備與資料中心系統整合商會更緊密綁在一起。",
        en: "Optical engines, switch ASICs, advanced substrates, thermal design, test equipment, and datacenter system integrators become more tightly linked."
      },
      oldVsNew: {
        oldLabel: { zh: "可插拔光模組", en: "Pluggable optics" },
        oldDescription: {
          zh: "光模組放在面板端，高速電訊號要先走過 PCB 與銅線路徑；速度越高，損耗、發熱與板端設計壓力越大。",
          en: "Optical modules sit at the front panel. Electrical signals travel across PCB traces first, which adds loss, heat, and board-design pressure at higher speeds."
        },
        newLabel: { zh: "CPO 光電共封裝", en: "CPO" },
        newDescription: {
          zh: "光引擎靠近交換晶片，高速電訊號路徑縮短，降低損耗與功耗壓力，讓 800G / 1.6T 交換器更有機會落地。",
          en: "Optical engines move closer to the switch ASIC. The electrical path becomes much shorter, reducing signal loss and power burden for 800G / 1.6T platforms."
        }
      },
      moSight: {
        zh: "以前像是每個包裹都要先繞去很遠的倉庫再配送，路越長越耗油也越塞。CPO 像是把倉庫搬到店旁邊，貨還是要送，但浪費在路上的能量明顯變少。",
        en: "Think of old pluggable optics as sending every package through a far-away warehouse before delivery. CPO moves the warehouse next to the store. The package still moves, but the wasteful commute shrinks."
      },
      metrics: [
        { zh: "業界常討論 CPO 可帶來約 30% 以上功耗改善，實際數字依架構而定", en: "Power reduction is often discussed around 30%+ depending on architecture" },
        { zh: "主要對應 800G / 1.6T 交換器的傳輸壓力", en: "Designed for 800G / 1.6T class pressure" },
        { zh: "縮短高速電路徑可改善訊號完整性與散熱設計壓力", en: "Lower electrical path length improves signal integrity and thermal pressure" }
      ],
      businessTalk: {
        zh: "面對交換器、散熱、連接器或光通訊客戶時，不要只說 CPO 是速度升級；要說它會重新分配盒子裡的價值，光學、封裝、散熱與測試都會更靠近核心。",
        en: "For switch, thermal, connector, and optics customers: CPO is not just a speed upgrade. It changes where value sits inside the box — closer to optics, packaging, thermal, and test."
      },
      maturity: "Sampling",
      confidence: "Needs review"
    },
    {
      id: "hbm3e-ai-gpu-memory",
      rank: 2,
      title: {
        zh: "HBM3E 讓記憶體繼續卡住 AI GPU 供應節奏",
        en: "HBM3E keeps memory as the gatekeeper of AI GPU supply"
      },
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/hbm3e",
      region: "Taiwan",
      signalType: "Media Signal",
      layer: "Upstream",
      tags: ["HBM3E", "TSV", "AI GPU", "Memory", "Advanced Packaging"],
      summary: {
        zh: "AI 加速器需要的不只是記憶體容量，而是能不能把資料快速餵進 GPU。HBM3E 的關鍵是把 DRAM 垂直堆疊，放在處理器附近，讓資料高速通道變寬。",
        en: "AI accelerators need memory bandwidth more than traditional capacity. HBM3E matters because it stacks DRAM vertically near the processor to widen the data highway."
      },
      supplyChainImpact: {
        zh: "記憶體廠、TSV 製程、先進封裝、基板、測試與 GPU 平台規劃都會受到良率與堆疊品質影響。",
        en: "Memory vendors, TSV process, advanced packaging, substrate, testing, and GPU platform planning all become bottleneck-sensitive."
      },
      oldVsNew: {
        oldLabel: { zh: "傳統 GDDR 佈局", en: "GDDR-style memory layout" },
        oldDescription: {
          zh: "記憶體像一排平房圍在處理器旁邊，資料路徑較長，佔板面積也較大，功耗壓力隨頻寬需求上升。",
          en: "Memory chips sit around the processor like separate houses. Data travels farther, using more board area and power."
        },
        newLabel: { zh: "HBM3E 垂直堆疊", en: "HBM3E stack" },
        newDescription: {
          zh: "DRAM die 像高樓一樣往上堆，再用 TSV 矽穿孔當高速電梯，讓資料在更短距離內高頻寬移動。",
          en: "DRAM dies are stacked vertically and connected through TSVs, like elevators through a high-rise building."
        }
      },
      moSight: {
        zh: "GDDR 像郊區平房，房子很多但路也很多。HBM 像把辦公室旁邊蓋一棟摩天樓，用電梯把人快速送上送下；AI 訓練需要的不是更多小路，而是更寬更短的資料高速電梯。",
        en: "GDDR is a suburb: many houses, lots of roads. HBM is a skyscraper beside the office: more people move through elevators, faster and with less commuting."
      },
      metrics: [
        { zh: "頻寬進入 TB/s 等級，對 AI GPU 平台具系統級重要性", en: "Bandwidth reaches TB/s-class system relevance" },
        { zh: "更短資料路徑有助於提升能源效率", en: "Shorter paths improve energy efficiency" },
        { zh: "良率、堆疊品質與封裝可靠性會直接影響 AI GPU 可供貨量", en: "Yield and stacking quality directly affect AI GPU availability" }
      ],
      businessTalk: {
        zh: "面對基板、散熱、測試或伺服器平台客戶時，不要只問誰有記憶體產能；要問誰能通過認證、良率與封裝可靠性。",
        en: "For customers touching substrates, thermal, testing, or server platforms: do not only ask who has memory capacity. Ask who can pass qualification, yield, and package-level reliability."
      },
      maturity: "Ramp",
      confidence: "Needs review"
    },
    {
      id: "china-ev-sic-power-module",
      rank: 3,
      title: {
        zh: "中國 EV 功率模組訊號讓 SiC 與散熱供應商持續被關注",
        en: "China EV power module signals keep SiC and thermal suppliers on watch"
      },
      sourceName: "Sample public-source brief",
      sourceUrl: "https://example.com/source/china-ev-sic",
      region: "China",
      signalType: "Company Filing",
      layer: "Midstream",
      tags: ["SiC", "EV", "Power Module", "Thermal", "China Supply Chain"],
      summary: {
        zh: "中國 EV 與 tier supplier 持續推高效率功率平台。SiC 不是只有行銷名詞，而是為了在高壓平台下減少轉換損耗與熱負擔。",
        en: "China EV makers and tier suppliers continue to push higher-efficiency power platforms. SiC is less about marketing and more about reducing conversion loss and managing heat under higher voltage."
      },
      supplyChainImpact: {
        zh: "功率半導體、基板、模組封裝、導熱材料、連接器、busbar 與 EMS 組裝都會被牽動。",
        en: "Power semiconductors, substrates, module packaging, thermal interface materials, connectors, busbars, and EMS assembly are affected."
      },
      oldVsNew: {
        oldLabel: { zh: "矽基功率元件", en: "Silicon power devices" },
        oldDescription: {
          zh: "成熟、便宜、供應穩，但在高壓高功率 EV 平台下，效率與散熱壓力會變得更難處理。",
          en: "Mature and cost-effective, but efficiency and heat become harder under high-voltage, high-power EV requirements."
        },
        newLabel: { zh: "SiC 功率模組", en: "SiC power modules" },
        newDescription: {
          zh: "開關效率更高、高溫表現更好，適合緊湊型、高壓 EV 功率系統，但成本與良率仍是導入限制。",
          en: "Higher switching efficiency and better high-temperature behavior, useful for compact, high-voltage EV power systems."
        }
      },
      moSight: {
        zh: "傳統矽元件像可靠老貨車，便宜耐用。SiC 像輕量化賽車卡車，前期比較貴，但跑山路更省油也更不怕熱；高壓 EV 平台越普及，它的價值越容易被看見。",
        en: "Silicon is the reliable old truck. SiC is the lighter race truck: more expensive up front, but it wastes less energy and handles heat better when the route gets steep."
      },
      metrics: [
        { zh: "效率提升可降低熱設計負擔", en: "Better efficiency can reduce thermal burden" },
        { zh: "高壓 EV 平台會放大 SiC 價值", en: "High-voltage EV platforms amplify value" },
        { zh: "成本與良率仍是大規模採用限制", en: "Cost and yield remain adoption constraints" }
      ],
      businessTalk: {
        zh: "面對零組件客戶時，不要只推 SiC 本身；要一起談周邊機會：散熱、功率模組封裝、連接器、busbar 與可靠性驗證。",
        en: "For component sales: do not pitch SiC alone. Pitch the surrounding opportunity — thermal, power module packaging, connectors, busbars, and reliability validation."
      },
      maturity: "Mass Production",
      confidence: "Needs review"
    }
  ]
};


export const allBriefs: DailyBrief[] = [todayBrief];

export function getBriefByDate(date: string) {
  return allBriefs.find((brief) => brief.date === date);
}
