const titulo = document.querySelector("h1");
titulo.textContent = "Gabriela Nutricionista";

const patients = document.querySelectorAll(".patient");
for (let i = 0; i < patients.length; i++){
        const patient = patients[i];

        const tdWeight =  patient.querySelector(".info-peso");
        const weight = tdWeight.textContent;

        const tdHeight = patient.querySelector(".info-altura");
        const height = tdHeight.textContent;

        const tdImc = patient.querySelector(".info-imc");

        let validWeight = valid__Weight(weight);
        let validHeight = valid__Height(height);

        if(!validWeight){
            console.log("Peso Inválido");
            validWeight = false;
            tdImc.textContent = "Peso inválido";
            patient.classList.add("patient__invalid");
        }
        if(!validHeight){
            console.log("Altura Inválida");
            validHeight = false;
            tdImc.textContent = "Altura inválida";
            patient.classList.add("patient__invalid");
        }

        if (validHeight && validWeight){
            const imc = calculateImc(weight,height);
            tdImc.textContent = imc;
        }
        
    }

function calculateImc(weight,height){
    let imc = 0;

    imc = weight / (height*height);

    return imc.toFixed(2);
}

function valid__Weight(weight){
    if(weight > 0 && weight < 400){
        return true;
    }else{
        return false;
    }    
}

function valid__Height(height){
    if(height > 1.00 && height < 4.00){
        return true;
    }else{
        return false;
    }
}