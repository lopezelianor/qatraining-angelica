const { loginData } = require("../fixtures/loginData")
const { userLogin } = require("../support/actions/loginAction")

describe('template spec',{testIsolation: false}, () => {
        before('loading page', () => {
            cy.visit('/login')
        })

        it('Login', () => {
             //userLogin("lopezelianor@gmail.com", "123456")
             userLogin(loginData.email, loginData.password)
        })

    })