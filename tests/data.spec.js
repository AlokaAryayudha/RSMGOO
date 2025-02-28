import {test}  from "playwright/test"
import {Loginpage} from "../object/Loginpage"
import { IsiData } from "../object/Isidata"
import { List1, List2 } from "../Data/ListData"


test("Isi data 1", async({  page })=>{
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.waitForTimeout(6000)

    const isidata = new IsiData(page)
    await isidata.masuklowongan()
    const datalist = Object.values(List1)
    for (const data of datalist) {
        await isidata.isiForm1(data)
        await page.waitForTimeout(2000)
    }

})

test.skip("Isi data 2", async({  page })=>{
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.waitForTimeout(6000)

    const isidata = new IsiData(page)
    await isidata.masuklowongan()
    const datalist = Object.values(List2)
    for (const data of datalist) {
        await isidata.isiForm2(data)
        await page.waitForTimeout(2000)
    }

})

test.skip("Isi data 3", async ({ page }) => {
    const loginpage = new Loginpage(page)
    await loginpage.login()
    await page.waitForTimeout(6000)

    const isidata = new IsiData(page)
    await isidata.masuklowongan()
    const datalist = Object.values(List2)

    const successList = [] // Menyimpan data yang berhasil diinput

    for (const data of datalist) {
        try {
            await isidata.isiForm2(data)
            await page.waitForTimeout(2000)
            successList.push(data) // Menambahkan data ke daftar sukses jika berhasil
        } catch (error) {
            console.error(`Gagal mengisi data: ${JSON.stringify(data)}`, error)
        }
    }

    console.log("Data yang berhasil diinput:\n" + successList.join("\n"))

})
