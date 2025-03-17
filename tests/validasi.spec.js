import {test}  from "playwright/test"
import { Administrasi } from "../object/ButtonMenu"
import { Loginpage } from "../object/Loginpage"


test.only("Validasi Data", async ({page}) => {
    const loginpage = new Loginpage (page)
    await loginpage.login()
    

})
