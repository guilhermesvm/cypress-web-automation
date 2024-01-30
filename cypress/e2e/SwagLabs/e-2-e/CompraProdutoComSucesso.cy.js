/// <reference types="Cypress"/>


describe('Teste E2E Compra com Sucesso', () => {
    it('Fluxo feliz', () => {
        //Login
        cy.login('standard_user', 'secret_sauce')
        cy.get('.title').should('contain','Products');

        //Ordenando produtos do menor para o maior valor
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');

        //Validando a ordenação
        cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie');
        cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light');
        cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt');

        //Adicionando produtos no carrinho
        cy.contains('Sauce Labs Onesie').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bike Light').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        //Checando quantos produtos foram adicionados no carrinho
        cy.get('.shopping_cart_badge').should('have.text','3')
        cy.get('.shopping_cart_badge').click()

        //Checando no carrinho
        cy.verificaProdutos();
        cy.get('[data-test="checkout"]').click();

        //Checkcout
        cy.get('[data-test="firstName"]').type('Guilherme');
        cy.get('[data-test="lastName"]').type('Machado');
        cy.get('[data-test="postalCode"]').type('9999999999');
        cy.get('[data-test="continue"]').click();

        //Verificando produtos no checkout
        cy.verificaProdutos();

        //Verificando o preço
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69');

        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
        cy.get('[data-test="back-to-products"]').click()
        

    });
});