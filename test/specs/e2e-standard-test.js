const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkout-one-page');
const CheckoutTwoPage = require('../pageobjects/checkout-two.page');
const CheckoutCompletePage = require('../pageobjects/checkout-complete.page');

describe('Checkout complete page test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.addOrRemoveProduct(0);
        browser.pause(2000);
        InventoryPage.addOrRemoveProduct(1);
        browser.pause(2000);
        InventoryPage.addOrRemoveProduct(2);
        browser.pause(2000);
        InventoryPage.cartLink.click();
        browser.pause(2000);
        CartPage.checkoutBtn.click();
        browser.pause(2000);
        CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
        browser.pause(2000);
        CheckoutTwoPage.finishBtn.click();
        browser.pause(2000);
    });
    describe('Button back home test', () => {
        it('Click back home button backs to inventory page', () => {
            expect(CheckoutCompletePage.headerTxt).toHaveText('THANK YOU FOR YOUR ORDER');
            browser.pause(2000);
        });
    });
})
