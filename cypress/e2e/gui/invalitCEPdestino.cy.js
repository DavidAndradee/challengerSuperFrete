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

    it('Validar mensagem de erro ao não informar CEP de destino', () => {
        cy.get('#originPostcode').type('08090-284');
        
        cy.preencher('2','11','16')

        cy.get('[data-cy="calculator-submit"]').contains('CALCULAR FRETE COM DESCONTO').click();

        // Verificando a exibição da mensagem de erro
        cy.get('#destinationPostcode-helper-text').should('contain', 'CEP de destino é obrigatório');
    });

});