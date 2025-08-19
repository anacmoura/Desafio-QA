Feature: Recuperar detalhes do usuário incluindo livros alugados
  Como um usuário da API
  Eu quero obter os detalhes do meu usuário com os livros alugados
  Para que eu possa verificar quais livros eu aluguei

  Scenario: Listar detalhes do usuário com livros alugados
    Given Dado que eu tenho um token de usuário válido e faço uma solicitação dos detalhes de um usuario especifico usando seu ID
    Then  Então a resposta da solicitação deve incluir todos os livros alugados por esse usuario
