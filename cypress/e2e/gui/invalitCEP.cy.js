describe('SuperFrete', () => {
    before(() => {
        cy.clearAjust();
    });

    it('Validar mensagem de erro sem informar o CEP', () => {
        cy.preencher('2','11','16')

        cy.get('#destinationPostcode').type('05407-002');

        // Clique em "CALCULAR FRETE COM DESCONTO"
        cy.get('[data-cy="calculator-submit"]').contains('CALCULAR FRETE COM DESCONTO').click();

        // Verificar a mensagem de erro
        cy.get('#originPostcode-helper-text').should('contain', 'CEP de origem é obrigatório');

    });
});