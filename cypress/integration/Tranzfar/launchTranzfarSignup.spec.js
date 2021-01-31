/// <reference types='cypress' />

describe('Launch Tranzfar signup page', () => {

    it('Navigate to Tranzfar Home Page', function() {
        cy.visit('https://www.tranzfar.com/')
        cy.location('protocol').should('eq','https:')
    })
    
    //it('click on the signup now button', function() {
        //cy.contains('Sign Up Now').should('be.visible').click({force: true})
        //cy.get(':nth-child(5) > .fasc-button', {timeout:10000}).click({force: true})

    //})
 })

 

