//exercicio para fixar 1 OPERADOR AND &&

const currentHour = 12;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!";
} else if (currentHour < 4 || currentHour < 11){
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message);


//exercicio para fixar 2 OPERADOR OR ||

let weekDay = "segunda-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}


//exercico para fixar 3 OPERADOR NOT !

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

/* Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. 
Isso mesmo!! Se tivermos uma variável ou valor considerado true , 
podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false . */

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true
console.log(!undefined); // true