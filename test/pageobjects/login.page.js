class LoginPage {
    get inputUser () {return $('#user-name')}
    get inputPass () {return $('[id="password"]')}
    get btnLogin () {return $('#login-button')}
    get msgError () {return $('.error-message-container')}
    get btnError () { return $('[class="error-button"]')}
    
    login (user, password) {
        this.inputUser.setValue(user);
        this.inputPass.setValue(password);
        this.btnLogin.click();
    }
    open () {
        return browser.url('https://www.saucedemo.com');
    }
}

module.exports = new LoginPage();
