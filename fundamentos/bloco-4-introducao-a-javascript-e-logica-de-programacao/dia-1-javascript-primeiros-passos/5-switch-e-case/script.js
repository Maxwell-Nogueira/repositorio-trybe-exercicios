let resultado = "reprovada";

switch (resultado) {
  case "aprovada":
    console.log("Parabéns você passou!");
    break;
}

switch (resultado) {
  case "lista":
    console.log("Você está na lista de espera!");
    break;
}

switch (resultado) {
  case "reprovada":
    console.log("Infelizmente, você não passou!");
    break;

    default:
      console.log("Não se aplica")  
}



