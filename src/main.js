module.exports = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mult(a, b) {
    return a * b;
  },
  div(a, b) {
    return (b === 0) ? 'não é possível dividir por zero!' : a / b;
  },
};
