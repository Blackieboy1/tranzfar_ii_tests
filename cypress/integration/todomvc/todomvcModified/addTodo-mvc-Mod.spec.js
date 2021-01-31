/// <reference types='cypress'/>

import { Todopage } from "../../../page-ObjectC/todo-PageC"

describe('Create Todos', () => {
    Cypress.config('pageLoadTimeout', 10000)
    
const todopage = new Todopage()

//before(() => {
    //Lauch Todomvc page    
    todopage.navigate()     
    
    })
    it('Add a Todo', function () {
        todopage.addTodo('This is the 1st Todo')       
        cy.contains('This is the 1st Todo').should('be.visible')
        cy.get('label').should('have.text', 'This is the 1st Todo')

        todopage.addTodo('This is the 2nd Todo')       
        cy.get('label').first().should('have.text', 'This is the 2nd Todo').should('be.visible')       

        //Assertion
        cy.contains('Active').should('not.be.disabled').should('be.visible')
        cy.get('.todo-list li').should('have.length', 2)
    })
//})