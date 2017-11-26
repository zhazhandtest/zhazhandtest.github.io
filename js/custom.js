jQuery(function($){
$(document).ready(function() {
    
   $("button.mainMenu").click(function() {
       if ($("div.mainMenu").hasClass("hidden")) {
           $("div.mainMenu").removeClass("hidden");
       }
       
   });
    
    $("button.closeMenu").click(function() {
        $("div.mainMenu").addClass("hidden");
    })
});
	
	
	
                
});