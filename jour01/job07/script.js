function jourtravaille(date){
    // date = new Date();
}
const jourferie = [
    new Date(Date.UTC(2020, 3, 13)),
    new Date(Date.UTC(2020, 0, 1))
]



var a = new Date(prompt("date 20XX-MM-DD"));

for (var i=0; i < jourferie.length; i++) {

if (a <= jourferie[i]) 
{
    console.log("jour ferié");
} 
else 
{
    console.log("jour travaillé");
}

}

console.log(a);
console.log(jourferie); 
jourtravaille();