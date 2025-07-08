function jourtravaille(date){
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
let day = a.getDay();    // date = new Date();
if (day==0  || day==6){
console.log("week end")
}
}
const jourferie = [
   new Date(Date.UTC(2020, 3, 13)),
    new Date(Date.UTC(2020, 0, 1)), 
    new Date(Date.UTC(2020, 4, 8)), 
    new Date(Date.UTC(2020, 4, 21)),
    new Date(Date.UTC(2020, 5, 1)),
    new Date(Date.UTC(2020, 6, 14)), 
    new Date(Date.UTC(2020, 7, 15)),
    new Date(Date.UTC(2020, 10, 1)), 
    new Date(Date.UTC(2020, 10, 11)), 
    new Date(Date.UTC(2020, 11, 25))
]



var a = new Date(prompt("date 20XX-MM-DD"));



console.log(a);
console.log(jourferie); 
jourtravaille();