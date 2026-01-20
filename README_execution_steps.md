# How to run the script

## Prerequisites
Make sure to install followings in your device:

1. Node.js  
2. IDE (e.g: VS Code)  
3. git  
4. Web Browser (Chrome preferable)  


## Setup

**Step 1:** Clone the repository  

**Step 2:** Install dependency using **npm install**  

**Step 3:** Rename the file **.env.template** to **.env**  

**Step 4:** Go to https://app.mailslurp.com/sign-up and create an account  

**Step 5:** Copy the API key from the Mailslurp dashboard and paste it into the .env file  

**Step 6:** Open terminal and run the test using either 
- **npx cypress run** (to run the test in the terminal with video recording)  
- **npx cypress open** (to run the test in interactive mode without video recording)  

---

# Environment

- **Language:** JavaScript  
- **Test Framework:** Cypress (E2E Testing)  
- **Browser:** Google Chrome  
- **Operating System:** Windows, macOS, Linux  

---

# Additional Information

1. The test uses predefined static data in some inputs and uses randomly generated data (such as Phone Numbers, Business Registration Number) to avoid dupication issue.  
2. The test generates a new temporary email address for each executed test and OTP verification is also handled using the Mailslurp which is a test inbox service platform.  
3. A predefined .txt file is used as dummy file upload during the test.  
4. No real accounts or personal information are used during the test.
