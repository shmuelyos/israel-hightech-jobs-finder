class CustomPage {
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

    delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

}

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const puppeteer = require('puppeteer')

const app = express()
const port = 3009

async function launchNewPage(url = "https://www.coretigo.com/") {
    let page
    let browser

    browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        args: [
            '--start-maximized',
        ],
        defaultViewport: null,
    })
    page = new CustomPage(await browser.newPage())


    await page.goto(url)

    await page.delay(1000)

    await page.clickOnText("Cookies|cookies|אני מסכים")

    await page.delay(1000)

    await page.clickOnText("careers|Careers|קריירה|קריירות")


}

app.use(cors())

app.use(bodyParser.json())

app.get('/', async () => await launchNewPage())

app.post('/', async (req, res) => {
    await launchNewPage(req.body.url)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})


