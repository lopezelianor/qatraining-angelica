describe('Http request get all brand list', () => {
    it('Get all brand list', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.be.a('string')

            const body = JSON.parse(response.body)

            expect(body).to.have.all.keys('responseCode', 'brands')
            expect(body.responseCode).to.eq(200)
            expect(body.brands).to.be.an('array').and.not.be.empty            


              body.brands.forEach(brand => {
                expect(brand).to.have.all.keys('id', 'brand')
                expect(brand.id).to.be.a('number')
                expect(brand.brand).to.be.a('string').and.not.be.empty
              })

              const ids = body.brands.map(b => b.id)
              expect(ids).to.have.length(new Set(ids).size)
              expect(response.duration).to.be.lessThan(2000)
        })
    })
})

