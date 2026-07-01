import { NextResponse } from "next/server";
import { todayBrief } from "@/lib/briefs";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");
  const querySecret = new URL(request.url).searchParams.get("secret");

  if (secret && auth !== `Bearer ${secret}` && querySecret !== secret) return unauthorized();

  const emailWebhookUrl = process.env.EMAIL_WEBHOOK_URL;
  const payload = {
    product: "TechProphet V0.1",
    generatedAt: new Date().toISOString(),
    brief: todayBrief,
    status: "draft-review-required"
  };

  if (emailWebhookUrl) {
    const res = await fetch(emailWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) return NextResponse.json({ message: "Email webhook failed" }, { status: 502 });
  }

  return NextResponse.json({
    message: emailWebhookUrl ? "Daily brief sent to email workflow" : "Daily brief generated in dry-run mode",
    payload
  });
}
