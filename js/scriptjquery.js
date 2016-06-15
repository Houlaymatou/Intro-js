/*

@author - Houlay
*/

//variable

//function

//body
$(function(){
//les foctions	
$("#testBoutton").click(function(){
   $("#container").toggle(5000);
});

$("#p1").css("background","yellow");
$("#p2").css("color","red");

$( ".boutton1" ).click(function() {
  $( ".carre" ).hide(5000);
});
$(".boutton2").click(function(){
	$(".carre").show(5000);
});
$("div:first").append("<div id='ajout'> je suis moi </div>");

//changer la couleur
$( "li" ).on( "mouseover", function() {
  $( this ).css( "background-color", "red" );
});
$( "li" ).on( "mouseleave", function() {
  $( this ).css( "background-color", "transparent" );
});

$(".boutton1").bind({
     click:function(){
     	$(".carre1").clone().appendTo("body");
     	
     }
});


});