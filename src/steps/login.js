const { Given, When, Then} = require('cucumber');

Given('I am on the login page', function () {
		browser.url('https://www.ceek.com/login/');
});

When(/^I type ([^"]*) in the email field and ([^"]*) in the password field and I press the "LOG IN" button$/, function (login, password) {
		browser.$('//*[@id="si-email"]').setValue(login)
		browser.pause(2000)
		browser.$('//*[@id="si-password"]').setValue(password)
		browser.pause(2000)
		browser.$('//*[@id="login"]').click()
});

Then('I authorised I see a home page', function () {
	var n = browser.$('//*[@id="fhd"]/header/div[2]/div[4]/a/img').getAttribute('title');
	expect(n).toEqual('Avatar')
});