Cypress.Commands.add('preencher', (altura, largura, compri) =>{
    cy.get('#object_format').click();
    cy.get('.Mui-selected').click();

    cy.get('#weight').click();
    cy.get('[data-value="0.3"]').click();

    cy.get('#packageHeight').type(altura);
    cy.get('#packageWidth').type(largura);
    cy.get('#packageDepth').type(compri);
})

Cypress.Commands.add('clearAjust', () =>{
    // Limpar cookies e armazenamento local
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.viewport(1366, 768); // resolução da tela

    // Acessar a URL e aguardar 10 segundos
    cy.visit('/');
    cy.wait(10000);
})