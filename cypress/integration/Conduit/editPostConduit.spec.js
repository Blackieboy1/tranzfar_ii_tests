/// <reference types='cypress' />
describe('Conduit New Post', () => {
    it('SingIn', function () {
        cy.visit('https://react-redux.realworld.io/#/login')

        //Assertions
        cy.url().should('include', 'login')
        cy.location('hash').should('include', '#/login')
        cy.get('.text-xs-center').contains('Sign In').should('be.visible')
    })
    it('Enter sign in details', () => {
        //cy.get(':nth-child(1) > .form-control').type('ralphs@techie.com')
        cy.get('input[type="email"]').type('ralphs@techie.com')
        //cy.get(':nth-child(2) > .form-control').type('Password1')
        cy.get('input[placeholder="Password"]').type('Password1')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

        //Assertions
        cy.location('hash').should('include', '#/?')
        cy.contains('New Post').should('be.visible')
    })
    it('New Post', () => {
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type('Post Title1')
        cy.get('input[placeholder="What\'s this article about?"]').type('Learning Cypress')
        //cy.get(':nth-child(3) > .form-control')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('This is a test Content')
        cy.contains('Publish Article').should('be.visible').click()
        cy.url().should('include', 'article')
    })
    it('Edit a Post', () => {
        cy.get('.btn').contains(' Edit Article').should('be.visible').click()
        cy.wait(5000)
        cy.hash().should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').clear().type('Edited Post Title')
        cy.contains('Publish Article').should('be.visible').click()
        cy.hash().should('include', '#/article')
        cy.contains('Edited Post Title').should('be.visible')

    })
})