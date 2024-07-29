describe('SuperFrete', () => {
    before(() => {
        // Limpar cookies e armazenamento local
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.viewport(1366, 768); // resolução da tela

        // Acessar a URL e aguardar 10 segundos
        cy.visit('/');
        cy.wait(10000);
    });

    it('Validar mensagem de erro sem informar o CEP', () => {
        cy.get('#object_format').click();
        cy.get('.Mui-selected').click();

        cy.get('#weight').click();
        cy.get('[data-value="0.3"]').click();

        cy.get('#packageHeight').type('2');
        cy.get('#packageWidth').type('11');
        cy.get('#packageDepth').type('16');

        cy.get('#destinationPostcode').type('05407-002');

        // Clique em "CALCULAR FRETE COM DESCONTO"
        cy.get('[data-cy="calculator-submit"]').contains('CALCULAR FRETE COM DESCONTO').click();

        // Verificar a mensagem de erro
        cy.get('#originPostcode-helper-text').should('contain', 'CEP de origem é obrigatório');

    });
});