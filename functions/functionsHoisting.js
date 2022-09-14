// functions hoisting 

sayMyName();

function sayMyName() {
  console.log("Hello world !!"); 
}

// hoisting é chamar a função antes dela ser criada e o javascript ordenar isso para nós

sucoDeUva();

const copo = function() {
  console.log("Hello world !!");  
}

// Se for uma função modelo anonymous, não é feito a reorganização do código