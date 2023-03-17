# [Library for Google Apps Script] Email Service

## Using the Library

There are two ways to import the library to your project:

- Set in your script project dashboard
- Add the configuration into your `appsscript.json`

1. Script Id:

```
1asW_sy5hfNXzwxJzalawWZ_y8Uk-ogXsOEa93tvX2xP4W3INnvys92GZ
```

2. Add the latest version: for example, `2`
3. Use the identifier `EmailService`

These actions will update your `appsscript.json`.

Or, you can update it directly adding to the `dependencies` object:

```json
"dependencies": {
    "libraries": [
      {
        "userSymbol": "EmailService",
        "version": "2",
        "libraryId": "1asW_sy5hfNXzwxJzalawWZ_y8Uk-ogXsOEa93tvX2xP4W3INnvys92GZ"
      }
    ]
}
```

> The script runs in the timezone `Etc/GMT`.

## EmailService

Methods:

- `Send(messageParams, emailParams, mock = false)`

Where:

- `messageParams`: a key-value parameter that will be replaced in the email HTML template
- `emailParams`: defines the components of an email, the parameter `card` is optional
- `mock`: not send email with `true`, and send email with `false` (default value)

Example:

```javascript
const fileName = "TestTemplate";

const messageParams = {
  paymentId: "pay_1234",
  email: "daniel.collier@gmail.com",
  firstName: "Daniel",
  consultationDescription: "Consulta",
  consultationValue: 200,
  dueDate: GasUtils.FormatDate(GasUtils.StringDateToDate("2023-01-12", 2)),
  barCode: "0000131313",
  locationPhone: "(48) 99966-5544",
};
const emailParams = {
  source: "Equipe",
  origin: "consulta@equipe.com.br",
  bcc:  "consulta@equipe.com.br",
  destination: messageParams.email,
  subjectLine: `Orientações de pagamento # ${messageParams.paymentId.replace(/[\D]*/gim, "")}`,
  card: getImageCardBlob(),
  htmlTemplate: HtmlService.createTemplateFromFile(fileName).evaluate().getContent(),
};

EmailService.Send(messageParams, emailParams);
```

```javascript
function getImageCardBlob() {
  const imageCardUrl = "cardUrl";
  const imageCardBlob = UrlFetchApp.fetch(imageCardUrl).getBlob().setName("card-name");

  return imageCardBlob;
}
```
