# Desafio  1 de Testes de API 
## Como baixar e rodar o projeto

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Acesse a pasta do projeto:

```bash
cd seu-repositorio
```

Instale as dependências necessárias:

```bash
# Instalar as dependencias do cypress
npm install

# Instalar o Cucumber Preprocessor para Cypress
npm install -D @badeball/cypress-cucumber-preprocessor

# Instalar o esbuild + preprocessor para integração
npm install -D @bahmutov/cypress-esbuild-preprocessor esbuild
```

Rodar os testes no modo interativo:

```bash
crie o arquivo cypress.env.json para os dados sensiveis
npx cypress open
```

Rodar os testes no modo headless:

```bash
npx cypress run
```

# Desafio  1 - Testes de API 

## Descrição do Projeto

Este projeto é um desafio de automação de testes de API utilizando **Cypress** com **Cucumber/BDD**, visando validar funcionalidades do **DemoQA BookStore API**, incluindo criação de usuários, geração de tokens e consulta de livros alugados.

O foco principal foi testar **Happy Path** das APIs e demonstrar boas práticas em testes automatizados.

---

## Arquitetura e Organização

* **Cypress + Cucumber**: permite escrever testes de API de forma legível e estruturada usando **Gherkin**.
* **Page Actions (sem Page Objects)**:

  * Optei por **não usar Page Objects**, pois Page Object em Cypress é considerado ruim porque adiciona complexidade desnecessária, atrapalha a legibilidade e não se encaixa no fluxo natural Cypress que prefere o uso de comandos customizados + seletores diretos, mantendo testes limpos e fáceis de manter.
  * Usei uma versão **Page Actions**,  visando simplificar a manutenção e reutilização do código.
  * Essa abordagem visa simplificar tudo, mas pode gerar um **excesso de pastas e arquivos** quando o projeto cresce.

---

## Token e Autenticação

* Para realizar requisições autenticadas, é necessário gerar um token de usuário.
* **Observação**: DemoQA geralmente cria tokens com **validade curta** (algumas horas ou dias).
* Se o token expirar, qualquer requisição retornará `401 Unauthorized`.
* Problema comum em **CI/CD**: o token precisa ser gerado e adicionado automaticamente à requisição, caso contrário os testes falharão..

## Dicas de uso:
1. Crie um usuário via teste de criação de usuário.
2. O `userId` será retornado no console. Esse dado, junto com o `userName` e o `password`, deve ser armazenado dentro do arquivo **`cypress.env.json`**, garantindo a **segurança das informações sensíveis**.
3. O `token` **não deve ser inserido manualmente** no `cypress.env.json`. Ele deve ser gerado dinamicamente através da API de **Generate Token**, usando o `userName` e o `password`.
4. O arquivo **`cypress.env.json`** é o local adequado para manter informações como `userId`, `userName` e `password`. Isso protege os dados, evita exposição no código e mantém os testes organizados.

👉 Assim, os dados sensíveis ficam **fora dos testes diretos** e seguros no `cypress.env.json`, enquanto o `token` deve ser colocado manualmente cada vez que gera um novo token para os testes **que requer autorização funcionarem** antes da execução dos testes.

## Exemplo do `cypress.env.json`

```json
{
  "baseUrl": "https://demoqa.com/swagger/",
  "password": "Testeg@123",
  "userId": "922c396f-040f....",
  "userName": "Fulano",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
}
```

`
## Ambiente de Testes

* **Navegador**: Microsoft Edge v139
* **Sistema Operacional**: Windows 11
* **Cypress**: versão 14.5.0

---

## Tipo de Testes

* Apenas **Happy Path** foi implementado nesta primeira versão.
* Foco em validar os fluxos principais e a integração entre criação de usuário, geração de token e consulta de dados.

---

## Observações Adicionais

* Os testes foram estruturados para serem **legíveis e fáceis de manter**.
* Evitei Page Objects para simplificar, mas organizei **Page Actions** mantendo a reutilização e clareza do código.
* Tokens expirados podem gerar falhas inesperadas em testes automatizados, especialmente em **CI/CD**.

# Desafio  2 - Testes de Frontend 

