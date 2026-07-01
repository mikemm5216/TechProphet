import type { BriefItem } from "../lib/types";

export function BriefCard({ item }: { item: BriefItem }) {
  return (
    <article className="card">
      <div className="tag">TOP {item.rank} · {item.layer} · {item.region}</div>
      <h3>{item.title}</h3>
      <div className="meta">
        {item.tags.slice(0, 5).map((tag) => <span className="pill" key={tag}>{tag}</span>)}
        <span className="pill hot">{item.maturity}</span>
      </div>
      <p>{item.summary}</p>
      <div className="mos-sight"><strong>Mo&apos;s Sight</strong><br />{item.moSight}</div>
      <p><strong>Supply-chain impact:</strong> {item.supplyChainImpact}</p>
      <p><strong>Business Talk:</strong> {item.businessTalk}</p>
      <ul className="metric-list">
        {item.metrics.map((metric) => <li key={metric}>{metric}</li>)}
      </ul>
      <p className="tag">Source mode: {item.confidence} · <a href={item.sourceUrl}>Read original</a></p>
    </article>
  );
}
