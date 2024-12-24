class SavedPage {
    constructor(page) {
        this.page = page;
        this.post = '//*[@id="mount_0_0_t/"]/div/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/main/div/div/div[3]/article/div/div/div/div[1]/a/div[3]/ul';
        this.likeButton = '//span[@class=\'x1rg5ohu xp7jhwk\']//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']';
    }

    async likePost() {
        await this.page.click(this.post);
        await this.page.click(this.likeButton);
    }
}

module.exports = SavedPage;