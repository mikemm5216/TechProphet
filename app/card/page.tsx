import { Nav } from "../../components/Nav";
import { todayBrief } from "../../lib/briefs";

export default function CardPage() {
  const item = todayBrief.items[0];
  return (
    <>
      <Nav />
      <main className="page-shell section">
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>一頁式圖卡 Demo</h1>
        <p className="section-lead">V0.1 先用靜態 PNG。正式可以接排程，每天產出 LINE / IG / Email 可用的 9:16 圖卡。</p>
        <div className="card-preview-wrap" style={{ marginTop: 28 }}>
          <div className="story-card">
            <div className="small">TECHPROPHET · TODAY&apos;S SIGNAL</div>
            <h2>{item.title}</h2>
            <div className="split">
              <div className="box"><strong>{item.oldVsNew.oldLabel}</strong>{item.oldVsNew.oldDescription}</div>
              <div className="box"><strong>{item.oldVsNew.newLabel}</strong>{item.oldVsNew.newDescription}</div>
            </div>
            <p className="mos">Mo&apos;s Sight: {item.moSight}</p>
            <p>{item.businessTalk}</p>
            <div className="small">Read original · Not investment advice</div>
          </div>
          <div className="card">
            <div className="tag">Generated Image API</div>
            <h3>真正要下載 PNG，打這個 route</h3>
            <p><code>/api/card</code> 會用 Vercel OG/ImageResponse 生成 1080 × 1920 PNG。之後可以把 query string 換成不同 brief ID。</p>
            <a className="btn primary" href="/api/card" target="_blank">開啟 PNG</a>
          </div>
        </div>
      </main>
    </>
  );
}
