/// <reference types='cypress'/>
export class Todopage {
    navigate() {
        cy.SignInTodo()    
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText +'{enter}')        
        cy.get('.toggle').should('not.be.checked')

    }
    
    toggletodo() {        
        cy.get('.toggle').first().check()
        cy.get('.toggle').first().should('be.checked')        
        cy.get('label').first().should('have.css', 'text-decoration-line', 'line-through')

        cy.get('.view').eq(1).contains('This is the 2nd Todo').get('input[type="checkbox"]').eq(2).click()
        cy.get('input[type="checkbox"]').eq(2).should('be.checked')
        cy.get('label').eq(1).should('have.css', 'text-decoration-line', 'line-through')
    }
    allFilter() {
        cy.get('.filters').contains('All').should('be.visible').click()
        cy.get('.todo-list li').should('have.length', 3)

    }
    completedFilter() {
        cy.get('.filters').contains('All').should('be.visible').click()
        cy.get('.todo-list li').should('have.length', 3)

    }
    

}