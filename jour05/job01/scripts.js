  let nom = document.forms["myForm"]["fname"].value;
  let prenom = document.forms["myForm"]["prenom"].value;
  let email = document.forms["myForm"]["email"].value;
  let mdp = document.forms["myForm"]["mdp"].value;
  let adresse = document.forms["myForm"]["adresse"].value;
  let codepostal = document.forms["myForm"]["codepostal"].value;
  const hasUpperCase = str => /[A-Z]/.test(str);

  if (nom == "" || prenom == "" || email == "" || mdp == ""|| adresse == "" || codepostal == "") {
    alert("Un champ est vide");
    return false;
  } 
  else 
  {
    if (nom.length <= 2){
        alert("Le nom est trop court");
    }
    if (prenom.length <= 2){
        alert("Le prenom est trop court");
    }
    if(mdp.length < 8 || hasUpperCase(mdp) == false){
        document.getElementById("mdp_error").innerHTML = "ERROR MDP";
    }
  }
