const table = document.querySelector('table');

table.addEventListener('dblclick',intoEvent)

function intoEvent(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 1000)
    
}
