import { List1, List2 } from "../Data/ListData"
import { Tanggal } from "../Data/Tanggal"
import { timeout } from "../playwright.config"

export class PasangLowongan {
    constructor (page){
        this.page = page

        this.iframe = page.frameLocator('iframe[name="iframe"]')

        this.lowongan = page.locator('a').filter({ hasText: 'Lowongan' }).first()
        this.masuklowongan = page.getByRole('link', { name: 'Pasang Lowongan' })
        this.searchbox = this.iframe.getByRole('searchbox', { name: 'Search:' })
        this.detailInformasi = this.iframe.getByText('Detail Informasi')
        this.date1 = this.iframe.getByText('Pick a date').nth(1)
        this.date2 = this.iframe.getByText('Pick a date').nth(2)
        this.savebut = this.iframe.locator('#btnPO')
        this.berhasil = this.iframe.getByRole('button', { name: 'OK' })
        this.exit = this.iframe.locator('button').filter({ hasText: 'Kembali' }) 
    
    }

    masukpasanglowongan = async () => {
        await this.lowongan.waitFor({ timeout: 20000 })
        console.log('Masuk kedalam menu Lowongan')
        await this.lowongan.click()
        await this.page.waitForTimeout(2000)
        await this.masuklowongan.click()


    }
    isilowongan1 = async(data) => {
        console.log(`(${data})`)
        await this.searchbox.waitFor({ state: "visible", timeout: 1000000 })
        await this.searchbox.type(data)
        await this.page.waitForTimeout(3000)

        const klikdata = this.iframe.getByRole('gridcell', { name: `${data}` })
        await klikdata.waitFor({ timeout: 5000 })
        await klikdata.click()
        await this.page.waitForTimeout(3000)

        await this.detailInformasi.click()
        await this.page.waitForTimeout(3000)

        await this.date1.click()
        await this.iframe.getByRole('cell', { name: '25', exact: true }).click()
        await this.page.waitForTimeout(3000)

        await this.date2.click()
        await this.iframe.getByRole('cell', { name: '▶' }).click()
        await this.page.waitForTimeout(3000)
        await this.iframe.getByRole('cell', { name: '6' }).nth(1).click()
        // await this.iframe.getByRole('cell', { name: '1', exact: true }).first().click()
        await this.page.waitForTimeout(3000)

        await this.savebut.click()
        await this.page.waitForTimeout(3000)
        await this.berhasil.click()
        await this.page.waitForTimeout(2000)
        await this.detailInformasi.click()
        await this.exit.click()
        // await this.masukpasanglowongan.click()
    }

    isilowongan2 = async(data) => {
        console.log(`(${data})`)
        await this.searchbox.waitFor({ state: "visible", timeout: 1000000 })
        await this.searchbox.type(data)
        await this.page.waitForTimeout(3000)

        const klikdata = this.iframe.getByRole('gridcell', { name: `${data}` })
        await klikdata.waitFor({ timeout: 5000 })
        await klikdata.click()
        await this.page.waitForTimeout(3000)

        await this.detailInformasi.click()
        await this.page.waitForTimeout(3000)

        await this.date1.click()
        await this.iframe.getByRole('cell', { name: '25', exact: true }).click()
        await this.page.waitForTimeout(3000)

        await this.date2.click()
        await this.iframe.getByRole('cell', { name: '▶' }).click()
        await this.page.waitForTimeout(3000)
        await this.iframe.getByRole('cell', { name: '6' }).nth(1).click()
        await this.page.waitForTimeout(3000)

        await this.savebut.click()
        await this.page.waitForTimeout(3000)
        await this.berhasil.click()
        await this.page.waitForTimeout(2000)
        await this.detailInformasi.click()
        await this.exit.click()
        // await this.masukpasanglowongan.click()
    }


}