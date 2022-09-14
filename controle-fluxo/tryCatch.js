// throw -> lançar
// try -> tentar 
// catch -> pegar

function sayMyName(name = '') {
  if (name === '')  {
    throw 'Nome é obrigatório';
  }
}

try {
  sayMyName();
} catch (e) {
  console.log(e);
}

// throw lançou o erro...

// try executou o function

// catch capturou o erro e apresentou no console.log