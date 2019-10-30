/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se o número não por divisível por 3 nem por 5, retorna o número

*/

import { expect } from 'chai';
import fizzbuzz from '../src/main';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzbuzz(6)).to.be.equal('Fizz');
    expect(fizzbuzz(12)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzbuzz(10)).to.be.equal('Buzz');
    expect(fizzbuzz(20)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return 7 when multiple of neither 3 or 5', () => {
    expect(fizzbuzz(7)).to.be.equal(7);
    expect(fizzbuzz(13)).to.be.equal(13);
  });
})
