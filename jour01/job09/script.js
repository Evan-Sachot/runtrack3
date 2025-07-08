function tri(order,numbers){
if(order=="asc"){
console.log(numbers.sort(function(a, b){return a-b}));
}
else{
    console.log(numbers.sort(function(a, b){return b-a}));
}

}
var order ="asc";
let numbers = [ 1, 2 ,3,4,5,6,7,8,9,10];

// var order = prompt('Enter asc or desc');

tri("desc",[ 1, 2 ,3,4,5,6,7,8,9,10]);