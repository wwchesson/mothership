import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import sgMail from "@sendgrid/mail";

export async function contact(request: HttpRequest, _context: InvocationContext): Promise<HttpResponseInit> {
    const body = await request.json() as { name?: string; email?: string; message?: string };
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
        return { status: 400, body: "Missing fields" };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    await sgMail.send({
        to: process.env.CONTACT_EMAIL!,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: `Contact from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
    });

    return { status: 200, jsonBody: { ok: true } };
};

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: contact
});
