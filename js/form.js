const buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", insertButton);

function insertButton(event) {
    event.preventDefault();

    const form = document.querySelector("#form__add");
    const patient = extractingForm(form);

    const patientTr = mountingTr(patient);

    const error = validPatient(patient);
    console.log(error);
    if (error.length > 0) {
        errorMessage(error);
        return;
    }
    //Adicionando o Paciente na tabela
    const table = document.querySelector("#patient__table");
    table.appendChild(patientTr);

    form.reset();
    const errorMessage1 = document.querySelector("#error__messages");
    errorMessage1.innerHTML = "";
}
//Extraindo informações do paciente do form e criando um objeto 
function extractingForm(form) {
    const patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculateImc(form.peso.value, form.altura.value)
    }
    return patient;
}
//função que cria a tr e monta a td através do appendchild
function mountingTr(patient) {
    const patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(mountingTd(patient.name, "info-nome"));
    patientTr.appendChild(mountingTd(patient.weight, "info-peso"));
    patientTr.appendChild(mountingTd(patient.height, "info-altura"));
    patientTr.appendChild(mountingTd(patient.fat, "info-gordura"));
    patientTr.appendChild(mountingTd(patient.imc, "info-imc"));

    return patientTr;
}
//função que cria o elemento td inclui o dado e classe e retorna a td
function mountingTd(dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validPatient(patient) {
    error = [];
    if (patient.name.length == 0) {
        error.push("O nome não pode ser em branco!");
    }
    if (!valid__Weight(patient.weight)) {
        error.push("Peso inválido");
    }
    if (!valid__Height(patient.height)) {
        error.push("Altura inválida");
    }
    if (patient.fat.length == 0) {
        error.push("A gordura não pode ser em branco!");
    }
    return error;
}

function errorMessage(error) {
    const ul = document.querySelector("#error__messages");
    ul.innerHTML = "";

    error.forEach(function (erro) {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}