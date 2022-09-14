// callback function

function sayMyName(callback) {
  console.log('antes do callback');

  callback();
  
  console.log('depois do callback');
}

sayMyName(
  () => {
    console.log('dentro do callback');
  }
)

// callback function é chamar uma função passando outra função