/// <reference types="Cypress"/>

describe('Teste Funcional de Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('.title').should('contain','Products')
    })

    it('Não deve realizar login com email incorreto', () => {
        cy.login('incorreto', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        
    })

    it('Não deve realizar login com senha incorreta', () => {
        cy.login('standard_user', 'incorreto')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
});