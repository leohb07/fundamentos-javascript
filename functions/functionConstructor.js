// function constructor

// expressão new
// criar um novo objeto
// this keyword

function Person(name, age) {
  this.name = name;
  this.walk = function() {
    return 'andando';
  }
  // objeto leo   // propriedade
     this.age     =  age;
};

const leo = new Person('Leonardo', 21);

console.log(leo.name);
console.log(leo.walk());
console.log(leo.age);

// o this é representado como a constante que criei e recebeu o constructor Person