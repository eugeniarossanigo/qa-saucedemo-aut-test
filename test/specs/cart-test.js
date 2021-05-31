const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');

describe('Cart page test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Product tests', () => {
        it('Click title product redirects to product page', () => {
            InventoryPage.addOrRemoveProduct(0);
            InventoryPage.addOrRemoveProduct(1);
            InventoryPage.cartLink.click();
            InventoryPage.productTitle.click();
            expect(browser).toHaveUrlContaining('inventory-item.html?id=4');
            browser.pause(2000);
        });
        it('Click remove product button and shows Add', () => {
            browser.back();
            InventoryPage.addOrRemoveProduct(0);
            expect(InventoryPage.productBtn[1]).not.toExist();
            browser.pause(2000);
        });
        it('Product added shows cart displayed', () => {
            expect(InventoryPage.badgeLink).toHaveText('1');
            browser.pause(2000);
        });
    });
    describe('Buttons cart page tests', () => {
        it('Click continue shopping button and redirects to inventory page', () => {
            CartPage.continueShopBtn.click();
            expect(browser).toHaveUrlContaining('/inventory.html');
            browser.pause(2000);
        });
        it('Click checkout button and redirects to step one page', () => {
            InventoryPage.cartLink.click();
            CartPage.checkoutBtn.click();
            expect(browser).toHaveUrlContaining('/checkout-step-one.html');
            browser.pause(2000);
        });
    });
})
