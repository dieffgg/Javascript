var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", insertButton);

function insertButton(event){
    event.preventDefault();

    var form = document.querySelector("#form__add");
    //Extraindo informações do paciente do form
    var returnPatient = extractingForm(form);
    console.log(returnPatient);
    

    //Cria a Tr and Td do paciente
    var patientTr = document.createElement("tr");

    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nameTd.textContent = returnPatient.name;
    weightTd.textContent = returnPatient.weight;
    heightTd.textContent = returnPatient.height;
    fatTd.textContent = returnPatient.fat;
    imcTd.textContent = returnPatient.imc;
    
    patientTr.appendChild(nameTd);
    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);

    //Adicionando o Paciente na tabela
    var table = document.querySelector("#patient__table");

    table.appendChild(patientTr);
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