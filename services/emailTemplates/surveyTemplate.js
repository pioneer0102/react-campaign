const { redirectDomain } = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
      <body>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="background-color: #FF6666; padding: 20px;">
              <h3 style="color: #ffffff;">I'd like to know your input!</h3>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <p>Please answer the following question:</p>
              <p>${survey.body}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" bgcolor="#FF6666" style="border-radius: 3px;">
                    <a href="${redirectDomain}/api/surveys/${survey.id}/yes" target="_blank" style="display: inline-block; padding: 12px 24px; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 3px;">Yes</a>
                  </td>
                  <td width="20"></td>
                  <td align="center" bgcolor="#FF6666" style="border-radius: 3px;">
                    <a href="${redirectDomain}/api/surveys/${survey.id}/no" target="_blank" style="display: inline-block; padding: 12px 24px; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 3px;">No</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};
