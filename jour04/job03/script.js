

$(document).ready(function(){
function jsonValueKey(json,key){
return json[key]
}
$("#filtrer").click(function(){
let name = document.getElementById("nameinput").value
let id = document.getElementById("id").value

fetch("pokemon.json").then(
function(u){return u.json();}
).then
(
function(json){
data = json;
if (name === undefined)
var item = data.find(item => item.name.english || item.name.french || item.name.chinese || item.name.japanese  === name);
item = data.find(item => item.id === id)
console.log(item.name);
console.log(item.id)
console.log(item.type)
}
)

})
})