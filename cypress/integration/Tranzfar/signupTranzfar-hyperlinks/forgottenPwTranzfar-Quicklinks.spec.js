/// <reference types='cypress' />
describe('Forgotten Password link Test', function() {
it('Launch to Tranzfar Login Page', function () {
    //'Navigate/Launch to Tranzfar Login Page
    cy.visit('https://secure.tranzfar.co.uk/webapp/account/login')

    //Assertion(URL Verification)
    cy.url().should('include', 'account/login')

    //Assertion(Text on Page)
    cy.contains('Sign In').should('be.visible')
})

it('//Clicking the Forgotten Password link', function () {
    
    cy.get('.login-help').contains('Forgot Password').should('be.visible').click()

    cy.url({ timeout: 5000 }).should('include', 'forget_password')
    cy.contains('Forget Password').should('be.visible')  
    //expect().to.match() 
    //cy.get().expect.to.match()     
    })

})
