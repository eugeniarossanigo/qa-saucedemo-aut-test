class CheckoutTwoPage{
    get cancelTwoBtn () {return $('//div[@class="cart_footer"]/button')}
    get finishBtn () {return $('#finish')}
    get subtotalTxt () {return $('[class="summary_subtotal_label"]')}
    get itemLabel () {return $('//div[@class="cart_item_label"]')}
}

module.exports = new CheckoutTwoPage();
