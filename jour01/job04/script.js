function bisextile (input){
 let year=input;
 let answer;
 if ((year % 4 == 0 && year % 100 != 0)|| year % 400 == 0){
    answer = "yes";
 }
 else{
    answer= "no";
 }
 alert (answer)
}
bisextile(prompt ("année"));