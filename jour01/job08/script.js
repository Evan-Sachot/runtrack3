function sommenombrespremiers(a,b){
for (i=2; i < a; i++){
if (a%i == 0 || b%i == 0) {
return false;
}
else{
    console.log(a+b)
    return true;
}
}

}


let a = parseInt(prompt());
let b = parseInt(prompt());
console.log(sommenombrespremiers(a,b));
sommenombrespremiers();