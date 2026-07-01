import { Nav } from "@/components/Nav";
import { todayBrief } from "@/lib/briefs";
import { labels, normalizeLang, textOf, withLang } from "@/lib/i18n";

type PageProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function CardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const copy = labels[lang];
  const item = todayBrief.items[0];

  return (
    <>
      <Nav lang={lang} />
      <main className="page-shell section">
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>{lang === "zh" ? "一頁式分享圖卡" : "One-page share card"}</h1>
        <p className="section-lead">
          {lang === "zh"
            ? "把今天的技術重點轉成 LINE、Email、IG 或簡報可以直接分享的 9:16 圖卡。"
            : "Turn today’s technology signal into a 9:16 card ready for LINE, email, IG, or slides."}
        </p>
        <div className="card-preview-wrap" style={{ marginTop: 28 }}>
          <div className="story-card">
            <img className="story-image" src={item.image} alt={textOf(item.title, lang)} />
            <div className="small">TECHPROPHET · TODAY&apos;S SIGNAL</div>
            <h2>{textOf(item.title, lang)}</h2>
            <div className="split">
              <div className="box"><strong>{textOf(item.oldVsNew.oldLabel, lang)}</strong>{textOf(item.oldVsNew.oldDescription, lang)}</div>
              <div className="box"><strong>{textOf(item.oldVsNew.newLabel, lang)}</strong>{textOf(item.oldVsNew.newDescription, lang)}</div>
            </div>
            <p className="mos">{copy.moSight}: {textOf(item.moSight, lang)}</p>
            <p>{textOf(item.businessTalk, lang)}</p>
            <div className="small">{copy.notAdvice} · {copy.sourceLinkRequired}</div>
          </div>
          <div className="card">
            <div className="tag">Share Card</div>
            <h3>{lang === "zh" ? "打開可下載的 PNG 圖卡" : "Open the downloadable PNG card"}</h3>
            <p>{lang === "zh" ? "這張圖卡可用於每日 Email、LINE 客戶群組、社群貼文或業務簡報。" : "This card can be used in daily email, LINE customer groups, social posts, or sales decks."}</p>
            <a className="btn primary" href={withLang("/api/card", lang)} target="_blank">{copy.openPng}</a>
          </div>
        </div>
      </main>
    </>
  );
}
