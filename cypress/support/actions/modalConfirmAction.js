import { viewCartLink, msgAddedProduct, titleSectionProducts, continueShoppingBtn } from "../pages/modalConfirmPage"

export function getMessageAddedProduct() {
    return cy.get(msgAddedProduct).first()
  }

  export function goesToViewCart() {
    cy.get(viewCartLink).click()
  }

  export function continueShopping() {
    cy.get(continueShoppingBtn).click()
  }