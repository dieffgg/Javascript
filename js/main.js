var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var patient = document.querySelectorAll(".patient");
for(var i = 0; i < patient.length; i++){
    console.log(patient[i]);
    
}

var tdWeight =  patient.querySelector(".info-peso");
var weight = tdWeight.textContent;

var tdHeight = patient.querySelector(".info-altura");
var height = tdHeight.textContent;

var tdImc = patient.querySelector(".info-imc");

var validWeight = true;
var validHeight = true;

if(weight <= 0 || weight >= 500){
    console.log("Peso Inválido");
    validWeight = false;
    tdImc.textContent = "Peso inválido";
}
if(height >= 4.00 || height <= 1.00){
    console.log("Altura Inválida");
    validHeight = false;
    tdImc.textContent = "Altura inválida";
}

if (validHeight && validWeight){
    var imc = weight / (height * height);
    tdImc.textContent = imc;
}

