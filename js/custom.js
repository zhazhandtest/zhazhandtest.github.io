jQuery(function($){
$(document).ready(function() {
    
   $("button.mainMenu").click(function() {
       if ($("div.mainMenu").hasClass("invis")) {
           $("div.mainMenu").removeClass("invis");
       }
       
   });
    
    $("button.closeMenu").click(function() {
        $("div.mainMenu").addClass("invis");
    })
});
	
	
	
                
});