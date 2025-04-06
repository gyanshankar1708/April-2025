//  Local Storage

function notes(note){
    localStorage.setItem("Note",note);
}


let display = document.getElementById("noteView")
let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let note = document.getElementById("Notes").value;
    notes(note);
    display.innerHTML += `<div>${note}</div>`;
})

if (localStorage.getItem("Note")){
    let noteVal = localStorage.getItem("Note");
    display.innerHTML += `<div>${note}</div>`
}
