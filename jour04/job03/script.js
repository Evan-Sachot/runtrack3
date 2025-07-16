async function afficheJson(path){
const response = await fetch (path)
return await response.json()
}

const json = afficheJson(
'http://localhost/runtrack3/jour04/job03/pokemon.json',
)
 