import { Alamat, List1, List2 } from "../Data/ListData"
import { Tanggal } from "../Data/Tanggal"
import { timeout } from "../playwright.config"


export class IsiData {
    constructor(page) {
        this.page = page

        this.iframe = page.frameLocator('iframe[name="iframe"]')

        this.lowongan = page.locator('a').filter({ hasText: 'Lowongan' }).first()
        this.filterlowongan = page.getByRole('link', { name: 'Filter & Publish' })
        this.searchbox = this.iframe.getByRole('searchbox', { name: 'Search:' })
        this.jadwal = this.iframe.getByText('Jadwal Seleksi')
        this.jenis = this.iframe.getByLabel('Physicotest (PHY)').locator('span').nth(1)
        this.screening = this.iframe.getByRole('option', { name: 'Screaning Data (SCD)' })
        this.tempatseleksi = this.iframe.locator('#TmpSeleksi')
        this.jumlahruangan = this.iframe.locator('#JmlRuangan')
        this.jumlahpetugas = this.iframe.locator('#JmlPetugas')
        this.jumlahsession = this.iframe.locator('#JmlPengunjung')
        this.durasi = this.iframe.locator('#DurasiPelayanan')
        this.date = this.iframe.getByText('Pick a date')
        this.simpanseleksi = this.iframe.locator('#btnTambahJadwalSeleksi')
        this.konfirmasi = this.iframe.getByRole('button', { name: 'OK' })
        this.status = this.iframe.getByText('Status Publish Lowongan')
        this.statusbtn = this.iframe.locator('#btnTambahTempatDaftar')
        this.yabtn = this.iframe.locator('button', { hasText: 'Ya, Publish!' })
        this.exit = this.iframe.locator('button').filter({ hasText: 'Kembali' })    
        

    }

    masuklowongan = async () =>{
        await this.lowongan.waitFor({ timeout: 20000 })
        console.log('Masuk kedalam menu Lowongan')
        await this.lowongan.click()

        await this.page.waitForTimeout(10000)
        console.log('Masuk kedalam Filter dan publish')
        await this.filterlowongan.click()

    }

    isiForm1 = async (data) => {

        console.log(`Mengisi data1 (${data})`)
        await this.page.waitForTimeout(10000)
        await this.searchbox.type(data)

        await this.page.waitForTimeout(3000)

        const klikdata = this.iframe.getByRole('gridcell', { name: `${data}` })
        await klikdata.waitFor({ timeout: 5000 })
        await klikdata.click()
        

        await this.jadwal.waitFor({ timeout: 5000 })
        await this.jadwal.click()
        await this.page.waitForTimeout(3000)
        await this.jenis.click()
        await this.screening.click()

        await this.tempatseleksi.fill(Alamat.lokasiseleksi)
        await this.jumlahpetugas.type('5')
        await this.jumlahruangan.type('1')
        await this.jumlahsession.type('50')

        await this.durasi.click()
        await this.iframe.locator('div.clockpicker-tick').first().waitFor({timeout: 5000})
        await this.iframe.locator('div.clockpicker-tick').filter({ hasText: /^1$/ }).click()
        await this.iframe.locator('div.clockpicker-tick').first().waitFor({timeout: 5000})
        await this.iframe.locator('div.clockpicker-tick').filter({ hasText: /^00$/ }).nth(1).click()
        
     
        await this.date.click()
        await this.iframe.getByRole('cell', { name: '▶' }).click()
        await this.page.waitForTimeout(3000)
        await this.iframe.getByRole('cell', { name: '5', exact: true }).first().click()

        await this.simpanseleksi.click()
        await this.page.waitForTimeout(2000)
        await this.konfirmasi.click()
        await this.page.waitForTimeout(3000)

        const iframeLocator = this.page.locator('iframe[name="iframe"]')
        const iframe = await iframeLocator.contentFrame()

        
        const targetFrame = await iframe.locator('[title="Publish Jadwal Seleksi"]').last()
        await targetFrame.click()
        await this.yabtn.waitFor({ timeout: 2000 })
        await this.yabtn.click()
        await this.page.waitForTimeout(2000)
        await this.konfirmasi.click()

        await this.page.waitForTimeout(2000)
        await this.status.click()
        await this.page.waitForTimeout(2000)
        
        
        await this.statusbtn.click()
        await this.konfirmasi.click()
        await this.page.waitForTimeout(2000)

        const targetLink = await iframe.locator('tr').locator('span a').last()
        await targetLink.click()
        await this.yabtn.waitFor({timeout: 2000})
        await this.yabtn.click()
        await this.konfirmasi.waitFor()
        await this.konfirmasi.click()
        
        await this.status.click()
        await this.exit.click()
        await this.filterlowongan.click()

        
    }

    isiForm2 = async (data) => {

        console.log(`Mengisi data2 (${data})`)
        await this.page.waitForTimeout(10000)
        await this.searchbox.type(data)

        await this.page.waitForTimeout(3000)

        const klikdata = this.iframe.getByRole('gridcell', { name: `${data}` })
        await klikdata.waitFor({ timeout: 5000 })
        await klikdata.click()
        

        await this.jadwal.waitFor({ timeout: 5000 })
        await this.jadwal.click()
        await this.page.waitForTimeout(3000)
        await this.jenis.click()
        await this.screening.click()

        await this.tempatseleksi.fill(Alamat.lokasiseleksi)
        await this.jumlahpetugas.type('5')
        await this.jumlahruangan.type('1')
        await this.jumlahsession.type('50')

        await this.durasi.click()
        await this.iframe.locator('div.clockpicker-tick').first().waitFor({timeout: 5000})
        await this.iframe.locator('div.clockpicker-tick').filter({ hasText: /^1$/ }).click()
        await this.iframe.locator('div.clockpicker-tick').first().waitFor({timeout: 5000})
        await this.iframe.locator('div.clockpicker-tick').filter({ hasText: /^00$/ }).nth(1).click()
        
     
        await this.date.click()
        await this.iframe.getByRole('cell', { name: '▶' }).click()
        await this.page.waitForTimeout(3000)
        await this.iframe.getByRole('cell', { name: '8', exact: true }).click()

        await this.simpanseleksi.click()
        await this.page.waitForTimeout(2000)
        await this.konfirmasi.click()
        await this.page.waitForTimeout(3000)

        const iframeLocator = this.page.locator('iframe[name="iframe"]')
        const iframe = await iframeLocator.contentFrame()

        
        const targetFrame = await iframe.locator('[title="Publish Jadwal Seleksi"]').last()
        await targetFrame.click()
        await this.yabtn.waitFor({ timeout: 2000 })
        await this.yabtn.click()
        await this.page.waitForTimeout(2000)
        await this.konfirmasi.click()

        await this.page.waitForTimeout(2000)
        await this.status.click()
        await this.page.waitForTimeout(2000)
        
        
        await this.statusbtn.click()
        await this.konfirmasi.click()
        await this.page.waitForTimeout(2000)

        const targetLink = await iframe.locator('tr').locator('span a').last()
        await targetLink.click()
        await this.yabtn.waitFor({timeout: 2000})
        await this.yabtn.click()
        await this.konfirmasi.waitFor()
        await this.konfirmasi.click()
        
        await this.status.click()
        await this.exit.click()
        await this.filterlowongan.click()

        
    }

}
