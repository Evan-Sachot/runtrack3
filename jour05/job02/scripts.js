let text = document.getElementById("jumbotron-btn");
const citation = ["Réplicant... plus humain que l'humain, c'est notre devise.",
    "J'ai vu tant de choses que vous, humains, ne pourriez pas croire.",
    "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie. Il est temps de mourir.",
    "Il est dommage qu'elle ne vive pas… mais qui vit vraiment ?",
    "Je pense, Sébastian, donc je suis."];
    console.log(citation);

text.addEventListener("click", function(){ 
    document.getElementById("jumbotron-text").textContent=citation[Math.floor(Math.random() * 4)];
});


function clickedList(elem) {
    // get all 'a' elements
    var a = document.getElementsByClassName('list-group-item');
    console.log(a);
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active')
    }

    elem.classList.add('active');
}



// MARCHE PAS (?)
let Keys = [];
const B = ["Q", "D", "E"];
window.addEventListener('keydown', function (e) {
  var keyPress;

  if (typeof event !== 'undefined') {
    keyPress = event.keyCode;
  }
  else if (e) {
    keyPress = e.which;
  }
  Keys.push(String.fromCharCode(keyPress));
    console.log("Keys :" + Keys);
    console.log("B :" + B);
    if (B.every(k => Keys.includes(k))) {
        this.alert("test");
        Keys = [];
    }
  return false;
});