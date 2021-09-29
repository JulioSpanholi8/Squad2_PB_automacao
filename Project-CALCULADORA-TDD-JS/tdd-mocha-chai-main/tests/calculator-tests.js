const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Should sub two positive integers', () => {
      expect(calculator.sub(5, 3)).to.equal(2);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Should mult two positive integers', () => {
      expect(calculator.mult(5, 3)).to.equal(15);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve fazer a divisao de dois numeros inteiros', () => {
      expect(calculator.div(6, 3)).to.equal(2);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve ser feito a raiz quadrada de um numero inteiro', () => {
      expect(calculator.sqrt(49)).to.equal(7);

    });
});
