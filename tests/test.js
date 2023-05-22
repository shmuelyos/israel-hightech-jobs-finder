import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer";

async function autoScroll(page){

    await page.evaluate(async () => {
        await new Promise( (resolve) => {
            var totalHeight = 0;
            var distance = 5000;
            var timer = setInterval(async () => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    await wait(1000)
                    if(totalHeight >= scrollHeight - window.innerHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }
            }, 2000);
        });
    });

}
function wait(waitTime) {

    return new Promise((resolve) => {// promise will be returned and used with async/await function

        setTimeout(() => {
            console.log('wait finished');
            resolve(true); // when time will pass, than resolve promise
        }, waitTime); // set wait time in miliseconds

    });

}

let page
let browser
let url = "https://hightechinfo.co.il/"
let companiesList

describe('...', () => {


    test("open browser", async () => {

        browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [
                '--start-maximized',
            ],
            defaultViewport: null,
        });
        page = await browser.newPage()
        await page._client.send('Emulation.clearDeviceMetricsOverride');

        await page.goto(url)
    })

    test("get companies", async () => {
        await page.waitForSelector(`#__next > div > div.companies__container.container > div.row.justify-content-center`)
        await page.click("#__next > div > div.companies__container.container > div.form-row > div > div.input-group > div > button")
        await page.select("select.form-control.form-control-sm","2")
        await autoScroll(page)
        // await wait(10 * 1000)
        companiesList = document.querySelectorAll("#__next > div > div.companies__container.container > div.row.justify-content-center >div")
    }, 60 * 1000)

    test("companies - click on each", async () => {

        await page.click(companiesList[0])
        await wait(5000)
    },10*1000)


    // test("companies", async () => {})



    test("close", async () => {
        await browser.close()
    })


})







