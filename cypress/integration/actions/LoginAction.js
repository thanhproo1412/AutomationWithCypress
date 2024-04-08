import LoginPage from '../pages/LoginPage.js'

const loginPage = new LoginPage()

class LoginAction {

    login(username, password) {

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getLoginButton().click();

    }

    forgotPasswordFunc() {
        //etc
    }

}

export default LoginAction;