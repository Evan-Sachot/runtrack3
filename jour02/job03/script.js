document.getElementById("button").addEventListener("click",addone);
var NombreClics = 0;
document.getElementById("compteur").innerHTML= NombreClics;
function addone(){
NombreClics++;
document.getElementById("compteur").innerHTML= NombreClics;
}