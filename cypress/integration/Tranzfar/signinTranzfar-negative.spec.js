/// <reference types='cypress' />
describe('login to Tranzar negative tests', () => {

    it('Navigate to Tranzfar Singup Page', function() {
        cy.visit('https://secure.tranzfar.co.uk/webapp/account/registration')

        //Assertion(URL Verification)
        cy.url().should('include', 'registration')

        //Assertion(Text on Page)
        cy.contains('Create an Account').should('be.visible')

        //Click on the signin button
        cy.get('p > a').click()

        //Assertion(Text on Page is visible)
        cy.contains('Sign In').should('be.visible')
        cy.get('.row > h3').contains('Sign In')

        //wait 2 secs before the next command just to help you see what's going on, on screen.
        //This is not normal scripting practice 
        cy.wait(2000)
        
        //Enter Email Address
        cy.get('#email').type('tvveyv@sharklaser.com')
        
        //Enter Wrong Password
        /cy.get('#pwd').type('passwordtranzfar1')
        
        //Submitt form by clicking sigin(Expected result:System should not allow user login)
        cy.get('.btn').click()
        
        //Assertion(Error Message Alert)
        cy.get('.alert').contains('Invalid Email or Password').should('be.visible')
        
        //wait 2 secs before the next command just to help you see the Alert message on screen.
        //This is not normal scripting practice 
        cy.wait(3000)
        
        //close alert window 
        cy.get('.close').click()
        
    })
})
