document.getElementById("keylogger").style.display = "none";


document.addEventListener('keyup', (e) => 
{
const textarea = document.getElementById("keylogger");
textarea.value = textarea.value + e.key;
console.log(textarea.value); // A SUPPRIMER
let element = document.body;
if (textarea.value == "text"){
    element.classList.toggle("theme");
    textarea.value = '';
}
})