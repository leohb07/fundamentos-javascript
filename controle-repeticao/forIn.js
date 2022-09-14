// percorre um objeto

let person = {
  name: 'Leonardo',
  age: 21,
  weight: 70.20, 
}

for(let property in person) {
  console.log(property);
  console.log(person[property]);
}