/*
@ title - function
@ author - Houlay
@date - 06/06/2016
*/
// variables

var reponse = "Hello";
var nbTirage = 3;
var motEntrer;
//function
	while(nbTirage > 0)
    {       nbTirage--;
		   	motEntrer = prompt("Entrez votre choix");
	        if (motEntrer !== reponse)
	          {
	           alert('vous avez perdu il vous reste ' + nbTirage + " de tentative");    	
	         }
	        else 
	         {
	         alert ('vous avez gagné');
	         break;
	        }
	       
	}	   
		if(nbTirage === 0){
		   	alert("vous avez depassé le nombre tirage");
           }
	
