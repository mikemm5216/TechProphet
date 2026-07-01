import { Nav } from "@/components/Nav";
import { allBriefs } from "@/lib/briefs";
import { homeCopy, marketWeatherLabels, normalizeLang, textOf, withLang } from "@/lib/i18n";

type PageProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function BriefArchivePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const copy = homeCopy[lang];

  return (
    <>
      <Nav lang={lang} />
      <main className="page-shell section">
        <div className="eyebrow">TechProphet Archive</div>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>{copy.archiveTitle}</h1>
        <p className="section-lead">{copy.archiveLead}</p>
        <div className="archive-list full" style={{ marginTop: 28 }}>
          {allBriefs.map((brief) => (
            <a className="archive-row" href={withLang(`/briefs/${brief.date}`, lang)} key={brief.date}>
              <span>{brief.date} · {marketWeatherLabels[lang][brief.marketWeather]}</span>
              <strong>{textOf(brief.headline, lang)}</strong>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
