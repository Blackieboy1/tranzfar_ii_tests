Cypress.Commands.add('SignInConduit', () => {
    cy.visit('https://react-redux.realworld.io/#/login')

    //Assertions        
    cy.location('hash').should('include', '#/login')
    cy.get('.text-xs-center').contains('Sign In').should('be.visible')


    //Enter LoginIn details ans click signin.
    cy.get('input[type="email"]').type('ralphs@techie.com')
    cy.get('input[placeholder="Password"]').type('Password1')
    cy.get('.btn').contains('Sign in').should('be.visible').click()

    //Assertions on page load
    cy.location('hash').should('include', '#/?')
    cy.contains('New Post').should('be.visible')
})
Cypress.Commands.add('SignInTodo', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=500')
    cy.location('protocol').should('eq', 'http:')
    cy.url().should('include', 'delay-new-todo')
    cy.contains('todos').should('be.visible')    
})