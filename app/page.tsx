import { Nav } from "../components/Nav";
import { SignupForm } from "../components/SignupForm";
import { BriefCard } from "../components/BriefCard";
import { allBriefs, todayBrief } from "../lib/briefs";
import { homeCopy, labels, marketWeatherLabels, normalizeLang, textOf, withLang } from "../lib/i18n";

type PageProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const copy = homeCopy[lang];
  const label = labels[lang];
  const lead = todayBrief.items[0];
  const recentBriefs = allBriefs.slice(0, 5);

  return (
    <>
      <Nav lang={lang} />
      <main className="page-shell">
        <section className="news-hero">
          <div className="lead-story card">
            <div className="eyebrow">{copy.eyebrow}</div>
            <div className="edition-line">{todayBrief.date} · {marketWeatherLabels[lang][todayBrief.marketWeather]}</div>
            <h1>{copy.title}</h1>
            <p className="hero-copy">{copy.hero}</p>
            <div className="cta-row">
              <a className="btn primary" href={withLang("/briefs/today", lang)}>{copy.primaryCta}</a>
              <a className="btn" href={withLang("/briefs", lang)}>{copy.secondaryCta}</a>
            </div>
          </div>

          <aside className="daily-front card">
            <div className="masthead"><span>TechProphet</span><span>{todayBrief.edition}</span></div>
            <div className="tag" style={{ marginTop: 18 }}>{copy.liveTitle}</div>
            <h2>{textOf(lead.title, lang)}</h2>
            <p>{textOf(lead.summary, lang)}</p>
            <div className="mos-sight"><strong>{label.moSight}</strong><br />{textOf(lead.moSight, lang)}</div>
            <p><strong>{label.businessTalk}：</strong>{textOf(lead.businessTalk, lang)}</p>
          </aside>
        </section>

        <section className="section">
          <h2>{copy.topSignalsTitle}</h2>
          <p className="section-lead">{copy.topSignalsLead}</p>
          <div className="grid three" style={{ marginTop: 22 }}>
            {todayBrief.items.map((item) => <BriefCard item={item} lang={lang} key={item.id} />)}
          </div>
        </section>

        <section className="section archive-section">
          <div>
            <h2>{copy.archiveTitle}</h2>
            <p className="section-lead">{copy.archiveLead}</p>
          </div>
          <div className="archive-list">
            {recentBriefs.map((brief) => (
              <a className="archive-row" href={withLang(`/briefs/${brief.date}`, lang)} key={brief.date}>
                <span>{brief.date}</span>
                <strong>{textOf(brief.headline, lang)}</strong>
              </a>
            ))}
            <a className="btn" href={withLang("/briefs", lang)}>{lang === "zh" ? "查看全部歷史資料" : "View all editions"}</a>
          </div>
        </section>

        <section className="section" id="waitlist">
          <h2>{copy.signupTitle}</h2>
          <p className="section-lead">{copy.signupLead}</p>
          <SignupForm lang={lang} />
        </section>
      </main>
      <footer className="footer page-shell">{copy.footer}</footer>
    </>
  );
}
