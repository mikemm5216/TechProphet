import type { Lang } from "../lib/types";
import { navCopy, withLang } from "../lib/i18n";

export function Nav({ lang }: { lang: Lang }) {
  const copy = navCopy[lang];
  const nextLang: Lang = lang === "zh" ? "en" : "zh";

  return (
    <nav className="nav page-shell">
      <a className="brand" href={withLang("/", lang)}>
        <img src="/techprophet-mark.svg" alt="TechProphet mark" />
        <span>TechProphet</span>
      </a>
      <div className="nav-actions">
        <div className="nav-links">
          <a href={withLang("/briefs/today", lang)}>{copy.brief}</a>
          <a href={withLang("/briefs", lang)}>{copy.archive}</a>
          <a href={withLang("/card", lang)}>{copy.card}</a>
          <a href={withLang("/#waitlist", lang)}>{copy.waitlist}</a>
        </div>
        <a className="lang-toggle" href={withLang("/", nextLang)}>{copy.toggle}</a>
      </div>
    </nav>
  );
}
