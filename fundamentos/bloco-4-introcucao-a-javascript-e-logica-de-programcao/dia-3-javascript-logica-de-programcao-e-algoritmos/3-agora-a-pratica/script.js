/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */

/* let n = 5;
let asterisk = '*'
let lineAsterisk = ''

for (let index = 0; index < n; index += 1) {
  lineAsterisk = lineAsterisk + asterisk;
}

for (let index = 0; index < n; index += 1) {
  console.log(lineAsterisk);
} */


/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */


/* let n = Math.ceil(Math.random()*10)
let asterisk = '*'
let lineAsterisk = ''

for (let index = 0; index <= n; index += 1) {
  console.log(lineAsterisk);
  lineAsterisk = lineAsterisk + asterisk;
} */


/* 3- Agora inverta o lado do triângulo. Por exemplo: */

/* let n = 5;
let asterisk = '*'
let lineAsterisk = ''
let inputPosition = n;


for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < inputPosition) {
      lineAsterisk = lineAsterisk + ' ';
    } else {
      lineAsterisk = lineAsterisk + asterisk;
    }
  }
  console.log(lineAsterisk);
  lineAsterisk = '';
  inputPosition -= 1;
} */


/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight  = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1;
};

