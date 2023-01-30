function Send(messageParams, emailParams, mock = false) {
  const { htmlTemplate } = emailParams;
  const htmlMessage = getHtmlMessage(messageParams, htmlTemplate);
  const emailBody = {
    to: emailParams.destination,
    bcc: emailParams.bcc,
    subject: emailParams.subjectLine,
    htmlBody: htmlMessage,
    name: emailParams.source,
    replyTo: emailParams.origin,
  };

  if (mock) {
    console.log("Done nothing...");
    console.log({ emailBody });
    return true;
  }

  try {
    if (emailParams?.card) {
      MailApp.sendEmail({
        ...emailBody,
        inlineImages: {
          myLogo: emailParams.card,
        },
      });
    } else {
      MailApp.sendEmail(emailBody);
      return true;
    }
  } catch {
    console.log(`Error while trying to send email.`);
    return false;
  }
}
