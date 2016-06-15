$(function(){
//animation
var bougeNuage = {
	left: "+=500px",
	opacity:0.1
}
var terminAnim = function(){
	alert("c'est fini");
};
$("#testBoutton").bind({
	click:function(){
      $(".carre").animate(bougeNuage,3000,terminAnim);
	}
});

});