/*
@title Exercice
@author Houlay
@date 07/06/2016
*/
//variables
 var ajoutTexte1 = function(){
document.getElementById("container").innerHTML = "bonjour";
};
var ajoutTexte2 = function(){
document.getElementById("container").innerHTML = "bonjour à tous";
};
function ajoutText3(){
document.getElementById('container').innerHTML = "C'est une belle journée pour appredre du js"
};
var ecouteur1 = document.getElementById("menu1");
ecouteur1.addEventListener("click",ajoutTexte1);

var ecouteur2 = document.getElementById("menu2");
ecouteur2.addEventListener("click",ajoutTexte2);

var ecouteur3 = document.getElementById('menu3');
ecouteur3.addEventListener("click",ajoutText3);

