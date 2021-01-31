///<reference types='cypress'/>
describe('Conduit New Post', () => {
    Cypress.config('pageLoadTimeout', 10000)
    it('SingIn', function () {
        cy.SignInConduit()
        
    })  
    it('New Post', () => {
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type('Post Title1')
        cy.get('input[placeholder="What\'s this article about?"]').type('Learning Cypress')
        //cy.get(':nth-child(3) > .form-control')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('This is a test Content')
        cy.contains('Publish Article').should('be.visible').click()
        cy.wait(6000)
        cy.get(':nth-child(4) > .nav-link').click({ force: true })
        //cy.contains('CypressAuto', {time:10000}).should('not.be.disabled').click({force:true})
        cy.location('hash').should('include', '#/@CypressAuto')
        cy.contains('My Articles').should('be.visible')

    })
    it('Click, unclick fav icon', () => {
        cy.get('.ion-heart').first().click()
        //cy.wait(6000)
        cy.get('.nav-link').contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        
        cy.get('.ion-heart').first().click()
        cy.reload() 
        cy.get('.article-preview').contains('No articles are here... yet.').should('be.visible')
        cy.go(-1)
        cy.url().should('include','CypressAuto')
        cy.contains('No articles are here... yet.').should('not.be.visible')

    })
    it('Delete Post', function() {        
       cy.get('.preview-link').contains('Read more...').should('be.visible').click()
        //cy.get('.preview-link').contains('Post Title1').should('be.visible').click()
        //cy.wait(6000)
        //cy.get('.btn').contains(' Delete Article').should('be.visible')

    })
})