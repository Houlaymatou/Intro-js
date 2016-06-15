/*
@title - Calculator
@author - Jerome
@date - 06/06/2016 
*/
//variable

//function

//body
$(function(){
	// function for animation
	moveFunction = function(param1){
		$("#carre").removeClass();
		$("#carre").addClass(param1);
	};
	//body script
	$(":button").bind("click",function(){
		bindValue = $(this).text();
		moveFunction(bindValue);
	})
});

