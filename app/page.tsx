import { Nav } from "../components/Nav";
import { SignupForm } from "../components/SignupForm";
import { BriefCard } from "../components/BriefCard";
import { todayBrief } from "../lib/briefs";
import { sourceCoverage } from "../lib/sources";

export default function Home() {
  const hero = todayBrief.items[0];
  return (
    <>
      <Nav />
      <main className="page-shell">
        <section className="hero">
          <div>
            <div className="eyebrow">Global Electronics Intelligence Brief</div>
            <h1>全球電子供應鏈每日戰情。</h1>
            <p className="hero-copy">
              每天從全球電子產業新聞、公司公告與供應鏈訊號中，挑出最值得關注的 Top 3，轉成 Mo&apos;s Sight、技術白話解釋與業務可以拿去跟客戶聊的話術。
            </p>
            <div className="cta-row">
              <a className="btn primary" href="/briefs/today">看今日樣刊</a>
              <a className="btn" href="/card">看圖卡 Demo</a>
            </div>
          </div>

          <div className="newspaper">
            <div className="paper-inner">
              <div className="masthead"><span>TechProphet</span><span>{todayBrief.edition}</span></div>
              <div className="paper-title">{hero.title}</div>
              <div className="paper-note">Mo&apos;s Sight: {hero.moSight}</div>
              <div className="ticker">
                {todayBrief.items.map((item) => (
                  <div className="ticker-card" key={item.id}>
                    <div className="tag">TOP {item.rank} · {item.tags[0]}</div>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>不是搬運新聞，是回答「所以呢？」</h2>
          <p className="section-lead">
            V0.1 先做公開樣刊、Email waitlist、Top 3 signals、Mo&apos;s Sight 與一頁式圖卡。付費牆全文不抓、不重製；內容來源以公開摘要、公司公告、公開資訊與來源連結為主。
          </p>
          <div className="grid three" style={{ marginTop: 22 }}>
            <div className="card"><div className="tag">01</div><h3>Top 3 Signals</h3><p>每天只選三則：全球影響、供應鏈連動、新技術價值、業務談資都要夠強。</p></div>
            <div className="card"><div className="tag">02</div><h3>Mo&apos;s Sight</h3><p>用比喻、機制、數據說清楚：新技術比舊技術差在哪，為什麼客戶今天該聽。</p></div>
            <div className="card"><div className="tag">03</div><h3>Business Talk</h3><p>每則新聞給一段業務話術，讓 Sales / PM / 採購 / 主管都能快速轉成對話。</p></div>
          </div>
        </section>

        <section className="section">
          <h2>今日樣刊</h2>
          <p className="section-lead">以下是 MVP 內建 sample data；正式版會接公開 RSS、公司公告、台灣/中國/全球電子產業訊號。</p>
          <div className="grid three" style={{ marginTop: 22 }}>
            {todayBrief.items.map((item) => <BriefCard item={item} key={item.id} />)}
          </div>
        </section>

        <section className="section">
          <h2>Global source coverage</h2>
          <p className="section-lead">前台不特別標榜任何單一地區；後台必須覆蓋全球，並補足中國資料源。</p>
          <div className="grid two" style={{ marginTop: 22 }}>
            {sourceCoverage.map((source) => (
              <div className="card" key={source.region}>
                <div className="tag">{source.region}</div>
                <ul>
                  {source.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="waitlist">
          <h2>先收 Email，測內容價值。</h2>
          <p className="section-lead">V0.1 不急著開付費。先確認電子業的人看到後會不會覺得：「這個我可以拿去跟客戶講。」</p>
          <SignupForm />
        </section>
      </main>
      <footer className="footer page-shell">
        TechProphet content is for industry briefing and business communication reference only. It is not investment advice, procurement advice, or a guarantee. Every brief should link back to original public sources.
      </footer>
    </>
  );
}
