import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, organisation, subject, agreed, websiteUrl } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    await notifyNewUserRegistration({
      organizationName: organisation,
      userName: name,
      workEmail: email,
      message,
      subject,
      agreed,
      websiteUrl,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function notifyNewUserRegistration({
  organizationName,
  userName,
  workEmail,
  message,
  subject,
  agreed,
  websiteUrl,
}: {
  organizationName: string;
  userName: string;
  workEmail: string;
  message: string;
  subject: string;
  agreed: boolean;
  websiteUrl: string;
}) {
  const transporter = createTransporter();

  const adminEmail = process.env.ADMIN_EMAIL;
  const senderEmail = process.env.SMTP_USER;
  if (!adminEmail) throw new Error("ADMIN_EMAIL not configured");

  // admin message
  await transporter.sendMail({
    from: `"PBJT Contact Form" <${senderEmail}>`,
    to: adminEmail,
    subject: `New User Registered`,
    html: `
    <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:40px">
      <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px">
  
        <h2 style="margin-top:0;color:#222">New User Registration</h2>
        <p>A new user has reached out through the contact form.</p>
  
        <table style="width:100%;border-collapse:collapse;margin-top:20px">
          <tr>
            <td style="padding:8px;font-weight:bold">Organization</td>
            <td style="padding:8px">${organizationName}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold">Name</td>
            <td style="padding:8px">${userName}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold">Email</td>
            <td style="padding:8px">${workEmail}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold">Subject</td>
            <td style="padding:8px">${subject}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold">Message</td>
            <td style="padding:8px">${message}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold">Agreed</td>
            <td style="padding:8px">${agreed}</td>
          </tr>
        </table>
  
        <p style="margin-top:30px;font-size:14px;color:#666">
        PBJT System Notification
        </p>
  
      </div>
    </div>
    `,
  });

  // new user message
  await transporter.sendMail({
    from: `"PBJT Contact Form" <${senderEmail}>`,
    to: workEmail,
    subject: `Thank you for reaching out to PBJT Site!`,
    html: `
    <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:40px;">
  <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:8px;">

    <h2 style="margin-top:0; color:#222;">
      Thank You for Reaching Out to PBJT Site!
    </h2>

    <p>Hello <strong>${userName}</strong>,</p>

    <p>
      Thank you for contacting us. We have successfully received your message and
      appreciate your interest in the PBJT Site.
    </p>

    <div style="background:#f2f4f8; padding:15px; border-radius:6px; margin-top:20px;">
      <p style="margin:5px;"><strong>Organization:</strong> ${organizationName}</p>
      <p style="margin:5px;"><strong>Email:</strong> ${workEmail}</p>
    </div>

    <p style="margin-top:25px;">
      Our team will review your inquiry and get back to you as soon as possible.
    </p>

    <div style="margin-top:30px;">
      <a
        href="${websiteUrl}"
        target="_blank"
        rel="noopener noreferrer"
        style="background:#ba151d; color:white; padding:12px 20px; text-decoration:none; border-radius:6px; display:inline-block;"
      >
        Visit PBJT Site
      </a>
    </div>

    <p style="margin-top:30px; font-size:13px; color:#777;">
      If you have any additional questions, please feel free to reply to this email.
    </p>

    <p style="font-size:14px; margin-top:20px;">
      Regards,<br>
      <strong>PBJT Team</strong>
    </p>

  </div>
</div>
    `,
  });
}
