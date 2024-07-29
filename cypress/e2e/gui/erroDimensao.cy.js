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

    it('Validar mensagens de erro para dimensões inválidas', () => {
        cy.get('#originPostcode').type('08090-284');

        cy.preencher('0.3', '7', '10')

        cy.get('#destinationPostcode').type('05407-002');

        cy.get('[data-cy="calculator-submit"]').contains('CALCULAR FRETE COM DESCONTO').click();

        // Verificando as mensagens de erro
        cy.get('#packageHeight-helper-text').should('contain', 'Altura mínima 0.4 cm');
        cy.get('#packageWidth-helper-text').should('contain', 'Largura mínima 8 cm');
        cy.get('#packageDepth-helper-text').should('contain', 'Comprimento mínimo 13 cm');
    });
});