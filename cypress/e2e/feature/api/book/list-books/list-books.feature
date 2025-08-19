Feature: Listar livros disponíveis
  Como QA
  Quero listar todos os livros disponíveis na API
  Para validar se a API retorna os livros corretamente

  Scenario: Listar todos os livros disponíveis
    Given Dado que eu tenha acesso à API de livros e faço uma requisição GET para listar os livros
    Then Então a resposta deve retornar status 200 com os livros disponíveis
    