describe('Cálculo do SuperFrete', () => {
    before(() => {
        cy.clearAjust();
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
