import {test}  from "playwright/test"
import {Loginpage} from "../object/Loginpage"

test.skip(" Select and login ", async ({ page }) => { 
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.pause()

})





