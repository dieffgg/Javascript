var buttonAdd = document.querySelector("#adicionar-paciente");

buttonAdd.addEventListener("click", insertButton);

function insertButton(event){
    event.preventDefault();

    var form = document.querySelector("#form__add")

    var name = form.nome.value;
    var weight = form.peso.value;
    var height = form.altura.value;
    var fat = form.gordura.value;

    var patientTr = document.createElement("tr");

    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nameTd.textContent = name;
    weightTd.textContent = weight;
    heightTd.textContent = height;
    fatTd.textContent = fat;
    
    patientTr.appendChild(nameTd);
    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);

    var table = document.querySelector("#patient__table");

    table.appendChild(patientTr);
}