const cards:{[key:string]:string} = {
  "Documentation": "https://nextjs.org/docs",
  "Learn": "https://nextjs.org/learn",
  "Examples": "https://github.com/vercel/next.js/tree/master/examples"
}

export default describe("Home page", () => {
  before(() => {
    cy.visit("/")
  })

  for (var card in cards) {
    const url = cards[card]  

    describe(`card "${card}"`, ()=> {      

      let x:any
      beforeEach(() => {
        x = cy.get("[class*='_card_']").contains(card)
      })
      
      it(`exists`, ()=> {
        x.should("exist")
      })

      it(`has link to "${url}"`, ()=> {
        x.parent()
          .should("have.attr", "href")
          .and("eq", url)
      }) 
    })
  }

})