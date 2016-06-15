/*
@title - manipulation du dom
@author - Houlay
@date - 07/06/2016
*/
document.getElementById("ma_div").innerHTML = "mon contenu";
var ma_div = document.getElementsByClassName("ma_div");
ma_div[0].style.backgroundColor = "yellow";
ma_div[1].style.fontWeight = "bold";

function changBG(){
	document.body.style.background = "blue";
};
document.getElementById("cible").addEventListener("click",changBG);

var change = function(){
	this.style.background = "red";
};
//body script
/*var truc = document.getElementsByClassName("test");
for(var i = 0; i <= truc.length; i++) {
	truc[i].addEventListener("click",change);
}*/

$( "li" ).bind({ mouseover: function() {
    $(this).addClass("newClass");
  },
  mouseout: function() {
    $(this).removeClass("newClass");
  }
});