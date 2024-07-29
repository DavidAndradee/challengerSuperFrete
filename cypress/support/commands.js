Cypress.Commands.add('preencher', (altura, largura, compri) =>{
    cy.get('#object_format').click();
    cy.get('.Mui-selected').click();

    cy.get('#weight').click();
    cy.get('[data-value="0.3"]').click();

    cy.get('#packageHeight').type(altura);
    cy.get('#packageWidth').type(largura);
    cy.get('#packageDepth').type(compri);
})
