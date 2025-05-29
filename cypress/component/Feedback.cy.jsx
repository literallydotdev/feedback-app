import React from "react";
import App from "../../src/App";

describe('Frontend Component Testing', () => {
       
  it('App should mount without error ', () => {
    cy.mount(<App />)
    cy.get('.feedback-button').then(($btn)=>{
           const txt = String($btn.text())
           expect(txt).to.eq("Feedback")
           $btn.click()
    })
    
    cy.get('.form-input').type("myname@gmail.com")
    cy.get('#msg').type("Interesting docs")
    cy.intercept('','success')
    cy.get('button[type="submit"]').click()  
    
  })
})