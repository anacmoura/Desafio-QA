# Como baixar e rodar o projeto

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

## Ambiente de Teste

* **Navegador**: Microsoft Edge v139
* **Sistema Operacional**: Windows 11
* **Cypress**: versão 14.5.0
---

## Observações Gerais

1. **Instabilidade do site:**

   * O DemoQA apresentou **comportamento instável**, incluindo **erros de JavaScript cross-origin** que não são bugs do teste.
   * Cypress falha o teste automaticamente ao detectar erros JS na aplicação.

2. **Selectors e elementos dinâmicos:**

   * Alguns elementos possuem **selectores instáveis ou dinâmicos**, dificultando a automação confiável.
   * Foi necessário adaptar os comandos Cypress para lidar com esses casos.

3. **Cucumber não utilizado:**

   * Optou-se por **não usar Cucumber/BDD no frontend** devido à instabilidade do site.
   * Arquivos de feature geraram erros e não puderam ser utilizados.

4. **Estruturas condicionais (`if/else`):**

   * Foram utilizadas apenas quando necessário, mas `if/else` não é prática comum em testes automatizados.

5. **Logs e anúncios:**

   * Anúncios e pop-ups afetaram a **legibilidade dos logs** no Cypress, dificultando a identificação de falhas detalhadas.

6. **Erros observados:**

   * **Script error:**

     ```
     Cypress detected that an uncaught error was thrown from a cross origin script.
     ```

     * Este erro é originado pelo site DemoQA e não pelo teste.

7. **Teste do drag and drop:**

   *Os testes do drag and drop já estão na ordem crescente no site e o teste pede para por na ordem crescente.
   link do print: https://jam.dev/c/cbc4fdaf-d1b5-41c6-8cd6-c055e426749c
---

## Estrutura do teste

Perfeito! Vou atualizar essa parte do README explicando melhor a estrutura do teste em Cypress, incluindo **`describe`**, **`beforeEach`**, **`it`** e **Page Actions**:

---

## Estrutura do teste

* **`describe`**:

  * Agrupa um conjunto de testes relacionados a uma funcionalidade ou página específica do DemoQA.
  * Exemplo: `describe("Sortable DemoQA", () => { ... })` define todos os testes relacionados à ordenação de elementos.

* **`beforeEach`**:

  * Executado antes de cada `it`.
  * Usado para **visitar a página principal** e **navegar até a seção desejada**, garantindo que cada teste comece em um estado consistente.

* **`it`**:

  * Define um teste individual, validando uma funcionalidade específica.
  * Exemplo: validar se elementos estão ordenados corretamente, se botões funcionam ou se componentes estão visíveis.

* **Page Actions**:

  * São funções que representam **ações do usuário na página**, como clicar, arrastar ou preencher campos.
  * Promovem **reuso de código e clareza**, evitando duplicação de comandos dentro dos testes.

## Conclusão

* Os testes demonstram a capacidade de **automatizar interações básicas** no site DemoQA, mesmo em **ambiente instável**.
* Problemas como erros JS, anúncios e selectores dinâmicos podem gerar **flakiness** nos testes.
