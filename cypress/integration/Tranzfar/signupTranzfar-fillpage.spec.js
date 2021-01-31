/// <reference types='cypress' />
describe('Fill in the fields in the form', () => {
   before(() => {
      //'Navigate to Tranzfar Sigup Page
      cy.visit('https://secure.tranzfar.co.uk/webapp/account/registration')

      //Assertion(URL Verification)
      cy.url().should('include', 'registration')

      //Assertion(Text on Page)
      cy.contains('Create an Account').should('be.visible')

   })

   it('Start filling in the signup form field', function () {

      //('Enter First Name')
      cy.get('#firstName').type('John')

      //('Enter Last Name')
      cy.get('#lastname').type('Masons')
      cy.wait(1000)

      //('Enter Email Address')
      cy.get('#email').type('tvveyvyv@sharklasers.com')

      //('Enter Password')
      cy.get('#password').type('Passwordtranzfar1')

      //('Confirm Password')
      cy.get('#confirm_password').type('Passwordtranzfar1')
      cy.wait(2000)

      //('Enter Date Of Birth')
      cy.get('#birthdate').type('12-11-1970{enter}')

      //('Enter Gender')
      cy.get('#maleRadio').check()

      //('Enter Telephone')
      cy.get('#Mobile').type('7987564908')
      cy.wait(2000)

      //('Enter Address 1')
      cy.get('#address1').type("7 Avocet Mews")

      //('Enter Address 2')
      cy.get('#address2').type("Thamesmead West")

      //('Enter city')
      cy.get('#city').type("London")
      cy.wait(2000)

      //('Enter county')
      cy.get('#county').type("Greenwich")

      //('Enter PostCode')
      cy.get('#postcode').type("SE28 0DA")

      //Assertion (Legal text is visible)
      // cy.get('input{type="checkbox"}')
      cy.get(':nth-child(15) > label').contains('By clicking Sign Up, you agree to our Terms and confirm that you have read our Privacy Policy').should('be.visible')

      //('Tick the Terms$Condition box')
      cy.get('#terms').check()

      //('submitt form Signup button')
      cy.get('.btn').contains('Sign Up').should('not.be.disabled')//.click()

   })

})
