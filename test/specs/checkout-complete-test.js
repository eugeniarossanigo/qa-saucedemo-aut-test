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
    describe('Button back home test', () => {
        it('Click back home button backs to inventory page', () => {
            InventoryPage.addOrRemoveProduct(0);
            InventoryPage.addOrRemoveProduct(1);
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckoutOnePage.register('Eugenia', 'Rossanigo', '2000');
            CheckoutTwoPage.finishBtn.click()
            CheckoutCompletePage.BackHomeBtn.click()
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
    });
})
