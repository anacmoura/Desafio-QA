Feature: Autorização de usuário
  Como um sistema
  Quero verificar se um usuário está autorizado
  Para garantir que ele possa acessar funcionalidades protegidas

  Scenario: Confirmar que o usuário está autorizado
    Given Dado que eu tenho um usuário válido para autorização e envio a requisição de autorização
    Then Então a api deve retornar um status 200 com a mensagem true