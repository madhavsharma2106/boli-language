const all = (fn) => (...list) => list.reduce(fn);

const jama = all((a, b) => a + b);
const ghata = all((a, b) => a - b);
const guna = all((a, b) => a * b);
const bhag = all((a, b) => a / b);
const sapeksh = all((a, b) => a % b);
const log = console.log;

const environment = {
  jama,
  ghata,
  guna,
  bhag,
  sapeksh,
  log,
  pi: Math.PI,
  adhiktam(...args) {
    return Math.max(...args);
  },
};

module.exports = { environment };
