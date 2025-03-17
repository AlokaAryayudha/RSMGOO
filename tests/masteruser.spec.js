import {test}  from "playwright/test"
import { Administrasi} from "../object/ButtonMenu"
import { Loginpage } from "../object/Loginpage"
import { adminuser } from "../Data/DataAdmin"
import { kandidat, kandidat1 } from "../Data/Datakandidat"
import { Userbaru } from "../object/UserMaster"



test.skip("Administrasi", async({ page }) => {
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.pause()

    const administrasi = new Administrasi(page)
    await administrasi.masukadministrator()
    
    const userbaru = new Userbaru(page)
    const listkandidat = Object.values(kandidat1)
    for (const data of listkandidat){
        console.log("Mencari nama", data)
        await userbaru.mencarikandidat(data)
        await page.waitForTimeout(2000)
    }
    



})