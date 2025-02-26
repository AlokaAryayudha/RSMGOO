import { admin } from "../Data/DataAdmin"

export class Loginpage{
    constructor(page){
        this.page = page

        this.email = page.getByRole('textbox', { name: 'User/Email' })
        this.pass = page.getByRole('textbox', { name: 'Password' })
        this.loginbutton = page.getByRole('button', { name: 'Login' })
    }

    login = async () => {
        await this.page.goto("/")
        await this.email.waitFor()
        await this.email.fill(admin.username)
        console.log('Memasukan Email')

        await this.pass.waitFor()
        await this.pass.fill(admin.password)
        console.log('Memasukan password')
        await this.loginbutton.click()
        

    }


}