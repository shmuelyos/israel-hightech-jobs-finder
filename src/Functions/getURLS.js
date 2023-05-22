
// import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer";


const companies = [
    "intel", "google", "hp", "amdocs", "microsoft", "elbit-systems", "rafael", "ibm", "sap",
    "Israel Aerospace Industries", "Check Point Software Technologies", "ELTA SYSTEMS", "ebay",
    "Applied Materials", "Sandisk", "Verint Systems", "marvell", "matrix", "Philips", "Cisco",
    "GIVEN-IMAGING", "ness", "comverse", "oracle", "Mellanox", "Bynet Electronics", "SQLINK",
    "Malam Team", "abilisense", "overwolf", "indegy", "MCE SYS", "anagog", "aniways", "Applitools",
    "applicat technologies", "Axxana", "xplenty", "Axerra Networks", "Action Item Software",
    "BestMatch", "beyond verbal communication", "BioCatch", "BitMint", "guardicore", "gonet systems",
    "Getonic", "Gizra", "giraffic", "genio", "DIVINETWORKS", "driivz", "Hybrid Security", "Waves Audio",
    "kwik.me", "Emaze", "wekaio", "Zollo", "Zoomd", "Ziggurat Systems", "zeekit", "ZRRO Technologies",
    "total boox", "TOMODO", "Transspot", "Tracx", "user1st", "YouCC Technologies", "cabara software",
    "CoolaData", "Lingua.ly", "LogDog", "Babator", "MedCPU", "PlayScape", "minereye", "minteye",
    "novospeech", "NETALIZER", "nextopic", "softlib", "SterGen", "Safend", "6Scan", "Cell Buddy Networks",
    "Cellrox", "Spikko", "SQream Technologies", "screemo", "fortscale", "PhysiMax Technologies",
    "morovus", "Wispa", "fireblade", "Fireglass", "Feelter", "Checkmarks", "Continuity Software",
    "Corrigon", "CorrSight", "qspark", "Kryon Systems", "RAD Data", "RADIFLOW", "RoutePerfect",
    "reporty homeland security", "SHOWBOX", "3DMTP", "SHOWBOX", "osherg technologies", "Mishor 3D",
    "clickspree performance", "inuitive", "Eltav Wireless Monitoring", "GIV-Solutions", "G-ils",
    "DesignArt Networks", "lantiq israel", "medaware", "sivan design ds", "cyber secdo",
    "sensegon technologies", "pontis", "comocomo", "brandshield", "CliniWorks (Israel)",
    "ronram business management", "optier", "e8 storage systems", "integral erp", "infodraw israel r&d",
    "empow cyber security", "Beeper Communications Israel Limited", "LIGHT CYBER", "simplex cc",
    "semperis", "sckipio technologies si", "cloudendure", "Castle Builders (IL)", "ROCKETICK TECHNOLOGIES",
    "EFRANAT", "TransAlgae Israel", "Liola Technologies"
];

// export async function getCompanyUrl(company) {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto(`https://www.google.com/search?q=${company.replace(' ', '+')}`);
//         const url = await page.$eval('a', (element) => element.href);
//         await browser.close();
//         return url ? url.replace('/url?q=', '') : '';
//     } catch (error) {
//         console.error(`Error fetching URL for ${company}:`, error.message);
//         return '';
//     }
// }

// export async function scrapeCompanyUrls() {
//     const companyUrls = {};
//
//     for (const company of companies) {
//         const url = await getCompanyUrl(company);
//         companyUrls[company] = url;
//     }
//
//     console.log(JSON.stringify(companyUrls, null, 2));
// }


