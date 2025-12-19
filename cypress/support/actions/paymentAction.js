import { nameCard, numberCard, monthCard, yearCard, cvvCard, payButton} from "../pages/paymentPage"

export const filledPaymentForm = (nameCards, numberCards, monthCards, yearCards, cvvCards) => {
    cy.get(nameCard).type(nameCards)
    cy.get(numberCard).type(numberCards)
    cy.get(monthCard).type(monthCards)
    cy.get(yearCard).type(yearCards)
    cy.get(cvvCard).type(cvvCards)
    cy.get(payButton).click()
}