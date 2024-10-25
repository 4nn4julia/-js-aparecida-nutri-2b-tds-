var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <=0 || peso >=1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}
if (altura <=0 || altura >=3.00) {
    console.log("Altura inválido!");
    alturaEhValida = false;
    tdmctextContent = "Altura inválida!";
}
if (pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
