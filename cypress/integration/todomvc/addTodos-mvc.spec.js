/// <reference types='cypress'/>
describe('Create Todos', () => {
    it('Lauch Todomvc site', function () {
        cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=500')
        cy.location('protocol').should('eq', 'http:')
        cy.url().should('include', 'delay-new-todo')
        cy.contains('todos').should('be.visible')
    })
    it('Add a Todo', function () {
        cy.get('.new-todo').type('This is the 1st Todo{enter}')
        cy.contains('This is the 1st Todo', { timeout: 5000 }).should('be.visible')
        cy.get('label').should('have.text', 'This is the 1st Todo')
        cy.get('.new-todo').type('This is the 2nd Todo').type('{enter}')
        cy.contains('This is the 2nd Todo', { timeout: 5000 }).should('be.visible')
        cy.get('label').first().should('have.text', 'This is the 2nd Todo')
        cy.contains('Active').should('not.be.disabled').should('be.visible')
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.toggle').should('not.be.checked')
    })
})