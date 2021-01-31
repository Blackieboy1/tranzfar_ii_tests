/// <reference types='cypress' />
describe('Forgottenpassword Test', function () {

    it('Launch to Tranzfar Login Page', function () {
        //'Navigate/Launch to Tranzfar Login Page
        cy.visit('https://secure.tranzfar.co.uk/webapp/account/login')

        //Assertion(URL Verification)
        cy.url().should('include', 'account/login')

        //Assertion(Text on Page)
        cy.contains('Sign In').should('be.visible')
    })

    it('Forgotten Password Process Test', function () {
        //Clicking on the Forgotten Password link
        cy.get('.login-help').contains('Forgot Password').should('be.visible').click()

        cy.url({ timeout: 5000 }).should('include', 'forget_password')
        cy.contains('Forget Password').should('be.visible')

        //('Enter Email Address')
        //cy.get('input{placeholder="Email"}').type('tvveyvyv@sharklasers.com') //This is an alternate way of entering email
        cy.get('form').within(($form) => {
            //Using cy.get in this function will only get elements within the form and not the whole page/document
            cy.get('input').first().type('tvveyvyv@sharklasers.com')
            cy.contains('Request Password').click() // This submits the form yielded from within   
        })

    })

    it('Negative test Varification & Assertion', function () {
        //Locate alet text element & confirm error message
        cy.get('.alert', { timeout: 5000 }).contains('Username does not exist, please try again.').should('be.visible')
        //Closing error message alert box
        cy.get('.close').should('not.be.disabled').click()
    })


})
