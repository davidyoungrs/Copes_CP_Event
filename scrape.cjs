const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        console.log("Fetching Taste of Texas...");
        await page.goto('https://tasteoftexas.com/', { waitUntil: 'networkidle2' });
        const urls1 = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => (src.includes('jpg') || src.includes('png') || src.includes('webp')) && src.startsWith('http')));
        console.log('Taste of Texas URLs:', urls1.slice(0, 5));

        console.log("Fetching The Annie...");
        await page.goto('https://www.theanniehouston.com/', { waitUntil: 'networkidle2' });
        const urls2 = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => (src.includes('jpg') || src.includes('png') || src.includes('webp')) && src.startsWith('http')));
        console.log('The Annie URLs:', urls2.slice(0, 5));

        console.log("Fetching Resilience...");
        await page.goto('https://resiliencevietkitchen.com/', { waitUntil: 'networkidle2' });
        const urls3 = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => (src.includes('jpg') || src.includes('png') || src.includes('webp')) && src.startsWith('http')));
        console.log('Resilience URLs:', urls3.slice(0, 5));

        await browser.close();
    } catch (e) {
        console.error("Puppeteer error:", e);
    }
})();
