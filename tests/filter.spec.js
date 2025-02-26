import {test}  from "playwright/test"
import { Filter } from "../object/Filter"


test.skip("Filters", async({ page }) => {
    const filter = new Filter(page)
    await page.goto('/')
    await filter.lokasi('BEKASI')
    await filter.lokasi('JAKARTA BARAT')
    await filter.namalokasi('BENANG MAS MURNI ')
    await filter.level('HELPER')
    await filter.jabatan('COOK-CREW')
})