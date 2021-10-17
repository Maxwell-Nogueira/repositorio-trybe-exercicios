/* Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}



/* 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
};

console.log(resultado);


/* 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
 */

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

let avarege = sum / numbers.length; 

console.log(avarege);


/* 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

if (avarege > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
};

/* 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; */


let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero);


/* 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares += 1
  }
}

if(numerosImpares === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(numerosImpares);
}


/* 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor);


/* 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */

let arrNumeros = [];

for (let i = 1; i <= 25; i += 1) {
  arrNumeros.push(i);
}

console.log(arrNumeros);


/* 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */

let divisao = 0;

for (index = 0; index < arrNumeros.length; index += 1) {
  console.log(arrNumeros[index] / 2);
}



/* Bônus
Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo: */

/* Exercício 1
Ordene o array numbers em ordem crescente e imprima seus valores; */

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);


/* Exercício 2
Ordene o array numbers em ordem decrescente e imprima seus valores;
Solução : */


for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);



/* Exercício 3
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
Solução : */

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);





