const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Deve somar dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve subtrair dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.sub(5, 3)).to.equal(2);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve multiplicar dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.mult(5, 3)).to.equal(15);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve dividir dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.div(6, 3)).to.equal(2);
      expect(calculator.div(6, 3)).to.be.a("number");
    });

    it('Deve ser feito a raiz quadrada de um numero inteiro e retornar uma variavel number', () => {
      expect(calculator.sqrt(49)).to.equal(7);
      expect(calculator.div(6, 3)).to.be.a("number");

    });
});
