class CheckoutOnePage{
    get cancelBtn () {return $('#cancel')}
    get continueBtn () {return $('#continue')}
    get inputFirstName () {return $('#first-name')}
    get inputLastName () {return $('#last-name')}
    get inputZipCode () {return $('#postal-code')}
    get msgCheckoutError () {return $('//div[@class="checkout_info"]//h3[@data-test="error"]')}
    get btnCheckoutError () { return $('//div[@class="checkout_info"]//button[@class="error-button"]')}

    register (firstname, lastname, code) {
        this.inputFirstName.setValue(firstname);
        this.inputLastName.setValue(lastname);
        this.inputZipCode.setValue(code);
        this.continueBtn.click();
    }
}

module.exports = new CheckoutOnePage();
