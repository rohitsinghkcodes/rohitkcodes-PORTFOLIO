import nodemailer from "nodemailer";

export const sendMailController = async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using Outlook SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587,
    secure: false, // Set to false because port 587 is being used
    auth: {
      user: process.env.EMAIL_USER, // Your Outlook email address
      pass: process.env.EMAIL_PASS, // Your Outlook email password or app-specific password
    },
    debug: true, // Enable debug output
    logger: true, // Log to console
  });
  const userName = name.replace(/\b\w/g, (char) => char.toUpperCase());
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `${userName} has send you a message from rohitkcodes.`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              table {
                  border-collapse: collapse;
                  width: 100%;
              }
              table, th, td {
                  border: 1px solid #dddddd;
                  text-align: left;
                  padding: 8px;
              }
              th {
                  background-color: #f2f2f2;
              }
          </style>
      </head>
      <body>
          <h4>New message from ${userName}, sent from rohitkcodes portfolio website:</h4>
          <table>
              <tr>
                  <th>Field</th>
                  <th>Details</th>
              </tr>
              <tr>
                  <td><strong>User Name</strong></td>
                  <td>${userName}</td>
              </tr>
              <tr>
                  <td><strong>User Email</strong></td>
                  <td>${email}</td>
              </tr>
              <tr>
                  <td><strong>Message</strong></td>
                  <td>${message}</td>
              </tr>
          </table>
          <p>You have received a new inquiry. Please respond promptly.</p>
      </body>
      </html>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
