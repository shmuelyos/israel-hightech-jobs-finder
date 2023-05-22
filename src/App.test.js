import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer";
import EnhancedPage from "./Classes/EnhancedPage";
import CustomPage from "./Classes/CustomPage";


describe('...', () => {

    let page
    let browser
    let companiesList = ["https://www.amdocs.com/"]
    const cookies_pattern = /cookies|Cookies/
    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }
    async function clickButtonByPattern(pattern) {
        await page.evaluate(() => {
            function findClickableElementByPattern(pattern) {
                // Check if the pattern is a valid regular expression
                try {
                    new RegExp(pattern);
                } catch (e) {
                    throw new Error("Invalid regular expression pattern");
                }

                // Define all clickable elements
                let clickableElements = document.querySelectorAll('a, button, input[type=submit], input[type=button]');
                let regex = new RegExp(pattern, 'i');

                // Filter clickable elements by pattern in their inner text
                let matchedElements = Array.from(clickableElements).filter(element => regex.test(element.textContent.trim()));

                if (matchedElements.length === 0) {
                    throw new Error("No clickable elements matching the pattern were found");
                } else {
                    return matchedElements;
                }
            }

            const res = findClickableElementByPattern(pattern)
            res[0].click()
        }, {pattern})
    }
    async function findCareerPage(companyUrls) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        for (let url of companyUrls) {
            try {
                await page.goto(url);

                // Find the "Career" button and click on it.
                const careerButton = await page.$x("//button[contains(., 'Career')]");
                if (careerButton.length > 0) {
                    const res = careerButton[0];
                    await careerButton[0].click();
                    return res;
                }

                // TODO: Add code here to search for job postings that match your skills.

            } catch (error) {
                console.error(`Failed to process ${url}: ${error}`);
            }
        }

        // await browser.close();
    }

    test("open browser", async () => {

        browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [
                '--start-maximized',
            ],
            defaultViewport: null,
        })
        // page = new EnhancedPage(await browser.newPage())
      page = new CustomPage(await browser.newPage())

      await page.goto(companiesList[0])
        await delay(1000)
    }, 10 * 1000)

    test("skip annoying cookies", async () => {
        await page.clickOnText("cookies")
        // await clickButtonByPattern(cookies_pattern)
        // const res = await page.findClickableElementByPattern(cookies_pattern)
        // console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ res ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(res, null, 4))
        // res[0].click()
    })

    test("enter Careers", async () => {
        await page.clickOnText("Careers")

    })

})


describe("coretigo",()=>{
    let page
    let browser
    let companiesList = ["https://www.coretigo.com/"]
    test("open browser", async () => {

        browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [
                '--start-maximized',
            ],
            defaultViewport: null,
        })
        page = new CustomPage(await browser.newPage())

        await page.goto(companiesList[0])
    }, 10 * 1000)
    test("skip annoying cookies", async () => {
        await page.clickOnText("cookies")
    })
    test("enter Careers", async () => {
        await page.clickOnText("careers|Careers")
    })
})



