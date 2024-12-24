class HomePage {
    constructor(page) {
        this.page = page;
        this.profile = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[8]/div[1]/span[1]/div[1]/a[1]/div[1]';
        this.explore = '//a[@href=\'/explore/\']//div[@class=\'x9f619 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c\']';
        this.more = '//body/div[@id=\'mount_0_0_UE\']/div/div/div[@class=\'html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x14dbnvc x67yw2k x3hiddl x1xb1xrg xz3gdfk xbi9o00 x1xkblxv x4666fc x78zum5 xdt5ytf x1iyjqo2\']/div[@class=\'x9f619 x1n2onr6 x1ja2u2z\']/div[@class=\'x78zum5 xdt5ytf x1n2onr6 x1ja2u2z\']/div[@class=\'x78zum5 xdt5ytf x1n2onr6 xat3117 xxzkxad\']/div[@class=\'x78zum5 xdt5ytf x1t2pt76 x1n2onr6 x1ja2u2z x10cihs4\']/div[@class=\'x9f619 xvbhtw8 x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x1qjc9v5 x1oa3qoh x1qughib\']/div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xixxii4 x13vifvy x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1 x1dr59a3 xeq5yr9 x1n327nk\']/div[@class=\'x1uvtmcs x4k7w5x x1h91t0o x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1n2onr6 x1qrby5j x1jfb8zj\']/div[@class=\'x78zum5 x1q0g3np x1gvbg2u x1qughib x1n2onr6 xleuxlb xxfw5ft x1mh60rb x1f91t4q\']/div[@class=\'xopu45v xu3j5b3 xm81vs4 x1vjfegm\']/div[@class=\'x1xgvd2v x1o5hw5a xaeubzz x1cy8zhl xvbhtw8 x9f619 x78zum5 xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou\']/div[@class=\'xl5mz7h xhuyl8g\']/span[@class=\'x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j\']/div[@class=\'x1n2onr6\']/a[@role=\'link\']/div[1]';
        this.searchButton = '//span[contains(text(),\'Search\')]';
        this.searchBar = '//div[@class=\'xjoudau x6s0dn4 x78zum5 xdt5ytf x1c4vz4f xs83m0k xrf2nzk x1n2onr6 xh8yej3 x1hq5gj4\']//input[@placeholder=\'Search\']';
        this.searchedProfile = '//a[@href=\'/zuck/\']//div[@class=\'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xxbr6pl xbbxn1n xwib8y2 x1y1aw1k x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1\']';
        this.messages = '//span[contains(text(),\'Messages\')]';
    }

    async goToProfile() {
        await this.page.click(this.profile);
    }

    async goToExplore() {
        await this.page.click(this.explore);
    }

    async searchProfile() {
        await this.page.click(this.searchButton);
        await this.page.fill(this.searchBar, 'zuck');
        await this.page.click(this.searchedProfile);
    }

    async openMessages() {
        await this.page.click(this.messages);
    }
}

module.exports = HomePage;