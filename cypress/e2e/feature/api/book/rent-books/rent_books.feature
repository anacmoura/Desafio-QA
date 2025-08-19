Feature: Alugar dois livros de livre escolha
  Como um usuário da API de livros
  Quero alugar dois livros de livre escolha
  Para que eu possa testar o processo de aluguel de livros via API

  Scenario: Alugar dois livros disponíveis
    Given Dado que eu tenha acesso à API de livros
    When  Quando eu selecionar dois livros disponíveis de livre escolha pelo ID
    Then Então a resposta deve retornar status 200 e confirmar que os dois livros foram alugados com sucesso