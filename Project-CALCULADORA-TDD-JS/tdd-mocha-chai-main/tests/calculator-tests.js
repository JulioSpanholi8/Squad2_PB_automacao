const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Deve somar dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
      expect(calculator.sum(2, 3)).to.be.a("number");
    });

    it('Deve subtrair dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.sub(5, 3)).to.equal(2);
      expect(calculator.sub(5, 3)).to.be.a("number");
    });

    it('Deve multiplicar dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.mult(5, 3)).to.equal(15);
      expect(calculator.mult(5, 3)).to.be.a("number");
    });

    it('Deve dividir dois numeros inteiros e retornar uma variavel number', () => {
      expect(calculator.div(6, 3)).to.equal(2);
      expect(calculator.div(6, 3)).to.be.a("number");

    }); 

    it('Deve dividir um numero inteiro por uma fração', () => {
      expect(calculator.div(90, 1/3)).to.equal(270);
    })

    it('Deve verificar o resultado da divisao', () => { 
      expect(calculator.div(10, 2)).to.not.equal(4);
      expect(calculator.div(10, 2)).is.not.string;
    });


    it('Deve ser feito a raiz quadrada de um numero inteiro e retornar uma variavel number', () => {
      expect(calculator.sqrt(49)).to.equal(7);
      expect(calculator.sqrt(49)).to.be.a("number");
    });

    it('Deve ser feito a raiz quadrada de um numero inteiro negativo e nao deve ser possivel dar um resultado', () => {
      expect(calculator.sqrt(-49)).to.be.NaN;
    });

    it('Deve verificar o fatorial', () => {
      expect(calculator.fat(5)).to.equal(120);
      expect(calculator.fat(3)).to.not.equal(7);
    })

    it('Deve ser feito o fatorial de um numero inteiro e retornar uma variavel number', () => {
      expect(calculator.fat(5)).to.equal(120);
      expect(calculator.fat(5)).to.be.a("number");

    });


    it('Deve ser feito o fatorial de 0 e 1 e retornar um', () => {
      expect(calculator.fat(0)).to.equal(1);
      expect(calculator.fat(1)).to.equal(1);
 
    });

    it('Deve ser feito o fatorial de um numero negativo e retornar erro em uma variavel string', () => {
      expect(calculator.fat(-5)).to.equal("Não existe fatorial de numero nao natural");
      expect(calculator.fat(-5)).to.be.a('string');
 
    });

    it('Deve ser feito o fatorial de um texto o e retornar erro', () => {
      expect(calculator.fat('texto')).to.equal("Não existe fatorial de um texto");
      expect(calculator.fat('texto')).to.be.a('string');
 
    });

    it('Deve ser feito a potencia de dois numeros inteiros (base, expoente) e retornar uma variavel number', () => {
      expect(calculator.potential(2, 2)).to.equal(4);
      expect(calculator.potential(2, 2)).to.be.a("number");
    });

    it('Deve ser feito a potencia de uma base inteira e expoente negativo (base, expoente) e retornar uma variavel number', () => {
      expect(calculator.potential(2, -10)).to.equal(1/1024);
      expect(calculator.potential(2, -10)).to.be.a("number");
    });

   
    
});