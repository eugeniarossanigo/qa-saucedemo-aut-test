const LoginPage = require('../pageobjects/login.page');

describe('Login page test', () => {
    beforeAll('Open browser', () => {
        LoginPage.open();
    });
    describe('Login with empty inputs', () => {
        it('Empty user and password, display error msg', () => {
            LoginPage.login();
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
        });
        it('Empty user and any password, display error msg', () => {
            LoginPage.login('', 'sauce2021');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
        });
        it('Close error button', () => {
            LoginPage.btnError.click();
            expect(LoginPage.btnError).not.toExist();
            browser.pause(2000);
        });
    });
    describe('Login with invalid user and pass', () => {
        beforeAll('Refresh browser', () => {
            browser.refresh();
        });
        it('Wrong user and pass, display error msg', () => {
            LoginPage.login('swaglabs', 'sauce2021');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
        });
    });
    describe('Login with locked_out_user', () => {
        beforeAll('Refresh browser', () => {
            browser.refresh();
        });
        it('Blocked user, display error msg', () => {
            LoginPage.login('locked_out_user', 'secret_sauce');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
            browser.pause(2000);
        });
    });
    describe('Login with standard_user', () => {
        beforeAll('Refresh browser', () => {
            browser.refresh();
        });
        it('Standard user and wrong pass display error msg', () => {
            LoginPage.login('standard_user', 'wrong_pass');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
        });
        it('Standard user, correct login to inventory page', () => {
            LoginPage.login('standard_user', 'secret_sauce');
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
    });
    describe('Login with problem_user', () => {
        beforeAll('Back browser', () => {
            browser.back();
        });
        it('Problem user, correct login to inventory page', () => {
            LoginPage.login('problem_user', 'secret_sauce');
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
    });
    describe('Login with performance_glitch_user', () => {
        beforeAll('Back browser', () => {
            browser.back();
        });
        it('Performance user, correct login to inventory page after a few seconds', () => {
            LoginPage.login('performance_glitch_user', 'secret_sauce');
            browser.waitUntil(
                () => $('.shopping_cart_link').isClickable(),
                {timeout: 7000}
            );
            expect(browser).toHaveUrlContaining('inventory.html')
        });
    });
})
