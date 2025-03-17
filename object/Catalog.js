


export class MenuCatalog{
    constructor(page){
        this.page = page

        this.MenuKandidat = page.getByRole('link', { name: 'Kandidat' })
        this.MenuPerusahaan = page.getByRole('link', { name: 'Profile Perusahaan' })
        this.MenuMitra = page.getByRole('link', { name: 'Profile Kemitraan' })
        this.MenuSekolah = page.getByRole('link', { name: 'Profile Sekolah' })
        this.MenuAktivasi = page.getByRole('link', { name: 'Aktifasi' })
        this.MenuValidasi = page.getByRole('link', { name: 'Validasi' })
        this.MenuSkill = page.getByRole('link', { name: 'My Skill' })
        this.MenuExperience = page.getByRole('link', { name: 'My Experience' })

    }
    Kandidat = async() => {
        console.log("Masuk menu kandidat")
        await this.MenuKandidat.waitFor()
        await this.MenuKandidat.click()
    }
    Perusahaan = async() => {
        console.log("Masuk menu perusahaan")
        await this.MenuPerusahaan.waitFor()
        await this.MenuPerusahaan.click()
    }
    Sekolah = async() => {
        console.log("Masuk menu Sekolah")
        await this.MenuSekolah.waitFor()
        await this.MenuSekolah.click()
    }
    Aktivasi = async() => {
        console.log("Masuk menu Aktivasi")
        await this.MenuAktivasi.waitFor()
        await this.MenuAktivasi.click()
    }
    Validasi = async() => {
        console.log("Masuk menu Validasi")
        await this.MenuValidasi.waitFor()
        await this.MenuValidasi.click()
    }
    Skill = async() => {
        console.log("Masuk menu Skill")
        await this.MenuSkill.waitFor()
        await this.MenuSkill.click()
    }
    Experience = async() => {
        console.log("Masuk menu Experience")
        await this.MenuExperience.waitFor()
        await this.MenuExperience.click()
    }
}