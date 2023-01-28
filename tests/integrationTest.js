function integrationTest() {
  const fileName = "TestTemplate";
  const messageParams = {
    paymentId: "pay_1234",
    email: "daniel.collier@gmail.com",
    firstName: "Daniel",
    consultationDescription: "Consulta Girassol",
    consultationValue: 200,
    dueDate: GasUtils.FormatDate(GasUtils.StringDateToDate("2023-01-12", 2)),
    barCode: "0000131313",
    locationPhone: "(48) 99966-5544",
  };
  const emailParams = {
    source: "Equipe",
    origin: "consulta@equipe.com.br",
    destination: messageParams.email,
    subjectLine: `Orientações de pagamento # ${messageParams.paymentId.replace(/[\D]*/gim, "")}`,
    htmlTemplate: HtmlService.createTemplateFromFile(fileName).evaluate().getContent(),
  };

  Send(messageParams, emailParams);
}
