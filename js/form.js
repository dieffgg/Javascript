var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", insertButton);

function insertButton(event){
    event.preventDefault();

    var form = document.querySelector("#form__add");
    var returnPatient = extractingForm(form);

    var patientTr = mountingTr(returnPatient);
    
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
function mountingTr(returnPatient){
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");
    
    patientTr.appendChild(mountingTd(returnPatient.name,"info-nome"));
    patientTr.appendChild(mountingTd(returnPatient.weight,"info-peso"));
    patientTr.appendChild(mountingTd(returnPatient.height,"info-altura"));
    patientTr.appendChild(mountingTd(returnPatient.fat,"info-gordura"));
    patientTr.appendChild(mountingTd(returnPatient.imc,"info-imc"));

    return patientTr;
}
//função que cria o elemento td inclui o dado e classe e retorna a td
function mountingTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; 
    td.classList.add(classe);

    return td;
}