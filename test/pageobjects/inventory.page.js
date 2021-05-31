const Page = require('./page');

class InventoryPage extends Page {
    get burgerMenu () {return $('#react-burger-menu-btn')}
    get sidebarAllItems () {return $('#inventory_sidebar_link')}
    get sidebarAbout () {return $('#about_sidebar_link')}
    get sidebarLogout () {return $('#logout_sidebar_link')}
    get sidebarReset () {return $('#reset_sidebar_link')}
    get crossMenu () {return $('#react-burger-cross-btn')}
    get sortBtn () {return $('.product_sort_container')}
    get sortAZ () {return $('[value="az"]')}
    get sortZA () {return $('[value="za"]')}
    get sortLowHigh () {return $('[value="lohi"]')}
    get sortHighLow () {return $('[value="hilo"]')}
    get cartLink () {return $('.shopping_cart_link')}
    get badgeLink () {return $('.shopping_cart_badge')}
    get productBtn () {return $$('//div[@class="inventory_item_price"]/following-sibling::button')}
    get productImg () {return $('//img[@class="inventory_item_img"]')}
    get productTitle () {return $('//div[@class="inventory_item_name"]')}
    get productPrice () {return $('//div[@class="inventory_item_price"]')}
    
    menuList (path){
        this.burgerMenu.click();
        path.click();
    }

    sortList (path){
        this.sortBtn.click();
        path.click();
    }

    addOrRemoveProduct (n){
        this.productBtn[n].click();
    }

    addOrRemoveAllProducts (){
        for (let i = 0; i < 6; i++) {
            this.productBtn[i].click();
        }
    }
}

module.exports = new InventoryPage();
