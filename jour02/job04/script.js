
document.addEventListener("keydown",(e) =>{
const log = document.getElementById("keylogger")
console.log(document.activeElement)
if(document.activeElement.id ==="keylogger"){
log.value = log.value + e.key;
}
log.innerText = log.value + e.key
})


