export class Registerpage{
    constructor (page){
        this.page = page

        this.linkdaftar = page.getByRole('link', { name: ' Daftar Baru' })
        this.email = page.getByPlaceholder('masukkan email')
        this.password = page.getByPlaceholder('Password Baru')
        this.repass = page.getByPlaceholder('Ulang Password')
        this.nama = page.getByPlaceholder('Nama Anda')
        this.nomer = page.getByPlaceholder('Input No.Hp')
        this.wa = page.getByPlaceholder('Input No.Whatsapp')
        this.button = page.locator('#btnSimpan')
        this.suksesbut = page.getByRole('button', { name: 'OK' })

    }
    Daftar = async () => {
        await this.page.goto("/")
        await this.linkdaftar.waitFor()
        await this.linkdaftar.click()
        await this.email.fill('test@gmail.com')
        await this.password.fill('12345')
        await this.repass.fill('12345')
        await this.nama.fill('Kudamati')
        await this.nomer.fill('082112312')
        await this.wa.fill('082112312')
        await this.button.click()
        await this.suksesbut.waitFor()
        await this.suksesbut.click()
        await this.page.pause()


    }
}