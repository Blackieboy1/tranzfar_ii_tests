/// <reference types='cypress'/>
describe('Filtering tests', () => {
    

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
        cy.get('.toggle').should('not.be.checked')

        cy.get('.new-todo').type('This is the 2nd Todo{enter}')
        cy.get('.view').first().should('have.text', 'This is the 2nd Todo', { timeout: 5000 }).should('be.visible')

        cy.get('.new-todo').type('This is the 3rd Todo{enter}')
        cy.get('.view').first().should('have.text', 'This is the 3rd Todo')
        cy.get('.toggle').eq(2).should('not.be.checked')
        cy.get('.todo-list li').should('have.length', 3)
        cy.contains('Active').should('not.be.disabled').should('be.visible')
    })
    it('Toggle todo', () => {
        cy.get('.toggle').first().check()
        cy.get('.toggle').first().should('be.checked')        
        cy.get('label').first().should('have.css', 'text-decoration-line', 'line-through')

        cy.get('.view').eq(1).contains('This is the 2nd Todo').get('input[type="checkbox"]').eq(2).click()
        cy.get('input[type="checkbox"]').eq(2).should('be.checked')
        cy.get('label').eq(1).should('have.css', 'text-decoration-line', 'line-through')

    })
    it('Completed filter', () => {

        cy.contains('Completed').should('be.visible').click()
        cy.get('.todo-list li').should('have.length', 2)
        cy.contains('1 item left').should('be.visible')
        cy.contains('Clear').should('have.text', 'Clear completed')

    })
    it('Active filter', () => {
        cy.contains('Active').should('be.visible').click()
        cy.contains('1 item left').should('be.visible')
        cy.get('.todo-list li').should('have.length', 1)

    })
    it('All filter', () => {
        cy.get('.filters').contains('All').should('be.visible').click()
        cy.get('.todo-list li').should('have.length', 3)

        //selected  

    })
    it('Clear Completed Todos', () => {
        cy.get('.toggle').eq(1).should('be.checked')
        cy.contains('This is the 3rd Todo').get('.toggle').eq(1).uncheck()
        cy.contains('Clear').should('be.visible').click()
        cy.get('.todo-count').should('have.text', '2 items left')
        cy.get('.todo-list li').should('have.length', 2)

    })

})