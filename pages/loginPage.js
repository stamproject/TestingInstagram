class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '//*[@id="loginForm"]/div[1]/div[1]/div/label/input';
        this.password = '//*[@id="loginForm"]/div[1]/div[2]/div/label/input';
        this.loginButton = '//*[@id="loginForm"]/div[1]/div[3]/button';
    }

    async logInToApp() {
        await this.page.fill(this.username, 'osmicilma');
        await this.page.fill(this.password, 'NekiPassword123');
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
