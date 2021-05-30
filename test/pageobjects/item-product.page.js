class ItemProductPage {
    get itemProductBtn () {return $('//div[@class="inventory_details_price"]/following-sibling::button')}
    get backToBtn () { return $('#back-to-products')}
}

module.exports = new ItemProductPage();
