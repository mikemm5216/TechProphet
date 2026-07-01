import { Nav } from "../../../components/Nav";
import { BriefCard } from "../../../components/BriefCard";
import { todayBrief } from "../../../lib/briefs";

export default function TodayBriefPage() {
  return (
    <>
      <Nav />
      <main className="page-shell section">
        <div className="eyebrow">{todayBrief.date} · {todayBrief.marketWeather}</div>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>今日電子供應鏈樣刊</h1>
        <p className="section-lead">{todayBrief.headline}</p>
        <div className="brief-layout" style={{ marginTop: 28 }}>
          <div className="grid">
            {todayBrief.items.map((item) => <BriefCard item={item} key={item.id} />)}
          </div>
          <aside className="aside card">
            <div className="tag">V0.1 Editorial Guardrails</div>
            <h3>上線守則</h3>
            <ul>
              <li>只抓公開標題、摘要、公告、連結。</li>
              <li>不複製付費媒體全文。</li>
              <li>AI 產出先進 draft，人工 review 後 publish。</li>
              <li>每則都要保留 source URL。</li>
              <li>中國資料補在 source coverage，不改產品定位。</li>
            </ul>
            <a className="btn primary" href="/api/card" target="_blank">打開 PNG 圖卡 API</a>
          </aside>
        </div>
      </main>
    </>
  );
}
