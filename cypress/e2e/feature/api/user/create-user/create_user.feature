Feature: Criar usuário na API
  Como um sistema
  Quero enviar requisições de criação de usuário
  Para validar que o endpoint funciona corretamente

  Scenario: Criar usuário com sucesso
    Given Dado que eu tenho os dados de um novo usuário
    When  E envio a requisição de criação no endpoint
    Then O usuário deve ser criado com sucesso e a api deve retornar um status code 201