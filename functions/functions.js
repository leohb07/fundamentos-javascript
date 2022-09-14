// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
  console.log(number1 + number2);
}

sum(2, 8); // arguments - argumentos

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maça');
console.log(copo);

// Call the function e gravo em uma variável
// Or create a new function in the variável como anonymous