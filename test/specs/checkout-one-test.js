const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkout-one-page');

describe('Checkout one page test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Button cancel test', () => {
        it('Click cancel back to product page', () => {
            InventoryPage.addOrRemoveProduct(0);
            InventoryPageutBtn.addOrRemoveProduct(1);
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckoutOnePage.cancelBtn.click();
            expect(browser).toHaveUrlContaining('cart.html');
            browser.pause(2000);
        });
    });
    describe('Checkout info tests', () => {
        it('Empty inputs, display error msg', () => {
            CartPage.checkoutBtn.click();
            CheckoutOnePage.register();
            expect(CheckoutOnePage.msgCheckoutError).toHaveText('Error: First Name is required');
            browser.pause(2000);
        });
        it('Close error button', () => {
            CheckoutOnePage.btnCheckoutError.click();
            expect(LoginPage.btnCheckoutError).not.toExist();
            browser.pause(2000);
        });
        it('Firstname, empty lastname and code, display error msg', () => {
            CheckoutOnePage.register('Eugenia', '', '');
            expect(CheckoutOnePage.msgCheckoutError).toHaveText('Error: Last Name is required');
            browser.pause(2000);
        });
        it('Firstname, lastname and empty code, display error msg', () => {
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '');
            expect(CheckoutOnePage.msgCheckoutError).toHaveText('Error: Postal Code is required');
            browser.pause(2000);
        });
        it('Firstname, lastname and empty code', () => {
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
            expect(browser).toHaveUrlContaining('checkout-step-two.html');
            browser.pause(2000);
        });
    });
})
