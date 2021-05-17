const Page = require('./page');

class LoginPage extends Page {
    get inputUser () {return $('#user-name')}
    get inputPass () {return $('[id="password"]')}
    get btnLogin () {return $('#login-button')}
    get msgError () {return $('.error-message-container')}
    //get prodTitle () {return $('//span[@class="title"]')}
    //get anchorRegister () {return $('p > a')}

    register (user, password) {
        this.inputUser.setValue(user);
        this.inputPass.setValue(password);
        this.btnLogin.click();
    }

    // setPass (pass){
    //     this.inputPass.click();
    //     this.inputPass.setValue(pass);
    //     this.inputPass.keys('Tab');
    // }
    
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
