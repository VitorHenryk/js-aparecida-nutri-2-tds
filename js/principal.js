var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;

console.log(peso); //Obter 100
console.log(altura); //obter 2.00 metros
console.log(imc); // obter 25 (peso / [altura x altura])