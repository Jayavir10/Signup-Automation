describe("Complete Signup Automation", () => {
  it("Successful Signup", () => {
    cy.createInbox().then((inbox) => {
      // 1. Filling Personal Information
      cy.visit("https://authorized-partner.vercel.app/register");
      cy.get("button#remember").click();
      cy.contains("button", "Continue").should("be.enabled").click();

      cy.get("input[name='firstName']").type("Jayavir");
      cy.get("input[name='lastName']").type("Basnet");
      cy.get("input[name='email']").type(inbox.emailAddress);

      const phoneNumber = "98" + Math.floor(Math.random() * 100000000);
      cy.get("input[name='phoneNumber']").type(phoneNumber);
      cy.get("input[name='password']").type("Password@123");
      cy.get("input[name='confirmPassword']").type("Password@123");

      cy.contains("button", "Next").should("be.enabled").click();

      cy.waitForLatestUnreadEmail(inbox.id).then((email) => {
        cy.getOtpFromEmail(email).then((otp) => {
          cy.get("input[autocomplete='one-time-code']").type(otp);
          cy.contains("button", "Verify Code").should("be.enabled").click();
        });
      });

      // 2. Filling Agency Information
      cy.get("input[name='agency_name']").type("JB Agency");
      cy.get("input[name='role_in_agency']").type("CEO");
      cy.get("input[name='agency_email']").type("example@gmail.com");
      cy.get("input[name='agency_website']").type("www.example.com");
      cy.get("input[name='agency_address']").type("Australia, Melbourne");
      cy.get("button[role='combobox']").click();
      cy.contains("div", "United States of America").click();
      cy.contains("div", "United Kingdom").click();
      cy.contains("button", "Next").should("be.enabled").click();

      // 3. Filling Professional Expereince
      cy.contains("label", "Years of Experience", { timeout: 10000 }).should(
        "be.visible",
      );

      cy.get("button[role='combobox']").should("be.visible").click();

      cy.get("[data-radix-popper-content-wrapper]", { timeout: 8000 })
        .contains("2 years")
        .should("be.visible")
        .click();

      cy.get("input[name='number_of_students_recruited_annually']").type(
        "1000",
      );
      cy.get("input[name='focus_area']").type(
        "Undergraduate admissions to UK.",
      );
      cy.get("input[name='success_metrics']").type("90");
      cy.contains("label", "Admission Applications").click();
      cy.contains("button", "Next").should("be.enabled").click();

      // 4. Filling Business Details
      const regNumber = "REG" + Math.floor(Math.random() * 1000000);
      cy.get("input[name='business_registration_number']").type(regNumber);
      cy.get("button[role='combobox']").click();
      cy.contains("div", "United States of America").click();
      cy.contains("div", "United Kingdom").click();
      cy.contains("label", "Universities").click();
      cy.contains("label", "Colleges").click();
      cy.get("input[name='certification_details']").type(
        "ICEF Certified Education Agent",
      );
      cy.get("input[type='file']")
        .first()
        .selectFile("cypress\\fixtures\\Sample.txt", { force: true });
      cy.contains("button", "Submit").should("be.enabled").click();
    });
  });
});
