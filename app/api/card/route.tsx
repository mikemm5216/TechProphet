import { ImageResponse } from "next/og";
import { todayBrief } from "../../../lib/briefs";

export const runtime = "edge";

export async function GET() {
  const item = todayBrief.items[0];

  return new ImageResponse(
    (
      <div
        style={{
          height: "1920px",
          width: "1080px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #050A14 0%, #07101e 55%, #03050a 100%)",
          color: "#F0F0F0",
          padding: "76px",
          fontFamily: "Arial",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.16, backgroundImage: "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, letterSpacing: 5, color: "#A8B3C7" }}>
          <span>TECHPROPHET</span>
          <span>{todayBrief.date}</span>
        </div>
        <div style={{ zIndex: 1 }}>
          <div style={{ color: "#CCFF00", fontSize: 34, fontWeight: 800, letterSpacing: 4 }}>TODAY&apos;S SIGNAL · TOP {item.rank}</div>
          <h1 style={{ fontFamily: "Georgia", fontSize: 92, lineHeight: 1, letterSpacing: -4, margin: "30px 0 42px" }}>{item.title}</h1>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1, border: "2px solid rgba(255,255,255,.18)", borderRadius: 28, padding: 30, background: "rgba(255,255,255,.08)" }}>
              <div style={{ color: "#00F0FF", fontSize: 28, fontWeight: 800 }}>{item.oldVsNew.oldLabel}</div>
              <p style={{ fontSize: 28, lineHeight: 1.35 }}>{item.oldVsNew.oldDescription}</p>
            </div>
            <div style={{ flex: 1, border: "2px solid rgba(204,255,0,.36)", borderRadius: 28, padding: 30, background: "rgba(204,255,0,.08)" }}>
              <div style={{ color: "#CCFF00", fontSize: 28, fontWeight: 800 }}>{item.oldVsNew.newLabel}</div>
              <p style={{ fontSize: 28, lineHeight: 1.35 }}>{item.oldVsNew.newDescription}</p>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 1, borderLeft: "10px solid #CCFF00", padding: "28px 34px", background: "rgba(204,255,0,.09)", borderRadius: "0 30px 30px 0" }}>
          <div style={{ color: "#CCFF00", fontSize: 34, fontWeight: 900 }}>Mo&apos;s Sight</div>
          <p style={{ fontSize: 42, lineHeight: 1.35, margin: "18px 0 0" }}>{item.moSight}</p>
        </div>
        <div style={{ zIndex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#00F0FF" }}>Business Talk</div>
          <div style={{ fontSize: 38, lineHeight: 1.35 }}>{item.businessTalk}</div>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 14 }}>
            {item.tags.slice(0, 5).map((tag) => <span key={tag} style={{ border: "1px solid rgba(255,255,255,.22)", borderRadius: 999, padding: "12px 18px", fontSize: 26, color: "#A8B3C7" }}>{tag}</span>)}
          </div>
          <div style={{ marginTop: 18, fontSize: 24, color: "#A8B3C7" }}>Industry briefing only · Not investment advice · Source link required</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1920 }
  );
}
