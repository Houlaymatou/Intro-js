/*
@Title-jeux mario
@author Houlaymatou
@date-13/06/2016
*/
$(function(){
	//redescend
	 var descente = function(){ $('#mario').animate({top: "-=100"},
	    {   duration: 1000,
		    specialEasing: {
		    height: "easeOutBounce"
	    }});
	    };
    //saute
	var saut = function(){$('#mario').animate({top: "+=100"},
	    {   duration: 1000,
		    specialEasing: {
		    height: "easeOutBounce"
	    }}, descente());
	    };
	           // mouvement

          $(document).keydown(function(key) {
     	   var $position = $("#mario").position().left;
           switch(parseInt(key.which,10)) {
			// On a appuyé sur la touche de la lettre q pour aller à gauche
			case 81:
			if(($position) > 10 && ($position) < 840){
			 $('#mario').css({backgroundPosition : "-35px 1px"}).animate({left: "-=5px"}, 30, 'linear');
			}
			break;
			// On a appuyé sur la touche de la lettre z pour monter 
			case 90:
              saut();

			break;
			// On a appuyé sur la touche de la lettre d pour aller à droite
			case 68:
			if(($position > -10) && ($position < 805)){
				$('#mario').css({backgroundPosition : "-175px  1px"}).animate({left: "+=5px"},30,'linear');}
			break;	
		}
	});
});