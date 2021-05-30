class CheckoutTwoPage{
    get cancelTwoBtn () {return $('//div[@class="cart_footer"]/button')}
    get finishBtn () {return $('#finish')}
}

module.exports = new CheckoutTwoPage();
