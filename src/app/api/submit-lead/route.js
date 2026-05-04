import { google } from "googleapis";
import * as XLSX from "xlsx";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, phone, reason } = await req.json();

  try {
    // 1. Connect to Google Sheets
  const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

    // 2. Append new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, phone, reason, new Date().toLocaleString("en-IN")]],
      },
    });

    // 3. Fetch all rows for Excel
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
    });

    const rows = result.data.values || [];
    const dataWithHeader =
      rows[0]?.[0] === "Name"
        ? rows
        : [["Name", "Phone", "Reason for Visit", "Submitted At"], ...rows];

    // 4. Generate Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dataWithHeader);
    XLSX.utils.book_append_sheet(wb, ws, "Leads");
    const excelBuffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    // 5. Send email with Excel
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Reason:</b> ${reason}</p>
        <p><b>Time:</b> ${new Date().toLocaleString("en-IN")}</p>
        <p>All leads attached as Excel.</p>
      `,
      attachments: [
        {
          filename: "leads.xlsx",
          content: excelBuffer,
          contentType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}