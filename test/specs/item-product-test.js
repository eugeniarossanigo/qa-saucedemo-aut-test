const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ItemProductPage = require('../pageobjects/item-product.page');

describe('Item product test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Product and cart tests', () => {
        it('Price is the same in both pages', () => {
            const itemPrice = InventoryPage.productPrice.getText();
            InventoryPage.productTitle.click();
            expect(ItemProductPage.itemProductPrice).toHaveText(itemPrice);
            browser.pause(2000);
        });
        it('Title is the same in both pages', () => {
            browser.back();
            const itemTitle = InventoryPage.productTitle.getText();
            InventoryPage.productTitle.click();
            expect(ItemProductPage.itemProductTitle).toHaveText(itemTitle);
            browser.pause(2000);
        });
        it('Click add product button and shows Remove', () => {
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
    describe('Social media links', () => {
        it('Twitter link redirects to twitter page', () => {
            browser.back();
            ItemProductPage.twitterLink.click();
            browser.pause(2000);
            browser.switchWindow('https://twitter.com/saucelabs');
            browser.pause(2000);
            expect(browser).toHaveUrl('https://twitter.com/saucelabs');
            browser.pause(3000);
        });
        it('Facebook link redirects to facebook page', () => {
            browser.switchWindow('https://www.saucedemo.com/inventory-item.html?id=4');
            browser.pause(3000);
            ItemProductPage.facebookLink.click();
            browser.pause(2000);
            browser.switchWindow('https://www.facebook.com/saucelabs');
            browser.pause(2000);
            expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
            browser.pause(3000);
        });
        it('Linkedin link redirects to linkedin page', () => {
            browser.switchWindow('https://www.saucedemo.com/inventory-item.html?id=4');
            browser.pause(3000);
            expect(ItemProductPage.linkedinLink).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
            browser.pause(2000);
        });
    });
})
