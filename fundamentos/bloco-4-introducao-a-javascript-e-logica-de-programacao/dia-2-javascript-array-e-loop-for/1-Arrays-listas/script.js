/* Como vimos no vídeo acima, uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura. Veja o exemplo e pratique: */

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);


/* Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que por meio do .length , conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo: */

// let tasksList = ['tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0]; // use [] para imprimir item especifico. 
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1]; // use [.length - 1] para imprimir o item que esta na ultima posição de um array. 
console.log(searchForLastTask);

/* Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 .
Vamos agora adicionar uma nova atividade para nossa lista de arrays. Veja e pratique com o exemplo a seguir: */

tasksList.push('Fazer exercícios da Trybe'); // .push(item) adiciona mais um item no final do array!
console.log(tasksList);

tasksList.unshift('JavaScript'); // .unshift(item) adiciona mais um intem no inicio do array!
console.log(tasksList);


/* Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.
Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?" . Simples, veja este exemplo: */

tasksList.pop(); // .pop(); remove o ultimo item!
console.log(tasksList);

tasksList.shift(); // .shift() remove o primeiro item!
console.log(tasksList);


/* O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.
Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . Veja o exemplo: */

let indexOfTask = tasksList.indexOf('Tomar café'); // .indexOf(item) é usado para procurar o índice de um item a posição do item no Array!
console.log(indexOfTask);

/* Essas são algumas das possibilidades mais utilizadas para manipular arrays. Caso tenha dúvidas, lembre-se sempre de consultar a documentação.
Para fixar faça os próximos exercícios : */


/* Exercício 1
Obtenha o valor "Serviços" do array menu : */

let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/* Exercício 2
Procure o índice do valor "Portfólio" do array menu : */

let indexOfPortfolio = menu.indexOf('Portifólio');
console.log(indexOfPortfolio);


/* Exercício 3
Adicione o valor "Contato" no final do array menu : */

menu.push('Contato');
console.log(menu);


