async function afficheJson(path){
const response = await fetch (path)
return await response.json()
}

const json = afficheJson(
'http://localhost/runtrack3/jour04/job03/pokemon.json',
)
async function filtrerpokemon(str) {
str.then((value) =>{
var search = window.location.search
var param =new URLSearchParams(search)
var name = document.getElementById("nameinput").value
var id = parseInt.document.getElementById('id').value
var type= document.getElementById('type').value
var filtre = value.filter(
(a)=> a.name.french=== name || a.name.english === name|| a.name.japanese=== name|| a.name.chinese === name || a.id=== id|| a.type === type,)
console.log(name)

})
}