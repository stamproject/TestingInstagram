class ProfilePage {
    constructor(page) {
        this.page = page;
        this.settings = '//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']';
        this.logoutButton = '//button[normalize-space()=\'Log Out\']';
        this.settingsAndPrivacy = '//button[normalize-space()=\'Settings and privacy\']';
        this.saved = '//span[normalize-space()=\'Saved\']';
        this.savedPosts = '//div[@class=\'xtsq1uu x1ey2m1c xds687c x17qophe x10l6tqk x13vifvy x2fqole\']';
        this.editProfileButton = '//a[normalize-space()=\'Edit profile\']';
        this.post = '//ul[@class=\'x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x78zum5 xa5j0wu xln7xf2 xk390pu x5yr21d xl56j7k xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3\']';
        this.likeButton = '//div[@class=\'x1ypdohk\']//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']';
    }

    async logOutOfApp() {
        await this.page.click(this.settings);
        await this.page.waitForSelector(this.logoutButton, { state: 'visible', timeout: 30000 });
        await this.page.click(this.logoutButton);
    }

    async openSettingsAndPrivacy() {
        await this.page.click(this.settings);
        await this.page.waitForSelector(this.settingsAndPrivacy, { state: 'visible', timeout: 30000 });
        await this.page.click(this.settingsAndPrivacy);
    }

    async openSaved() {
        await this.page.click(this.saved);
    }

    async editProfile() {
        await this.page.click(this.editProfileButton);
    }
    
    async likePost() {
        await this.page.click(this.likeButton);
        //await this.page.click(this.likeButton);
    }
}

module.exports = ProfilePage;