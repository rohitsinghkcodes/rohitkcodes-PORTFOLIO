import { Resend } from "resend";

export const sendMailController = async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message } = req.body;
  const userName = name.replace(/\b\w/g, (char) => char.toUpperCase());

  try {
    const response = await resend.emails.send({
      from: `${process.env.EMAIL_FROM}`, 
      to: `${process.env.EMAIL_TO}`, 
      subject: `${userName} has sent you a message from rohitkcodes.`,
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

    console.log("mail-response---", response.data);

    if (response.data.id) {
      res
        .status(200)
        .send({ success: true, message: "Email sent successfully" });
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
