const addButton = document.querySelector('#search__patient')

addButton.addEventListener('click', requestResponse1)

function requestResponse1() {
    console.log('fuiclicado');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacieentes")
    xhr.addEventListener('load', function () {

        const errorajax = document.querySelector('#errorajax')
        if (xhr.status == 200) {
            errorajax.classList.add('invisible')
            const response = xhr.responseText
            const patients = JSON.parse(response)

            patients.forEach(patient => {
                addPatientJSON(patient);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            errorajax.classList.remove('invisible')
        }

    })
    xhr.send();
}