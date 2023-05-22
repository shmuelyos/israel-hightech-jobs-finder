export default class CustomPage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        return await this.page.goto(url);
    }

    async clickOnText(patternString = 'cookies|Cookies', flags = 'i') {

        await this.page.evaluate((patternString, flags) => {
            let clickableElements = document.querySelectorAll('a, button, input[type=submit], input[type=button]');
            let regex = new RegExp(patternString, flags);

            let matchedElements = Array.from(clickableElements).filter(element => {
                let elementText = element.textContent.trim();
                return regex.test(elementText);
            });

            if (matchedElements.length === 0) {
                return "No clickable elements matching the pattern were found";
            } else {
                matchedElements[0].click();
            }
        }, patternString, flags);
    }

}
