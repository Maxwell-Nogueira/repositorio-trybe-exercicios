/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function verificaPalindrome (string){
  for(index in string){
    if(string[index] != string[(string.length -1) - index]){
      return false;
    } else {
      return true;
    }
  }
  
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


/* Segunda forma para resolver:

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
} */

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

/* let numbers = [2, 3, 6, 7, 10, 1];
let points = [15,10,8,165,131,1654,13,21,3321,1541,];

function higherNumber(numbers){
  let higherNumber = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }
  return higherNumber;
};

console.log(higherNumber(numbers)); */

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

let numbers = [2, 3, 6, 7, 10, 1]; 
let points = [15,10,8,165,131,1654,13,21,3321,1541,];

function higherIndex (array) {
  let higherIndex = 0;
  for (let index in array){
    if (array[higherIndex] < array[index]){
      higherIndex = index;
    }  
  }
  return higherIndex;
};


console.log(higherIndex(numbers));
console.log(higherIndex(points));

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */

let arrTest = [2, 4, 6, 7, 10, 0, -3];

function minorIndex (array) {
  let minorIndex = 0;
  for (let index in array){
    if (array[minorIndex] > array[index]){
      minorIndex = index;
    }  
  }
  return minorIndex;
};

console.log(minorIndex([2, 4, 6, 7, 10, 0, -3]));
console.log(minorIndex(arrTest));

/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function biggestWord (array) {
  let biggestWord = [0]
  for (let index in array){
    if (biggestWord.length < array[index].length){
      biggestWord = array[index];
    }
  }
  return biggestWord;
}

console.log(biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

//Duas formas de resolver o exercício
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

function addNumbers (number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum = sum + index
  }
  return sum;
}

console.log(addNumbers(5));

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . */

function twoStrings(word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      control = false;
    }
  }
  return control;
}

console.log(twoStrings('trybe', 'be'));
console.log(twoStrings('joaofernando', 'fernan'));

