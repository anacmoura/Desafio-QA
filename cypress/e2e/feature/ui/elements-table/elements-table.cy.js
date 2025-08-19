describe('Elements Table DemoQA', () => {
  beforeEach(() => {
    cy.validateUrl();
  })

  it('Escolher a opção Elements na pagina inicial e clicar no submenu web tables' , () => {
     cy.contains(".card-body", "Elements").should('be.visible').click();
     cy.contains("Web Tables").should('be.visible').click();
  })

  it('Criar um novo registro' , () => {})

  it('editar o novo registro criado ' , () => {})

   it('deletar o novo registro criado ' , () => {})
   
})