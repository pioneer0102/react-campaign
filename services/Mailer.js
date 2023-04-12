const sgMail = require("@sendgrid/mail");
const { sendGridKey } = require("../config/keys");

sgMail.setApiKey(sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    // super();

    this.subject = subject;
    this.content = content;
    this.recipients = recipients;
  }

  formatAddresses(recipients) {
  return recipients.map(({ email }) => email);
}

  async send() {
    const msg = {
      to: this.formatAddresses(this.recipients),
      from: "michael@pipedreamstudios.net",
      subject: this.subject,
      html: this.content,
      trackingSettings: {
        clickTracking: {
          enable: true
        }
      }
    };

    console.log(msg);

    try {
      const response = await sgMail.send(msg);
      console.log("Email sent:", response);
      return response;
    } catch (error) {
      console.error("Email sending error:", error);
      throw error;
    }
  }

}

module.exports = Mailer;
