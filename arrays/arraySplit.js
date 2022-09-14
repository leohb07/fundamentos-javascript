// Manipulando arrays 

// gerei um uma frase e separei ela por espaço

let phrase = "Eu quero ser um grande programador";
let myArray = phrase.split(" "); 

// Com o join, é possível fazer união com algum carácter
let phraseWithUnderscore = myArray.join('_');

console.log(phraseWithUnderscore);


// procurando alguma palavra dentro de uma frase
let phrase2 = 'Eu quero ser um jogador';
console.log(phrase2.includes('jogador'));
// includes é case sensitivity