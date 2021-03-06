const helpers = require("../helpers");

const elements = {
  emailInput: element(by.css("input[type='email']")),
  passwordInput: element(by.css("input[type='password']")),
  signInButton: element(by.css("button[type='submit']"))
};

async function waitUntilReady() {
  await helpers.waitUntilClickable(elements.emailInput);
}

async function logIn(email, password) {
  await waitUntilReady();
  await elements.emailInput.click();
  await elements.emailInput.sendKeys(email);
  await elements.passwordInput.sendKeys(password);
  await elements.signInButton.click();
}

module.exports = {
  waitUntilReady,
  logIn
};
