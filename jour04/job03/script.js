$(document).ready(function(){
function jsonValueKey(json,key){
return json[key]
}
let jsondata;
$("#filtrer").click(function(){
   let name= Bulbasaur //document.getElementById("nameinput").value
fetch("pokemon.json").then(
function(u){return u.json();}
).then
(
function(json){
data = json
var item = data.find(item => item.name.english === name);
console.log(item.name)
}
)

})
})