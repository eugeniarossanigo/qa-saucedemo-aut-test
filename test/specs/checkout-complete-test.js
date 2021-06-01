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
    });
    describe('Secondary header test', () => {
        it('Show secondary header text Checkout complete', () => {
            InventoryPage.addOrRemoveProduct(0);
            InventoryPage.addOrRemoveProduct(1);
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
            CheckoutTwoPage.finishBtn.click();
            expect(CheckoutCompletePage.secondHeaderTxt).toHaveText('CHECKOUT: COMPLETE!');
            browser.pause(2000);
        });
    });
    describe('Button back home test', () => {
        it('Click back home button backs to inventory page', () => {
            CheckoutCompletePage.BackHomeBtn.click();
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
        it('Click back browser must not shows any item', () => {
            InventoryPage.addOrRemoveProduct(4);
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
            CheckoutTwoPage.finishBtn.click();
            browser.back();
            expect(CheckoutTwoPage.itemLabel).not.toExist();;
            browser.pause(2000);
        });
    });
})
