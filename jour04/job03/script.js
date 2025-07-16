$(document).ready(function(){
function jsonValueKey(json,key){
return json[key]
}
$("#filtrer").click(function(){
    console.log("aaaaaaaaaaa");
   let name= "Bulbasaur";
fetch("pokemon.json").then(
function(u){return u.json();}
).then
(
function(json){
data = json;
var item = data.find(item => item.name.english === name);
console.log(item.name);
}
)

})
})