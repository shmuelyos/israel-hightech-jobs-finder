
export default class EnhancedPage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        return await this.page.goto(url);
    }

    async _findClickableElementByPattern(p=null) {

        return await this.page.evaluate(({p}) => {

            const findClickableElementByPattern = (p=null,pattern=/cookies|Cookies/) => {
                try {
                    new RegExp(pattern);
                } catch(e) {
                    return "Invalid regular expression pattern";
                }

                let clickableElements = document.querySelectorAll('a, button, input[type=submit], input[type=button]');
                let regex = new RegExp(pattern, 'i');

                let matchedElements = Array.from(clickableElements).filter(element => regex.test(element.textContent.trim()));

                if (matchedElements.length === 0) {
                    return "No clickable elements matching the pattern were found";
                } else {
                    return matchedElements.map(el => el.outerHTML);
                }
            };

            return findClickableElementByPattern(p);

        }, {p});

    }

    async findClickableElementByPattern(pattern) {
        return await this.page.evaluate(({pattern}) => {
            const findClickableElementByPattern = (p=null, pattern=/cookies|Cookies/) => {
                try {
                    new RegExp(pattern);
                } catch(e) {
                    return "Invalid regular expression pattern";
                }

                let clickableElements = document.querySelectorAll('a, button, input[type=submit], input[type=button]');
                let regex = new RegExp(pattern, 'i');

                let matchedElements = Array.from(clickableElements).filter(element => regex.test(element.textContent.trim()));

                if (matchedElements.length === 0) {
                    return "No clickable elements matching the pattern were found";
                } else {
                    // Map each element to an object with useful properties
                    return matchedElements.map(el => ({
                        outerHTML: el.outerHTML,
                        innerText: el.innerText,
                        id: el.id,
                        classes: el.className,
                        href: el.href
                    }));
                }
            };

            return findClickableElementByPattern(pattern);
        }, {pattern});
    }


    // You can easily add more functions here
    // async someOtherFunction() { ... }
}
