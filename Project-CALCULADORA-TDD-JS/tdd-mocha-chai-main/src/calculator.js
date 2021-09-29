module.exports = class Calculator {
  sum(a, b) {
    return a + b
  }
  sub(a, b) {
    return a - b
  }
    mult(a, b) {
      return a * b
    }
    div(a, b) {
      return a / b
    }
    sqrt(a) {
      return Math.sqrt(a)
    }
    fat(a){
     return Math.factorial(a)
    }
    potential(a){
      return Math.potential(a)
    }
}