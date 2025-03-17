

export class Validasi{
    constructor(page){
        this.page = page

        this.iframe = page.frameLocator('iframe[name="iframe"]')

        this.search = page.iframe.getByRole('searchbox', { name: 'Search:' })
        this.datauser = page.iframe.getByRole('gridcell', { name: '${data}' })

    }
}