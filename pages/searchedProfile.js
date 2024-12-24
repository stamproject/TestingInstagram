class SearchedProfile {
    constructor(page) {
        this.page = page;
        this.post = '//ul[@class=\'x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x78zum5 xa5j0wu xln7xf2 xk390pu x5yr21d xl56j7k xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3\']';
        this.comment = '//textarea[@placeholder=\'Add a comment…\']';
        this.postButton = '//div[contains(text(),\'Post\')]';
        this.likeCommentButton = '//body/div[@class=\'x14dbnvc x67yw2k x3hiddl x1xb1xrg xz3gdfk xbi9o00 x1xkblxv x4666fc x1n2onr6 xzkaem6\']/div[@class=\'x9f619 x1n2onr6 x1ja2u2z\']/div[@class=\'x78zum5 xdt5ytf xippug5 xg6iff7 x1n2onr6\']/div[@class=\'x1uvtmcs x4k7w5x x1h91t0o x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1n2onr6 x1qrby5j x1jfb8zj\']/div[@class=\'x1qjc9v5 x9f619 x78zum5 xdt5ytf x1iyjqo2 xl56j7k\']/div[@class=\'x1cy8zhl x9f619 x78zum5 xl56j7k x2lwn1j xeuugli x47corl\']/div[@role=\'dialog\']/div[@class=\'xs83m0k x1iy3rx x1n2onr6 xjbqb8w xdj266r x11i5rnm xat24cr x1mh8g0r xh8yej3 xw8ag78 x1v7wizp xc7qz2s xa3vuyk\']/div[@role=\'dialog\']/div/article[@role=\'presentation\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x1qjc9v5 x1oa3qoh xl56j7k\']/div[@class=\'x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdt5ytf x1iyjqo2 x5wqa0o xln7xf2 xk390pu xdj266r x11i5rnm xat24cr x1mh8g0r x65f84u x1vq45kp xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1iyjqo2 x2lwn1j xeuugli xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1\']/div[@role=\'presentation\']/div[@class=\'x78zum5 xdt5ytf x1q2y9iw x1n2onr6 xh8yej3 x9f619 x1iyjqo2 x18l3tf1 x26u7qi xy80clv xexx8yu x4uap5 x18d9i69 xkhd6sd\']/div[@class=\'x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j x1odjw0f x1n2onr6 x9ek82g x6ikm8r xdj266r x11i5rnm x4ii5y1 x1mh8g0r xexx8yu x1pi30zi x18d9i69 x1swvt13\']/ul[@class=\'_a9z6 _a9za\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1\']/div[4]/ul[1]/div[1]/li[1]/div[1]/span[1]/div[1]/div[1]/div[1]//*[name()=\'svg\']';
        this.likeButton = '//span[@class=\'x1rg5ohu xp7jhwk\']//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']//*[name()=\'path\' and contains(@d,\'M16.792 3.\')]';
        this.sendPostButton = '//div[@class=\'_abm0 _abm1\']//*[name()=\'svg\']';
        this.searchField = '//input[@placeholder=\'Search...\']';
        this.recieverProfile = '//div[@class=\'x9f619 x1ja2u2z x78zum5 x2lah0s x1n2onr6 x1qughib x6s0dn4 xozqiw3 x1q0g3np\']';
        this.sendButton = '//div[contains(text(),\'Send\')]';
        this.following = '//a[@href=\'/zuck/following/\']';
        this.followers = '//span[contains(text(),\'15.3M\')]';
        this.followButton = '//div[@class=\'_ap3a _aaco _aacw _aad6 _aade\']';
    }

    async openFollowing() {
        await this.page.click(this.following);
    }

    async openFollowers() {
        await this.page.click(this.followers);
    }

    async commentPost() {
        await this.page.click(this.post);
        await this.page.fill(this.comment, 'amazing');
        await this.page.click(this.postButton);
    }

    async likeComment() {
        await this.page.click(this.post);
        await this.page.click(this.likeCommentButton);
    }

    async sendPost() {
        await this.page.click(this.post);
        await this.page.click(this.sendPostButton);
        await this.page.fill(this.searchField, 'sumejaxc');
        await this.page.click(this.sendButton);
    }

    async followUser() {
        await this.page.click(this.followButton);
    }
}

module.exports = SearchedProfile;