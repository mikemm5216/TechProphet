import { Nav } from "../../../components/Nav";
import { BriefCard } from "../../../components/BriefCard";
import { todayBrief } from "../../../lib/briefs";
import { labels, marketWeatherLabels, normalizeLang, textOf, withLang } from "../../../lib/i18n";

type PageProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function TodayBriefPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const copy = labels[lang];

  return (
    <>
      <Nav lang={lang} />
      <main className="page-shell section">
        <div className="eyebrow">{todayBrief.date} · {marketWeatherLabels[lang][todayBrief.marketWeather]}</div>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>{lang === "zh" ? "今日電子供應鏈戰情" : "Today’s electronics brief"}</h1>
        <p className="section-lead">{textOf(todayBrief.headline, lang)}</p>
        <div className="brief-layout" style={{ marginTop: 28 }}>
          <div className="grid">
            {todayBrief.items.map((item) => <BriefCard item={item} lang={lang} key={item.id} />)}
          </div>
          <aside className="aside card">
            <div className="tag">TechProphet</div>
            <h3>{lang === "zh" ? "怎麼使用這份戰情？" : "How to use this brief"}</h3>
            <ul>
              <li>{lang === "zh" ? "先看 Top 3，快速掌握今天最重要的供應鏈變化。" : "Start with the Top 3 to understand today’s most important supply-chain movements."}</li>
              <li>{lang === "zh" ? "用 Mo’s Sight 看懂技術差異與商業影響。" : "Use Mo’s Sight to understand technical differences and business impact."}</li>
              <li>{lang === "zh" ? "把 Business Talk 轉成客戶拜訪、內部會議或社群分享素材。" : "Turn Business Talk into customer visits, internal meetings, or social posts."}</li>
            </ul>
            <a className="btn primary" href={withLang("/api/card", lang)} target="_blank">{copy.openPng}</a>
            <a className="btn" href={withLang("/briefs", lang)}>{lang === "zh" ? "查看歷史資料" : "View archive"}</a>
          </aside>
        </div>
      </main>
    </>
  );
}
