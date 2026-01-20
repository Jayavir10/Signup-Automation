import MailSlurp from "mailslurp-client";

Cypress.Commands.add("createInbox", () => {
  const apiKey = Cypress.env("API_KEY");
  const mailslurp = new MailSlurp({ apiKey });
  return cy.wrap(mailslurp.createInbox());
});

Cypress.Commands.add("waitForLatestUnreadEmail", (Id) => {
  const apiKey = Cypress.env("API_KEY");
  const mailslurp = new MailSlurp({ apiKey });
  return cy.wrap(
    mailslurp.waitController.waitForLatestEmail({
      inboxId: Id,
      unreadOnly: true,
      timeout: 30_000,
    }),
    { timeout: 30000 },
  );
});

Cypress.Commands.add("getOtpFromEmail", (email) => {
  const match = email.body.match(/<p[^>]*>\s*(\d{6})\s*<\/p>/);
  if (!match) {
    throw new Error("OTP not found in email body");
  }
  const otp = match[1];
  return otp;
});
