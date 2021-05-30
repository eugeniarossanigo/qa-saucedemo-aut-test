const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Inventory page test', () => {
    beforeAll("Open browser with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Inventory hamburguer menu', () => {
        it('Menu link works', () => {
            InventoryPage.burgerMenu.click();
            expect(InventoryPage.sidebarAllItems).toBeEnabled();
            browser.pause(2000);
        });
        it('Cross link works', () => {
            InventoryPage.crossMenu.click();
            expect(InventoryPage.sidebarAllItems).not.toBeClickable();
            browser.pause(2000);
        });
        it('Sidebar Allitems exists', () => {
            InventoryPage.productTitle.click();
            InventoryPage.menuList(InventoryPage.sidebarAllItems);
            expect(browser).toHaveUrlContaining('inventory.html');
            browser.pause(2000);
        });
        it('Sidebar About redirects to another page', () => {
            InventoryPage.menuList(InventoryPage.sidebarAbout);
            expect(browser).toHaveUrl('https://saucelabs.com/');
            browser.pause(2000);
        });
        it('Sidebar Reset button reset badge', () => {
            browser.back();
            InventoryPage.addOrRemoveProduct(0);
            InventoryPage.menuList(InventoryPage.sidebarReset);
            expect(InventoryPage.BadgeLink).not.toBeDisplayed();
            InventoryPage.crossMenu.click();
            browser.pause(2000);
        });
        it('Sidear Logout finalize session', () => {
            InventoryPage.menuList(InventoryPage.sidebarLogout);
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
            browser.pause(2000);
        });
    });
    describe('Sort tests', () => {
        it('Click sort ZA shows correct item first', () => {
            LoginPage.login('standard_user', 'secret_sauce');
            InventoryPage.sortList(InventoryPage.sortZA);
            expect(InventoryPage.productTitle).toHaveText('Test.allTheThings() T-Shirt (Red)');
            browser.pause(2000);
        });
        it('Click sort AZ shows correct item first', () => {
            InventoryPage.sortList(InventoryPage.sortAZ);
            expect(InventoryPage.productTitle).toHaveText('Sauce Labs Backpack');
            browser.pause(2000);
        });
        it('Click sort low to high shows correct item first', () => {
            InventoryPage.sortList(InventoryPage.sortLowHigh);
            expect(InventoryPage.productTitle).toHaveText('Sauce Labs Onesie');
            browser.pause(2000);
        });
        it('Click sort high to low shows correct item first', () => {
            InventoryPage.sortList(InventoryPage.sortHighLow);
            expect(InventoryPage.productTitle).toHaveText('Sauce Labs Fleece Jacket');
            browser.pause(2000);
        });
    });
    describe('Product and cart tests', () => {
        it('Click add product button and shows Remove', () => {
            InventoryPage.sortList(InventoryPage.sortAZ);
            InventoryPage.addOrRemoveProduct(0);
            expect(InventoryPage.productBtn[0]).toHaveText('REMOVE');
            browser.pause(2000);
        });
        it('Click remove product button and shows Add', () => {
            InventoryPage.addOrRemoveProduct(0);
            expect(InventoryPage.productBtn[0]).toHaveText('ADD TO CART');
            browser.pause(2000);
        });
        it('Product added shows cart displayed', () => {
            InventoryPage.addOrRemoveProduct(0);
            expect(InventoryPage.badgeLink).toBeDisplayed();
            browser.pause(2000);
        });
        it('Click image product redirects to product page', () => {
            InventoryPage.productImg.click();
            expect(browser).toHaveUrlContaining('inventory-item.html?id=4');
            browser.pause(2000);
        });
        it('Click title product redirects to produt page', () => {
            browser.back();
            browser.pause(2000);
            InventoryPage.productTitle.click();
            expect(browser).toHaveUrlContaining('inventory-item.html?id=4');
            browser.pause(2000);
        });
        it('Click cart link redirects to cart page', () => {
            browser.back();
            browser.pause(2000);
            InventoryPage.cartLink.click();
            expect(browser).toHaveUrlContaining('/cart.html');
            browser.pause(2000);
        });
    });
    describe('Social media links', () => {
        it('Twitter link redirects to twitter page', () => {
            browser.back();
            InventoryPage.twitterLink.click();
            browser.pause(2000);
            browser.switchWindow('https://twitter.com/saucelabs');
            browser.pause(2000);
            expect(browser).toHaveUrl('https://twitter.com/saucelabs');
            browser.pause(2000);
        });
        it('Facebook link redirects to facebook page', () => {
            browser.switchWindow('https://www.saucedemo.com/inventory.html');
            InventoryPage.facebookLink.click();
            browser.pause(2000);
            browser.switchWindow('https://www.facebook.com/saucelabs');
            browser.pause(2000);
            expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
            browser.pause(2000);
        });
        it('Linkedin link redirects to linkedin page', () => {
            browser.switchWindow('https://www.saucedemo.com/inventory.html');
            expect(InventoryPage.linkedinLink).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
            browser.pause(2000);
        });
    });
    describe('Problem user img test', () => {
        it('Shows different image', () => {
            InventoryPage.menuList(InventoryPage.sidebarLogout);
            LoginPage.login('problem_user', 'secret_sauce');
            expect(InventoryPage.productImg.getAttribute('src')).toBe('/static/media/sl-404.168b1cce.jpg');
            browser.pause(2000);
        });
    });
})

// AfterEach("Open browser with standard_user", () => {
//     browser.reloadSession();
// });

// describe('Sort tests', () => {
    //     it('', () => {
    //         InventoryPage;
    //         expect(browser);
    //     });
    // });