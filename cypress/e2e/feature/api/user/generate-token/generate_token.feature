Feature: Gerar token de acesso
  Como um sistema
  Quero gerar um token para um usuário
  Para que ele possa ser autorizado em requisições futuras

  Scenario: Gerar token de acesso para usuário válido
    Given Dado que eu solicito o token com os dados do usuario criado
    Then Então o token deve ser gerado com sucesso