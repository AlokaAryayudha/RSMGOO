import { admin, MasterUser } from "../Data/DataAdmin";

export class Administrasi {
    constructor(page){
        this.page = page

        this.BtnAdministrator = page.locator('a').filter({ hasText: 'Administrator' })
        this.BtnPerusahaan = page.getByRole('listitem').filter({ hasText: 'Perusahaan Profile Perusahaan' }).locator('a').first()
        this.BtnCatalog = page.locator('a').filter({ hasText: 'Catalog' })
        this.BtnLowongan = page.locator('a').filter({ hasText: 'Lowongan' }).first()
        this.BtnLaporan = page.locator('a').filter({ hasText: 'Laporan' })
    }

masukadministrator = async () => {
    console.log("Masuk ke Administrator")
    await this.BtnAdministrator.waitFor()
    await this.BtnAdministrator.click()
}


masukperusahaan = async () => {
    console.log("Masuk ke Perusahaan")
    await this.BtnPerusahaan.waitFor()
    await this.BtnPerusahaan.click()
}


masukcatalog = async () =>{
    console.log("Masuk ke Catalog")
    await this.BtnCatalog.waitFor()
    await this.BtnCatalog.click()
}

masuklowongan = async() =>{
    console.log("Masuk ke Lowongan")
    await this.BtnLowongan.waitFor()
    await this.BtnLowongan.click()
}

masuklaporan = async() => {
    console.log("Masuk ke Laporan")
    await this.BtnLaporan.waitFor()
    await this.BtnLaporan.click()

}

masukinformasi = async() =>{
    console.log("Masuk ke Informasi")
    await this.BtnInformasi.waitFor()
    await this.BtnInformasi.click()
}








}