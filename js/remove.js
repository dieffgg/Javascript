const table = document.querySelector('table');

table.addEventListener('dblclick',intoEvent)

function intoEvent(event){
    event.target.parentNode.remove();
}
