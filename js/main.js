var titulo = document.querySelector("h1");
titulo.textContent = "Gabriela Nutricionista";

var patients = document.querySelectorAll(".patient");
for (var i = 0; i < patients.length; i++){
        var patient = patients[i];

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
            patient.classList.add("patient__invalid");
        }
        if(height >= 4.00 || height <= 1.00){
            console.log("Altura Inválida");
            validHeight = false;
            tdImc.textContent = "Altura inválida";
            patient.classList.add("patient__invalid");
        }

        if (validHeight && validWeight){
            var imc = calculateImc(weight,height);
            tdImc.textContent = imc;
        }
        
    }

function calculateImc(weight,height){
    var imc = 0;

    imc = weight / (height*height);

    return imc.toFixed(2);
}
