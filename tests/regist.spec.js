import {test}  from "playwright/test"
import { Registerpage } from "../object/Registerpage"


test.skip("Daftar akun baru", async({ page })=>{
    const registerpage = new Registerpage(page)
    await registerpage.Daftar()
    await page.pause()
})