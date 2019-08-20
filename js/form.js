var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", insertButton);

function insertButton(event){
    event.preventDefault();

    var form = document.querySelector("#form__add");
    var patient = extractingForm(form);

    var patientTr = mountingTr(patient);

    var error = validPatient(patient);

    if (error.length > 0){
        var messageError = document.querySelector("#message__error");
        messageError.textContent = error;
        return;
    }
    //Adicionando o Paciente na tabela
    var table = document.querySelector("#patient__table");
    table.appendChild(patientTr);

    form.reset();
}
//Extraindo informações do paciente do form e criando um objeto 
function extractingForm(form){
    var patient = {
        name : form.nome.value,
        weight : form.peso.value,
        height : form.altura.value,
        fat : form.gordura.value,
        imc : calculateImc(form.peso.value, form.altura.value)
    }
    return patient;
}
//função que cria a tr e monta a td através do appendchild
function mountingTr(patient){
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");
    
    patientTr.appendChild(mountingTd(patient.name,"info-nome"));
    patientTr.appendChild(mountingTd(patient.weight,"info-peso"));
    patientTr.appendChild(mountingTd(patient.height,"info-altura"));
    patientTr.appendChild(mountingTd(patient.fat,"info-gordura"));
    patientTr.appendChild(mountingTd(patient.imc,"info-imc"));

    return patientTr;
}
//função que cria o elemento td inclui o dado e classe e retorna a td
function mountingTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; 
    td.classList.add(classe);

    return td;
}

function validPatient(patient){
    error = [];

    if(!valid__Weight(patient.weight)){
        error.push("Peso inválido")
    }
    if(!valid__Height(patient.height)){
        error.push("Altura inválida")
    }
    return error;
}