/*


*/
//jquery -ui
$(function(){
   //Tabs pour menu
 $( "#tabs" ).tabs({
  event: "mouseover"
});
//boite de dialogue
$( "#dialog" ).dialog({
  hide: { effect: "explode", duration: 1000 }
});
//effet
$( document ).click(function() {
  $( "#carre" ).toggle( "bounce", { times: 10 }, "1000" );
});
});