describe('Cálculo do SuperFrete', () => {
    before(() => {
        // Limpar cookies e armazenamento local
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.viewport(1366, 768); // resolução da tela

        // Acessar a URL e aguardar 10 segundos
        cy.visit('/');
        cy.wait(10000);
    });

    it('Validação do fluxo principal de cálculo do SuperFrete', () => {
        // preenchimento do formulário
        cy.get('#originPostcode').type('08090-284');

        cy.preencher('2','11','16');
        
        cy.get('#destinationPostcode').type('05407-002');

        cy.get('[data-cy="calculator-submit"]').contains('CALCULAR FRETE COM DESCONTO').click();
        cy.wait(5000);

        cy.get('body').contains('Mini Envios');
        cy.get('body').contains('PAC');
        cy.get('body').contains('SEDEX');
    });


});
