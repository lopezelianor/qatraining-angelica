import { category,productTShirtMen ,poloShirt} from "../pages/categoryPage"

export const goesToMenSection = () => {
    cy.get(category).click()
}

export const goesToTShirtMen = () => {
    cy.get(productTShirtMen).click()
}

export function addProduct() {
    cy.contains('.single-products', 'Men Tshirt')
      .trigger('mouseover')
      .find('.product-overlay a.add-to-cart')
      .first()
      .invoke('click')
  }

export const goesToPoloShirt = () => {
    cy.get(poloShirt).click()
}

export function addProducts(title) {
    cy.contains('.single-products', title)
      .trigger('mouseover')
      .find('.product-overlay a.add-to-cart')
      .first()
      .invoke('click')
  }