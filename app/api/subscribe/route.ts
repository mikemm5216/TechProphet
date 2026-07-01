import { NextResponse } from "next/server";

type SubscribePayload = {
  email?: string;
  role?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as SubscribePayload;
  const email = payload.email?.trim().toLowerCase();
  const role = payload.role?.trim() || "Unknown";

  if (!email || !isEmail(email)) {
    return NextResponse.json({ message: "請輸入有效 Email" }, { status: 400 });
  }

  const webhookUrl = process.env.SUBSCRIBE_WEBHOOK_URL;
  const record = {
    email,
    role,
    product: "TechProphet V0.1",
    createdAt: new Date().toISOString()
  };

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record)
    });

    if (!res.ok) {
      return NextResponse.json({ message: "Webhook 寫入失敗，請稍後再試" }, { status: 502 });
    }
  }

  return NextResponse.json({
    message: webhookUrl ? "已加入樣刊名單" : "已收到。尚未設定 webhook，現在是本機測試模式。",
    record
  });
}
