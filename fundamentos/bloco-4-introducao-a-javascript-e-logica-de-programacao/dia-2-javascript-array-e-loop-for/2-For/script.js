
/* Embora seja um recurso da linguagem, o uso do operador de incremento ( ++ ) não é recomendado. O maior problema é que, embora seu uso principal esteja na geração de um side effect , esse operador sempre irá retornar algum valor e, pra piorar, as expressões ( ++x ) e ( x++ ), embora sejam facilmente confundidas por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.
Levando isso em consideração, o uso desse operador pode gerar confusão e causar bugs inesperados. Sendo assim, uma vez que o += 1 substitui completamente o ++ , recomenda-se o uso exclusivo de += 1 , e é essa a regra que iremos adotar neste conteúdo daqui pra frente!
 */


// Suponha que temos uma lista com marcas de carros:

let cars = ['Saab', 'Volvo', "BMW"];

/* Anteriormente para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria: */

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

//Mas, agora que conhecemos o for , podemos melhorar o código para algo como:

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
};

/* Os dois códigos geram o mesmo resultado, mas o segundo é muito mais adequado. Pense que, em vez de 3 carros, essa lista possuísse 1000. No primeiro código, teriamos que escrever 1000 linhas! */


/* Para fixar faça o próximo exercício :
Exercício 1
Utilize o for para imprimir os elementos da lista groceryList com o console.log() :*/

let grocery = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
grocery.push('Abacate');

for (let i = 0; i < grocery.length; i += 1){
  console.log(grocery[i])
};




