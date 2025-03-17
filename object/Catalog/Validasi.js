

export class Validasi{
    constructor(page){
        this.page = page

        this.iframe = page.frameLocator('iframe[name="iframe"]')

        this.search = this.iframe.getByRole('searchbox', { name: 'Search:' })
        this.datauser = this.iframe.getByRole('gridcell', { name: `${data}` })
        this.personal = this.iframe.getByText('Informasi Personal (Target :')
        this.pendidikan = this.iframe.getByText('Informasi Pendidikan (Target')
        this.keluarga = this.iframe.getByText('Informasi Keluarga (Target :')
        this.ktp = this.iframe.getByText('Informasi KTP (Target : 7)')
        this.domisili = this.iframe.getByText('Informasi Domisili (Target :')
        this.kembali = this.iframe.locator('button').filter({ hasText: 'Kembali' })


    }
}