import { email, password, loginButton } from "../pages/loginPage"

export const userLogin = (emai, pass) => {
    cy.get(email).first().type(emai)
    cy.get(password).type(pass)
    cy.get(loginButton).click()
}