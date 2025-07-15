
function jsonValueKey(id,key){
return id[key]
}
let id = {
name: "La Plateforme_",
address: "8 rue d'hozier",
city: "Marseille",
nb_staff: "11",
creation:"2019"
}
var resultat=prompt("name,address,city,nb_staff,creation")
value = jsonValueKey(id,resultat)
console.log(value)
