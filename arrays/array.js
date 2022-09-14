// Manipulando arrays 

let techs = ['html','css','js',];

// adicionar um item no fim
techs.push('react');

// adicionar no começo
techs.unshift('sql');

// remover no fim
techs.pop();

// remover no começo
techs.shift();

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2);

// encontrar a posição de um elemento no array
let index = techs.indexOf('html');

console.log(index);
console.log(techs);