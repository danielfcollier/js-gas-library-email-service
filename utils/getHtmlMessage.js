function getHtmlMessage(messageParams, htmlTemplate) {
  let htmlMessage = htmlTemplate;

  if (messageParams) {
    Object.keys(messageParams).forEach((key) => {
      htmlMessage = htmlMessage.replaceAll(`{{${key}}}`, messageParams[key]);
    });
  }

  return htmlMessage;
}
