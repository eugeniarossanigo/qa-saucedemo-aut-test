const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkout-one-page');
const CheckoutTwoPage = require('../pageobjects/checkout-two.page');
const CheckoutCompletePage = require('../pageobjects/checkout-complete.page');

describe('Checkout complete page test', () => {
    beforeAll("Open browser with performance_user", () => {
        LoginPage.open();
        LoginPage.login('performance_glitch_user', 'secret_sauce');
        InventoryPage.addOrRemoveProduct(0);
        browser.setTimeout({'pageLoad': 3000});
        browser.pause(1000);
        InventoryPage.cartLink.click();
        browser.setTimeout({'pageLoad': 3000});
        browser.pause(1000);
        CartPage.checkoutBtn.click();
        browser.setTimeout({'pageLoad': 3000});
        browser.pause(1000);
        CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
        browser.setTimeout({'pageLoad': 3000});
        browser.pause(1000);
        CheckoutTwoPage.finishBtn.click();
        browser.setTimeout({'pageLoad': 3000});
        browser.pause(1000);
    });
    describe('Finish header test', () => {
        it('Show header text Thank You for your order', () => {
            expect(CheckoutCompletePage.headerTxt).toHaveText('THANK YOU FOR YOUR ORDER');
            browser.pause(2000);
        });
    });
})
