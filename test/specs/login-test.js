const LoginPage = require('../pageobjects/login.page');

describe('Login page test', () => {
    beforeAll('Open browser', () => {
        LoginPage.open();
    });

    describe('Login with empty inputs', () => {
        it('Empty user and password, display error msg', () => {
            LoginPage.register();
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
        });
        it('Empty user and valid or invalid password, display error msg', () => {
            LoginPage.register('', 'sauce2021');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
        });
    });

    describe('Login with invalid user and pass', () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it('Wrong user and pass, display error msg', () => {
            LoginPage.register('swaglabs', 'sauce2021');
            expect(LoginPage.msgError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
        });
    });
    
    describe('Login with standard_user', () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });

        it('Correct user and pass, login and go inventory page', () => {
            LoginPage.register('standard_user', 'secret_sauce');
            expect(browser).toHaveUrlContaining('inventory.html')
            browser.pause(2000);
        });
    });

    describe('Login with performance_glitch_user', () => {
        beforeAll("Back browser", () => {
            browser.back();
        });

        it('Correct user and pass, login and go inventory page after a few seconds', () => {
            LoginPage.register('performance_glitch_user', 'secret_sauce');
            // browser.waitUntil(
            //     () => $('//span[@class="title"]').getText() === 'Products',
            //     {
            //         timeout: 5000,
            //         //timeoutMsg: 'expected text to be different after 5s'
            //     }
            // );
            //browser.setTimeout({'pageLoad': 2000})
            expect(browser).toHaveUrlContaining('inventory.html')
            //browser.pause(2000);
        });
    });

    // describe('Section register url', () => {
    //     it('redirect to register url works', () => {
    //         LoginPage.anchorRegister.click();
    //         browser.pause(2000);
    //         expect(browser).toHaveUrl('https://pikymga.github.io/qa-forms-automation-test/register.html')
    //         browser.pause(2000);
    //     });
    // });

})
    