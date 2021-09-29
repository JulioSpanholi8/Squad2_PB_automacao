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
        if (isNaN(a)) {
            return 'Não existe fatorial de um texto';
        }
        if (!Number.isInteger(a) || a < 0) {
            return 'Não existe fatorial de de 0 e nao natural';
        }
        if (a == 0 || a == 1) {
            return 1;
        }
        var rs = a;
        var aux = a - 1;
        for (var i = aux; i > 1; i--) {
            rs *= i;
        }
        return rs;
    }
    potential(a,b){
      return Math.pow(a,b)
    }
}