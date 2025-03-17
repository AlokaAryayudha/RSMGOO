import { adminuser } from "../Data/DataAdmin";
import { kandidat } from "../Data/Datakandidat";


export class Userbaru{
    constructor(page){
        this.page = page

        this.iframe = page.frameLocator('iframe[name="iframe"]')

        this.listuser = this.iframe.getByRole('combobox', { name: 'User Office' }).locator('span').nth(1)
        this.pelamar = this.iframe.getByRole('option', { name: 'Pelamar' })
        this.office = this.iframe.getByRole('option', { name: 'User Office', exact: true })
        this.searchuser = this.iframe.getByRole('searchbox', { name: 'Search:' })
        this.userkandidat = this.iframe.getByRole('gridcell', { name: '$(data)' }).first()
        this.masteruserbaru = this.page.getByRole('link', { name: 'Master User Baru' })
        this.konfirmasibtn = this.iframe.locator('#btnSimpan')
    }

    mencarikandidat = async(data) =>{
        await this.masteruserbaru.waitFor()
        await this.masteruserbaru.click()
        await this.page.waitForTimeout(2000)
        
        console.log("Mencari Kandidat")
        await this.listuser.waitFor()
        await this.listuser.click()

        await this.pelamar.waitFor()
        await this.pelamar.click()
        await this.page.waitForTimeout(2000)
        await this.searchuser.fill(data)

        const userkandidat = this.iframe.getByRole('gridcell', { name: `${data}` }).first();
        
        await userkandidat.waitFor()
        await userkandidat.click()
        await this.konfirmasibtn.click()
    }
}