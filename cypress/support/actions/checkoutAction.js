import { checkoutButton, itemDescription, itemPrice,
    placeOrderButton} from "../pages/checkoutPage"

export const goesToCheckoutOrder = () => {
    cy.get(checkoutButton).click()
}

export const goesToPlaceOrder = () => {
    cy.get(placeOrderButton).click()
}

export const verifyProductPurcharse = (itemMen) => {
    cy.get(itemDescription).should('contain.text', itemMen.description)
    cy.get(itemPrice).should('contain.text', itemMen.price)
}