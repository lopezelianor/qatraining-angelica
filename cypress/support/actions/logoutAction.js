import {logoutBtn } from "../pages/logoutPage"

export const userLogout = () => {
    cy.get(logoutBtn).click()
}