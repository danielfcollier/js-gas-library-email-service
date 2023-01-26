function GetHtmlTemplate(fileName) {
  const htmlTemplate = HtmlService.createTemplateFromFile(fileName).evaluate().getContent();

  return htmlTemplate;
}
