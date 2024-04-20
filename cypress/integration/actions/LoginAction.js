import LoginPage from '../pages/LoginPage.js'


class LoginAction {

    static login(username, password) {

        LoginPage.getUsernameInput().type(username);
        LoginPage.getPasswordInput().type(password);
        LoginPage.getLoginButton().click();

    }

    static forgotPasswordFunc() {
        //etc
    }

}

export default LoginAction;