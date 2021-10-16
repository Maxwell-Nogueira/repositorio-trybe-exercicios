/* Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é: */

let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
  console.log(cars[key]);
}


for (let key of cars) {
  console.log(key);
}


/* Um outro exemplo é a iteração nas chaves de um objeto: */

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}
console.log('----------------------')


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
  console.log('Olá ' + names[key]);
}

console.log('----------------------')


let newCar = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
}

for (let key in newCar) {
  console.log(key, newCar[key]);
}





