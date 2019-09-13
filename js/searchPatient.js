const addButton = document.querySelector('#search__patient')

addButton.addEventListener('click', requestResponse1)

function requestResponse1(){
    console.log('fuiclicado');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener('load', function(){
        const response = xhr.responseText
        const patients = JSON.parse(response)
        console.log(patients);

        patients.forEach(patient => {
            addPatientJSON(patient);
        });
    })
    xhr.send();
}