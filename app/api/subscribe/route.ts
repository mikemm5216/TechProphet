import { NextResponse } from "next/server";
import { normalizeLang } from "../../../lib/i18n";

type SubscribePayload = {
  email?: string;
  role?: string;
  lang?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as SubscribePayload;
  const email = payload.email?.trim().toLowerCase();
  const role = payload.role?.trim() || "Unknown";
  const lang = normalizeLang(payload.lang);

  if (!email || !isEmail(email)) {
    return NextResponse.json({ message: lang === "zh" ? "請輸入有效 Email" : "Please enter a valid email" }, { status: 400 });
  }

  const webhookUrl = process.env.SUBSCRIBE_WEBHOOK_URL;
  const record = {
    email,
    role,
    product: "TechProphet",
    createdAt: new Date().toISOString()
  };

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record)
    });

    if (!res.ok) {
      return NextResponse.json({ message: lang === "zh" ? "訂閱暫時失敗，請稍後再試" : "Subscription failed. Please try again later." }, { status: 502 });
    }
  }

  return NextResponse.json({
    message: webhookUrl
      ? (lang === "zh" ? "已加入樣刊名單" : "You are on the sample brief list")
      : (lang === "zh" ? "已收到。樣刊正式寄送前會先保留你的資料。" : "Received. We will keep your email before the sample brief launches."),
    record
  });
}
