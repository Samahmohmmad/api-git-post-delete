/// <reference types= "cypress" />
describe('ApiTesting', () => {

  
  const authorname = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Helen',
    'Isaac',
    'Jack'
  ];
  
  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Williams',
    'Jones',
    'Davis',
    'Miller',
    'Wilson',
    'Moore'
  ];
  const  RandomISBN = Math.floor(Math.random()*15550)
  const RandomAISLE = Math.floor(Math.random()*17550)
  const Randomauthor =Math.floor(Math.random()*authorname.length)
   
    it('Test Post Method', () => {
  
      const requestBody = {
        name:"Qa private Zoom",
        isbn:RandomISBN,
        aisle:RandomAISLE,
        author:authorname[Randomauthor]
        }
  
      cy.request({
        method : "POST",
        url:"https://rahulshettyacademy.com/Library/Addbook.php",
        body:requestBody
      }).then((Response)=>{
        cy.log(Response.body)
        expect(Response.status).to.eq(200)
        expect(Response.body.Msg).to.eq("successfully added")
      })
    })
    it('Test Get Method', () => {
      cy.request({
        method : "GET",
        url :`https://rahulshettyacademy.com/Library/GetBook.php?ID=${RandomISBN}${RandomAISLE}`,
  
      }).then((Response)=>{
        cy.log(Response.body[0].book_name)
        expect(Response.status).to.eq(200)
        expect(Response.body[0].author).to.eq(`${authorname[Randomauthor]}`)
  
      })
    })
      it('Test Get Method', () => {
        const requestBody = {
          "ID": `${RandomISBN}${RandomAISLE}`
        }
        cy.request({
          method : "DELETE",
          url :"https://rahulshettyacademy.com/Library/DeleteBook.php",
         body:requestBody
        }).then((Response)=>{
          cy.log(Response.body)
          expect(Response.status).to.eq(200)
          expect(Response.body.msg).to.eq("book is successfully deleted");
    })
      })
})
      