# Guia de execução dos testes do desafio

Projeto utiliza Cypress para realizar testes automatizados na aplicação.
Abaixo estão as instruções necessárias para configurar o ambiente e executar os testes.

## Requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)

## Instalação

1. **Clone o repositório**

   Primeiro, clone o repositório do projeto:

   ``terminal
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ``

2. **Instale as dependências**

   Execute o comando a seguir para instalar as dependências do projeto:

   ``terminal
   npm install
   ``

## Configuração

1. **Configuração do Cypress**

   Certifique-se de que o arquivo de configuração do Cypress (`cypress.config.js`) está configurado corretamente com o `pageLoadTimeout` aumentado e o `baseUrl` definido:

   ```cypress.config.js
   module.exports = {
     pageLoadTimeout: 120000, // tempo em milissegundos (2 minutos)
     e2e: {
       setupNodeEvents(on, config) {
         // implementar funções de eventos aqui, se necessário
       },
       baseUrl: 'https://web.superfrete.com',
     }
   }
   ```

## Executando os Testes

1. **Abrir o Cypress Test Runner**

   Para abrir o Test Runner do Cypress, que se trata de uma interface mais visual para se visualizar os testes e executar, utilize o seguinte comando:

   ```terminal
   npm run cypress:open
   ```

   Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar testes individualmente, visando melhorar a visualização de cada teste, separadamente coloquei cada um em uma spec de testes facilitando a identificação.

2. **Executar os Testes em Modo Headless**

   Para executar todos os testes em modo headless (seria sem a interface gráfica), utilize o seguinte comando:

   ```terminal
   npm run cypress:run
   ```

   Esse comando pode executará e resultará no retorno dos testes no próprio cli, retornando o status na própria linha de comando.

