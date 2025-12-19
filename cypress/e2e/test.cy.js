const { loginData } = require("../fixtures/loginData")
const { goesToMenSection, addProduct,addProducts,goesToTShirtMen,goesToPoloShirt} = require("../support/actions/categoryAction")
const { userLogin } = require("../support/actions/loginAction")
const { titleSectionProducts } = require("../support/pages/categoryPage")
const { getMessageAddedProduct,goesToViewCart, continueShopping} = require("../support/actions/modalConfirmAction")
const {cardCreditData} = require("../fixtures/cardInformation")
import { itemTShirtyMenProduct } from "../fixtures/itemMen"
import { verifyProductPurcharse , goesToCheckoutOrder, goesToPlaceOrder} from "../support/actions/checkoutAction"
import { filledPaymentForm } from "../support/actions/paymentAction"
import {orderPlacedMessage} from "../support/pages/paymentDonePage"

describe('template spec',{testIsolation: false}, () => {
    
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes("Unexpected token ')'")) {
            return false
            }
        })

        before('loading page', () => {
            cy.visit('/login')
        })       

        it('group1 - Validate purcharse on Category Men', () => {
            userLogin(loginData.email, loginData.password)
            goesToMenSection()
            goesToTShirtMen()
            cy.get(titleSectionProducts).should('include.text', 'Men - Tshirts Products')
            addProduct()
            getMessageAddedProduct().should('contain.text', 'Your product has been added to cart.')
            goesToViewCart()
            verifyProductPurcharse(itemTShirtyMenProduct[0])
            goesToCheckoutOrder()
            goesToPlaceOrder()
            filledPaymentForm(cardCreditData.nameCard, cardCreditData.numberCard, cardCreditData.monthCard, cardCreditData.yearCard, cardCreditData.cvvCard)
            cy.get(orderPlacedMessage).should('contain.text', 'Order Placed!')
        })

        it('group2 - Validate purcharse on Brands', () => {
            userLogin(loginData.email, loginData.password)
            goesToPoloShirt()
            cy.get(titleSectionProducts).should('include.text', 'Brand - Polo Products')
            addProducts('Blue Top')
            getMessageAddedProduct().should('contain.text', 'Your product has been added to cart.')
            continueShopping()
            addProducts('Fancy Green Top')
            getMessageAddedProduct().should('contain.text', 'Your product has been added to cart.')
            goesToViewCart()
            goesToCheckoutOrder()
            goesToPlaceOrder()
            filledPaymentForm(cardCreditData.nameCard, cardCreditData.numberCard, cardCreditData.monthCard, cardCreditData.yearCard, cardCreditData.cvvCard)
            cy.get(orderPlacedMessage).should('contain.text', 'Order Placed!')
        })
    })    
