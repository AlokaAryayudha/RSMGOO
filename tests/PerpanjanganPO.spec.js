import {test}  from "playwright/test"
import {Loginpage} from "../object/Loginpage"
import { List1, List2 } from "../Data/ListData"
import { PasangLowongan } from "../object/PublishLowongan"



test.skip("perpanjang po 1", async({ page })=>{
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.waitForTimeout(6000)

    const pasanglowongan = new PasangLowongan(page)
    await pasanglowongan.masukpasanglowongan()
    const listlowongan = Object.values(List1)
    for (const data of listlowongan) {
        await pasanglowongan.isilowongan1(data)
        await page.waitForTimeout(2000)
    }
})

test.skip("perpanjang po 2", async({ page })=>{
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.waitForTimeout(6000)

    const pasanglowongan = new PasangLowongan(page)
    await pasanglowongan.masukpasanglowongan()
    const listlowongan = Object.values(List2)
    for (const data of listlowongan) {
        await pasanglowongan.isilowongan2(data)
        await page.waitForTimeout(2000)
    }
})
