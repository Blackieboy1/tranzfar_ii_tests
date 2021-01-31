/// <reference types='cypress' />
describe('Conduit Login', () => {
    it('Launch SingIn Page', function () {
        cy.visit('https://react-redux.realworld.io/#/login')

        //Assertions
        cy.url().should('include', 'login')
        cy.location('hash').should('include', '#/login')
        cy.get('.text-xs-center').contains('Sign In').should('be.visible')
    })
    it('Enter sign in details and Sign in', () => {
        //cy.get(':nth-child(1) > .form-control').type('ralphs@techie.com')
        cy.get('input[type="email"]').type('ralphs@techie.com')
        //cy.get(':nth-child(2) > .form-control').type('Password1')
        cy.get('input[placeholder="Password"]').type('Password1')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

        //Assertions
        cy.location('hash').should('include', '#/?')
        cy.contains('New Post').should('be.visible')
    })

})