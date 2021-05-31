class ItemProductPage {
    get itemProductBtn () {return $('//div[@class="inventory_details_price"]/following-sibling::button')}
    get itemProductPrice () {return $('//div[@class="inventory_details_price"]')}
    get itemProductTitle () {return $('//div[contains(@class,"inventory_details_name")]')}
    get backToBtn () {return $('#back-to-products')}
    get twitterLink () {return $('//li[@class="social_twitter"]/a')}
    get facebookLink () {return $('//li[@class="social_facebook"]/a')}
    get linkedinLink () {return $('//li[@class="social_linkedin"]/a')}
}

module.exports = new ItemProductPage();
