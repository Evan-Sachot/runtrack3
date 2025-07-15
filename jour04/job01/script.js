$(document).ready(function(){
$("#button1").click(function(){
fetch("expression.txt")
.then (x => x.text())
.then (y =>
document.getElementById("para").innerHTML=y
)})

})