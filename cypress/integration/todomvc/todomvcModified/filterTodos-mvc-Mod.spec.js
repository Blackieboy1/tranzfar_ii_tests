/// <reference types='cypress'/>

import { Todopage } from "../../../page-ObjectC/todo-PageC"

describe('Filtering tests', () => {
    Cypress.config('pageLoadTimeout', 10000)
    
    const todopage = new Todopage()
    
    before(() => {
        //todopage.navigate()
        cy.SignInTodo()  
    })
              
    
    it('Add a Todo', function () {
        todopage.addTodo('This is the 1st Todo')       
        cy.contains('This is the 1st Todo').should('be.visible')
        cy.get('label').should('have.text', 'This is the 1st Todo')

        todopage.addTodo('This is the 2nd Todo')       
        cy.get('label').first().should('have.text', 'This is the 2nd Todo').should('be.visible') 

        todopage.addTodo('This is the 3rd Todo')
        cy.get('.view').first().should('have.text', 'This is the 3rd Todo').should('be.visible')
        
        //Assertion
        cy.get('.todo-list li').should('have.length', 3)
        cy.contains('Active').should('not.be.disabled').should('be.visible')
    })
    it('Toggle todo', () => {
        todopage.toggletodo()
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
       todopage.allFilter() 

    })
    it('Clear Completed Todos', () => {
        todopage.allFilter() 
        cy.get('.toggle').eq(1).should('be.checked')
        cy.contains('This is the 3rd Todo').get('.toggle').eq(1).uncheck()
        cy.contains('Clear').should('be.visible').click()
        cy.get('.todo-count').should('have.text', '2 items left')
        cy.get('.todo-list li').should('have.length', 2)

    })

})