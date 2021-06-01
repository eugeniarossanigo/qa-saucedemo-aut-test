const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkout-one-page');
const CheckoutTwoPage = require('../pageobjects/checkout-two.page');

describe('Checkout two page test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Text price and item test', () => {
        it('Item exist in checkout', () => {
            InventoryPage.addOrRemoveProduct(0);
            InventoryPage.addOrRemoveProduct(2);
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');    
            expect(CheckoutTwoPage.itemLabel).toExist();
            browser.pause(2000);
        });
        it('Add product 1 + product 3 to be 45,98', () => {    
            expect(CheckoutTwoPage.subtotalTxt).toHaveTextContaining('45.98');
            browser.pause(2000);
        });
    });
    describe('Buttons cancel and finish test', () => {
        it('Click cancel button back to inventory page', () => {
            CheckoutTwoPage.cancelTwoBtn.click()
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
        it('Click finish button to redirects to final page', () => {
            browser.back();
            CheckoutTwoPage.finishBtn.click()
            expect(browser).toHaveUrlContaining('checkout-complete.html');
            browser.pause(2000);
        });
    });
})
