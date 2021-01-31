/// <reference types='cypress' />
describe('Estimate Tranzfar Cost Page Test', () => {
    it('Launch Estimate Tranzfar Cost Page', function() {
        cy.visit('https://secure.tranzfar.co.uk/webapp/transaction/estimate_fee')
        cy.url().should('include','estimate_fee')
        cy.get('.row > h3').contains('Estimate Transfer Cost').should('be.visible')                
    })

    it('Transfer fee dialog box test', () => {
        cy.get('.ui-dialog-title').contains('Message Dialog').should('be.visible')
        cy.get('#span-zero-rate').contains('£2 fee on ALL Transactions until May 31!').should('be.visible')
        cy.get('.ui-dialog-buttonset > .ui-button').click()         
    })

    it('Calculate estimated amount without transfer fee', () => {        
        cy.get('#transferAmount').clear().type('50.00')
        cy.wait(6000)  
        
        //check amount added is correct
        //cy.get('#transferAmount').contains('50.00') 

        //check recieved amount is blank
        //cy.get('.TotoalReceiveAmount').should('not.contain.value')
        //cy.get('').should('have.value', '')
        
        cy.get('#btn-calculate').contains('Calculate').should('be.visible').click()
        //check re ieved amount is correct
        //cy.wait(6000)
        //cy.get('#TotoalReceiveAmount').contains('25,000.00') how do I get the new value in the field.
            
        
    })


}) 