class MessagesPage {
    constructor(page) {
        this.page = page;
        this.chat = '//span[@class=\'html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs\']';
        this.messageArea = '//p[@class=\'xat24cr xdj266r\']';
        this.sendButton = '//div[normalize-space()=\'Send\']';
        this.noteButton = '//div[@class=\'x1roi4f4\']';
        this.noteArea = '//p[@class=\'xdj266r x11i5rnm xat24cr x1mh8g0r\']';
        this.shareButton = '//div[normalize-space()=\'Share\']';
        this.post = '//div[@class=\'x6ikm8r x10wlt62 x1n2onr6 xp5s12f x11ucwad xgtuqic x155c047 x19g9edo\']';
        this.likeButton = '//div[@class=\'x1ypdohk\']//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']';
        this.commentArea = '//textarea[@placeholder=\'Add a comment…\']';
        this.postCommentButton = '//div[contains(text(),\'Post\')]';
        this.likeCommentButton = '//span[@class=\'_a9zu\']//div[@class=\'x6s0dn4 x78zum5 xdt5ytf xl56j7k\']//*[name()=\'svg\']';
    }

    async sendMessage() {
        await this.page.click(this.chat);
        await this.page.fill(this.messageArea, 'caooooo');
        await this.page.click(this.sendButton);
    }

    async writeNote() {
        await this.page.click(this.noteButton);
        await this.page.fill(this.noteArea, 'note');
        await this.page.click(this.shareButton);
    }

    async likePost() {
        await this.page.click(this.chat);
        await this.page.click(this.post);
        await this.page.click(this.likeButton);
    }

    async commentPost() {
        await this.page.click(this.chat);
        await this.page.click(this.post);
        await this.page.fill(this.commentArea, 'comment');
        await this.page.click(this.postCommentButton);
    }

    async likeComment() {
        await this.page.click(this.chat);
        await this.page.click(this.post);
        await this.page.click(this.likeCommentButton);
    }
}

module.exports = MessagesPage;