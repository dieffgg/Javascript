var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var patient = document.querySelector("#first-patient");

var tdWeight =  patient.querySelector(".info-peso");
var weight = tdWeight.textContent;

var tdHeight = patient.querySelector(".info-altura");
var height = tdHeight.textContent;

var imc = weight / (height * height);

var tdImc = patient.querySelector(".info-imc");
tdImc.textContent = imc;