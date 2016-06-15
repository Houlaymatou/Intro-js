$(function(){
//animation
$( "#bouttonD" ).click(function() {
  $( ".carre" ).animate({ "left": "+=100px" }, "slow" );
});
 
$( "#bouttonG" ).click(function(){
  $( ".carre" ).animate({ "left": "-=100px" }, "slow" );
});
$( "#bouttonH" ).click(function(){
  $( ".carre" ).animate({ "top": "-=100px" }, "slow" );
});
$( "#bouttonB" ).click(function(){
  $( ".carre" ).animate({ "top": "+=100px" }, "slow" );
});

});