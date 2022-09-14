// function scope
let subject;

function createThink() {
  subject = 'study';
  return subject;
}

console.log(subject);
console.log(createThink())
console.log(subject);
// O valor da variável só irá ser criado quando for executado a função

// Quando passamos a variável para a função, vai ser trocado apenas dentro da função o valor
// Uma função sem retorno torna-se undefined 

// Quando não passamos parâmetros para a função, 
// ela pega a variável e cria o novo valor, passando para fora do escopo também