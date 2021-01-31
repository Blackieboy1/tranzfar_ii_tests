//Given I lunch Conduit Login page
Given('Lauch Singin Page', function () {
    cy.visit('https://react-redux.realworld.io/#/login')
    //Assertions
    cy.url().should('include', 'login')
    cy.location('hash').should('include', '#/login')
    cy.get('.text-xs-center').contains('Sign In').should('be.visible')
})
//When I enter a Username and Password
When('Enter Signin Details', () => {
    cy.get('input[type="email"]').type('ralphs@techie.com')
    cy.get('input[placeholder="Password"]').type('Password1')  
})
//And I click on the Signin button.
When('Click Signin', ()=> {
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    //Assertions
    cy.location('hash').should('include', '#/?')
    cy.contains('New Post').should('be.visible')
})
//Then Your feed text should be displayed
Then('Assertion Displayed', function () {
    cy.contains('Your Feed').should('be.visible')
})