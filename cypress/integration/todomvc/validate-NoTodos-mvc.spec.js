/// <reference types='cypress'/>
describe('Validate No todo added:Non exists', () => {

    it('Lauch Todomvc site', function () {
        cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=500')
        cy.location('protocol').should('eq', 'http:')
        cy.url().should('include', 'delay-new-todo')
        cy.contains('todos').should('be.visible')
    })
    it('Add a Todo', function () {
        cy.get('.new-todo').type('This is the 1st Todo{enter}')
        //cy.contains('This is the 1st Todo', { timeout: 5000 }).should('be.visible')
        cy.get('label').should('have.text', 'This is the 1st Todo').should('be.visible')
        cy.get('.toggle').should('not.be.checked')

        cy.get('.new-todo').type('This is the 2nd Todo{enter}')
        cy.get('.view').first().should('have.text', 'This is the 2nd Todo', { timeout: 5000 }).should('be.visible')

        cy.contains('Active').should('not.be.disabled').should('be.visible')
    })
    it('Mark todo as Completed', () => {
        cy.get('.view').eq(1).contains('This is the 1st Todo').get('input[type="checkbox"]').eq(2).click()
        cy.get('input[type="checkbox"]').eq(2).should('be.checked')
        cy.get('label', { timeout: 6000 }).eq(1).should('have.css', 'text-decoration-line', 'line-through')

        //cy.contains('This is the 1st Todo').get('.toggle').eq(2).check()  

        cy.contains('This is the 2nd Todo').get('.toggle').first().check()
        cy.get('.toggle').first().should('be.checked')
        //cy.get(':nth-child(1) > .view > .toggle').should('be.checked')
        cy.get('label').first().should('have.css', 'text-decoration-line', 'line-through')

        cy.contains('Completed').should('be.visible').click()

    })
    it('Clear all todos and Validate non exists', () => {
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')

    })
})