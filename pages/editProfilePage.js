class EditProfilePage {
    constructor(page) {
        this.page = page;
        this.bioArea = '//textarea[@id=\'pepBio\']';
        this.submitButton = '//div[contains(text(),\'Submit\')]';
    }

    async addBio() {
        await this.page.fill(this.bioArea, 'bio');
        
    }
}

module.exports = EditProfilePage;