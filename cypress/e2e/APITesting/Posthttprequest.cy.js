describe('Http request POST', () => {
    it('POST /verifyLogin - Invalid credentials should return User not found', () => {
        cy.request({
          method: 'POST',
          url: 'https://automationexercise.com/api/verifyLogin',
          form: true,
          body: {
            email: 'invalid_user@test.com',
            password: 'wrong_password'
          }
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.a('string')
      
          const body = JSON.parse(response.body)
      
          expect(body).to.have.all.keys('responseCode', 'message')
          expect(body.responseCode).to.eq(404)
          expect(body.message).to.eq('User not found!')
          expect(body).to.not.have.any.keys('token', 'user', 'email')
          expect(response.duration).to.be.lessThan(2000)
        })
      })
})
