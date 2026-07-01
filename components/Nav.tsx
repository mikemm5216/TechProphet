export function Nav() {
  return (
    <nav className="nav page-shell">
      <a className="brand" href="/">
        <img src="/techprophet-mark.svg" alt="TechProphet mark" />
        <span>TechProphet</span>
      </a>
      <div className="nav-links">
        <a href="/briefs/today">今日樣刊</a>
        <a href="/card">圖卡 Demo</a>
        <a href="/#waitlist">Email waitlist</a>
      </div>
    </nav>
  );
}
