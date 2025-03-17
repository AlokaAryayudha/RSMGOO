


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
}