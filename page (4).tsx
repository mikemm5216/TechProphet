import { ImageResponse } from "next/og";
import { todayBrief } from "@/lib/briefs";
import { labels, normalizeLang, textOf } from "@/lib/i18n";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = normalizeLang(searchParams.get("lang"));
  const copy = labels[lang];
  const item = todayBrief.items[0];
  const imageUrl = new URL(item.image, request.url).toString();

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
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.16, backgroundImage: "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, letterSpacing: 5, color: "#A8B3C7" }}>
          <span>TECHPROPHET</span>
          <span>{todayBrief.date}</span>
        </div>
        <img src={imageUrl} width="928" height="520" style={{ width: "928px", height: "520px", objectFit: "cover", borderRadius: 34, border: "2px solid rgba(255,255,255,.18)", zIndex: 1 }} />
        <div style={{ zIndex: 1 }}>
          <div style={{ color: "#CCFF00", fontSize: 34, fontWeight: 800, letterSpacing: 4 }}>{copy.top} {item.rank}</div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: lang === "zh" ? 66 : 78, lineHeight: 1.05, letterSpacing: lang === "zh" ? -2 : -4, margin: "22px 0 30px" }}>{textOf(item.title, lang)}</h1>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ flex: 1, border: "2px solid rgba(255,255,255,.18)", borderRadius: 28, padding: 30, background: "rgba(255,255,255,.08)" }}>
              <div style={{ color: "#00F0FF", fontSize: 28, fontWeight: 800 }}>{textOf(item.oldVsNew.oldLabel, lang)}</div>
              <p style={{ fontSize: 28, lineHeight: 1.35 }}>{textOf(item.oldVsNew.oldDescription, lang)}</p>
            </div>
            <div style={{ flex: 1, border: "2px solid rgba(204,255,0,.36)", borderRadius: 28, padding: 30, background: "rgba(204,255,0,.08)" }}>
              <div style={{ color: "#CCFF00", fontSize: 28, fontWeight: 800 }}>{textOf(item.oldVsNew.newLabel, lang)}</div>
              <p style={{ fontSize: 28, lineHeight: 1.35 }}>{textOf(item.oldVsNew.newDescription, lang)}</p>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 1, borderLeft: "10px solid #CCFF00", padding: "28px 34px", background: "rgba(204,255,0,.09)", borderRadius: "0 30px 30px 0" }}>
          <div style={{ color: "#CCFF00", fontSize: 34, fontWeight: 900 }}>{copy.moSight}</div>
          <p style={{ fontSize: lang === "zh" ? 32 : 36, lineHeight: 1.35, margin: "18px 0 0" }}>{textOf(item.moSight, lang)}</p>
        </div>
        <div style={{ zIndex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#00F0FF" }}>{copy.businessTalk}</div>
          <div style={{ fontSize: lang === "zh" ? 28 : 32, lineHeight: 1.35 }}>{textOf(item.businessTalk, lang)}</div>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 14 }}>
            {item.tags.slice(0, 5).map((tag) => <span key={tag} style={{ border: "1px solid rgba(255,255,255,.22)", borderRadius: 999, padding: "12px 18px", fontSize: 26, color: "#A8B3C7" }}>{tag}</span>)}
          </div>
          <div style={{ marginTop: 18, fontSize: 24, color: "#A8B3C7" }}>{copy.notAdvice} · {copy.sourceLinkRequired}</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1920 }
  );
}
