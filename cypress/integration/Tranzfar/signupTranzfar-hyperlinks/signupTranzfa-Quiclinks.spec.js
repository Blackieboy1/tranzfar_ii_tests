/// <reference types='cypress' />
describe('Clicking on the Quicklinks Items', () => {
    beforeEach(() => {
        //'Navigate/Launch to Tranzfar Sigup Page
        cy.visit('https://secure.tranzfar.co.uk/webapp/account/registration')

        //Assertion(URL Verification)
        cy.url().should('include', 'registration')

        //Assertion(Text on Page)
        cy.contains('Create an Account').should('be.visible')
    })

    it('Clicking the Home HyperLink', function () {
        cy.get('#menu-quick-links').children().contains('Home').should('be.visible').click()
        cy.url({ timeout: 5000 }).should('include', 'webapp')
        cy.location('protocol').should('eq', 'https:')
    })

    it('Clicking the About Us HyperLink', function () {
        cy.get('#menu-quick-links').children().contains('About Us').should('be.visible').click()
        cy.url({ timeout: 5000 }).should('include', 'webapp/about')
        cy.location('protocol').should('eq', 'https:')
    })

    it('Clicking the FAQs HyperLink', function () {
        cy.get('#menu-quick-links').children().contains('FAQs').should('be.visible').click()
        cy.url({ timeout: 5000 }).should('include', 'webapp/faqs')
        cy.location('protocol').should('eq', 'https:')
    })

    it('Clicking the Contact Us HyperLink', function () {
        cy.get('#menu-quick-links').children().contains('Contact Us').should('be.visible').click()
        cy.url({ timeout: 5000 }).should('include', 'webapp/contact')
        cy.location('protocol').should('eq', 'https:')

    })


})