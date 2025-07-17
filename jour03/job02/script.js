$(document).ready(function(){
    let $number = 0;
    
    $("#randomize").click(function(){
      $('ul').each(function(){
           
            var $ul = $(this);
            
            var $liArr = $ul.children('li');
          
            
            $liArr.sort(function(a,b){
                 
                  var temp = parseInt( Math.random()*10);
                  
                  var isOddOrEven = temp%2;
                  
                  var isPosOrNeg = temp>5 ? 1 : -1;
                 
                  return( isOddOrEven*isPosOrNeg );
            })
            
            .appendTo($ul);      
        }) 
       
        $("#button1").click(function(){ 
             
       
        $number++;
        if($number>5){
        $number = 0;
        }
        
        
        })    
        $("#buttonreset").click(function(){
        $('ul').each(function(){
            
            var $ul = $(this);
            
            var $liArr = $ul.children('li');
            
            
            $liArr.sort(function(a,b){
                return a.id - b.id
                 
                
            }) 
              .appendTo($ul);   
        
            })
            })
});
})