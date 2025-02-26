export class Filter{
    constructor(page){
        this.page = page

        this.tempat = page.locator('.select2-selection--multiple').nth(0)
        this.namatempat = page.locator('.select2-search__field[aria-describedby="select2-PerusahaanId-container"]')
        this.levelname = page.locator('.select2-search__field[aria-describedby="select2-JobLevel-container"]')
        this.job = page.locator('.select2-search__field[aria-describedby="select2-JobFunction-container"]')
        this.buttonfilter = page.locator('small').filter({ hasText: 'Filter Data' }).locator('div')
    }

    lokasi = async (optionText) => {
        
        await this.tempat.click()
        await this.tempat.waitFor()

        await this.page.waitForSelector(`li:has-text("${optionText}")`)
        await this.page.locator(`li:has-text("${optionText}")`).click()
    
    }
    namalokasi = async (optionText) => {
        await this.namatempat.click()
        await this.namatempat.waitFor()

        await this.page.waitForSelector(`li:has-text("${optionText}")`);
        await this.page.locator(`li:has-text("${optionText}")`).click();
    }

    level = async(optionText) => {
        await this.levelname.click()
        await this.levelname.waitFor()

        await this.page.waitForSelector(`li:has-text("${optionText}")`);
        await this.page.locator(`li:has-text("${optionText}")`).click();
    }

    jabatan = async(optionText) => {
        await this.job.click()
        await this.job.waitFor()

        await this.page.waitForSelector(`li:has-text("${optionText}")`);
        await this.page.locator(`li:has-text("${optionText}")`).click();
        await this.buttonfilter.click()
        await this.page.pause()
    }



}