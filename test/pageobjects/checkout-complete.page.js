class CheckoutCompletePage{
    get BackHomeBtn () {return $('#back-to-products')}
    get headerTxt () {return $('.complete-header')}
    get secondHeaderTxt () {return $('//span[@class="title"]')}
}

module.exports = new CheckoutCompletePage();
