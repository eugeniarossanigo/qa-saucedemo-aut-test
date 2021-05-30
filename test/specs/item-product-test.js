const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ItemProductPage = require('../pageobjects/item-product.page');

describe('Item product test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Product and cart tests', () => {
        it('Click add product button and shows Remove', () => {
            InventoryPage.productTitle.click();
            browser.pause(2000);
            ItemProductPage.itemProductBtn.click();
            expect(ItemProductPage.itemProductBtn).toHaveText('REMOVE');
            browser.pause(2000);
        });
        it('Click add product button and shows Add', () => {
            ItemProductPage.itemProductBtn.click();
            expect(ItemProductPage.itemProductBtn).toHaveText('ADD TO CART');
            browser.pause(2000);
        });
        it('Product added shows cart displayed', () => {
            ItemProductPage.itemProductBtn.click();
            expect(InventoryPage.badgeLink).toHaveText('1');
            browser.pause(2000);
        });
    });
    describe('Button back to products test', () => {
        it('Click back to products page backs to inventory page', () => {
            ItemProductPage.backToBtn.click();
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
    });
})
