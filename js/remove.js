const table = document.querySelector('table');

table.addEventListener('dblclick',intoEvent)

function intoEvent(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(removePatient, 1000)
    function removePatient(){
        event.target.parentNode.remove();
    }
    
}
