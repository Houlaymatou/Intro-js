/*
@ tittle tp 
@author-Houlay
@date-09/06/2016

*/

$(function(){
    $( "#tabs" ).tabs({
  event: "mouseover"
});
//contrôle formulaire
$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "" ) {
    $( "span" ).text( "Non valide..." ).show();
    return;
  }
 
  $( "span" ).text( "Valide!" ).show().fadeOut( 1000 );
  event.preventDefault();
});
//animation
$( "#chat" ).mouseover(function() {
  $( ".chat" ).animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
    opacity: "toggle"
  }, 5000, "linear", function() {
    $( this ).after(  );
  });
});


});