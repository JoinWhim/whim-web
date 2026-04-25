import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    // ------------------------------------------------------------------
    // Wire up your email provider here.
    // Example using Resend (https://resend.com):
    //
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "Whim Contact <noreply@joinwhim.net>",
    //   to: "support@joinwhim.net",
    //   replyTo: email,
    //   subject: `New contact message from ${firstName} ${lastName}`,
    //   text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    // })
    // ------------------------------------------------------------------

    // Log in development so you can see submissions without a provider
    if (process.env.NODE_ENV !== "production") {
      console.log("[Contact form]", { firstName, lastName, email, message })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[Contact API]", err)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
