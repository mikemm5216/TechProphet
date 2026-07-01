import { notFound } from "next/navigation";
import { Nav } from "../../../components/Nav";
import { BriefCard } from "../../../components/BriefCard";
import { allBriefs, getBriefByDate } from "../../../lib/briefs";
import { labels, marketWeatherLabels, normalizeLang, textOf, withLang } from "../../../lib/i18n";

type PageProps = {
  params: Promise<{ date: string }>;
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export function generateStaticParams() {
  return allBriefs.map((brief) => ({ date: brief.date }));
}

export default async function BriefDatePage({ params, searchParams }: PageProps) {
  const { date } = await params;
  const query = await searchParams;
  const lang = normalizeLang(query?.lang);
  const brief = getBriefByDate(date);
  const copy = labels[lang];

  if (!brief) notFound();

  return (
    <>
      <Nav lang={lang} />
      <main className="page-shell section">
        <div className="eyebrow">{brief.date} · {marketWeatherLabels[lang][brief.marketWeather]}</div>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)" }}>{lang === "zh" ? "電子供應鏈戰情" : "Electronics supply-chain brief"}</h1>
        <p className="section-lead">{textOf(brief.headline, lang)}</p>
        <div className="brief-layout" style={{ marginTop: 28 }}>
          <div className="grid">
            {brief.items.map((item) => <BriefCard item={item} lang={lang} key={item.id} />)}
          </div>
          <aside className="aside card">
            <div className="tag">{lang === "zh" ? "每日版本" : "Daily edition"}</div>
            <h3>{brief.date}</h3>
            <p>{lang === "zh" ? "這份戰情會保留在歷史資料中，方便追蹤供應鏈變化與技術名詞演進。" : "This edition is preserved in the archive for tracking supply-chain changes and terminology over time."}</p>
            <a className="btn primary" href={withLang("/api/card", lang)} target="_blank">{copy.openPng}</a>
            <a className="btn" href={withLang("/briefs", lang)}>{lang === "zh" ? "回歷史資料" : "Back to archive"}</a>
          </aside>
        </div>
      </main>
    </>
  );
}
