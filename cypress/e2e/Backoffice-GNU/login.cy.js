/// <reference types="Cypress"/>

describe('Teste Funcional de Login', () => {
    it('Entrar no site e fazer login', () => {
        cy.visit("https://gnu-backoffice.vercel.app/")

        cy.get('#email')
            .should('not.be.disabled')
            .should('not.have.attr', 'disabled')
        cy.get('#email')
            .click()
        cy.get('#email')
            .type('guilherme.machado@digitalbusiness.com.br')

        cy.wait(500)

        cy.get('#password').type('GNU@123g')
        cy.get('.MuiButton-root')
            .click()
    })
})

   //.should('not.have.attr', 'disabled')
       // cy.get('#email').invoke('removeAttr', 'disabled')