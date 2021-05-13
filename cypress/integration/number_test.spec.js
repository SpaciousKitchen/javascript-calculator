
/// <reference types="cypress" />


const clickNumber = (num) => {
    for (let i = 0; i < num.length; i++) {
        cy.get('.digit').contains(`${num[i]}`).click();
    }

}

const clickOp = (op) => {
    for (let i = 0; i < op.length; i++) {
        cy.get('.operation').contains(`${op[i]}`).click();
    }

}
const go_test = (first, op, second, result) => {

    clickNumber(first);
    clickOp(op);
    clickNumber(second);
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text', `${result}`)
    cy.get('.modifier').click();

}
describe('number_test', function name() {

    it("사칙 연삭 + test!!", () => {

        cy.visit('http://localhost:8080');
        go_test('0101', '+', '022', '123');
        go_test('919', '+', '1', '920');


    })


})