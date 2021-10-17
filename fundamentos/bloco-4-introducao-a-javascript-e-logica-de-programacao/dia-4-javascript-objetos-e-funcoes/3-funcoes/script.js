function playerMarta () {
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3
  },
  bestInTheWorld: {
    dates: [2006, 2007, 2008, 2009, 2010, 2018],
  },

  
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.dates.length + ' vezes.')

console.log('A jogadora possui '  + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
};

playerMarta();

console.log('----------------------')

function fiatCar () {
  let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
}

fiatCar ();

console.log('----------------------')

function a3Sedan () {
  let newCar = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
  }
  
  for (let key in newCar) {
    console.log(key, newCar[key]);
  }
}

a3Sedan ();

console.log('----------------------')