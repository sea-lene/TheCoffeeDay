$(document).ready(function(){

	$("#eat").hide();
	
	$("#btn1").click(function(){
		
		$("#eat").hide();
		$("#drink").fadeIn(1000);

		
		
	});
	
	$("#btn2").click(function(){
		
		$("#drink").hide();
		$("#eat").fadeIn(1000);
		
	});
	
	$("#nav1").click(function(){
		
		$("#nav1").css({"background":"hotpink"});
		$("#nav2").css({"background":"lightslategrey"});
		$("#nav3").css({"background":"lightslategrey"});
		$("#nav4").css({"background":"lightslategrey"});
		$("#nav5").css({"background":"lightslategrey"});
		$("#nav1").mouseover(function() {
			$("#nav1").css({"color":"indigo"})
		});
		$("#nav1").mouseleave(function() {
			$("#nav1").css({"color":"white"})
		});
		$("#home").hide();


		
		$("#home").fadeIn(1000);
		
	});
	$("#nav2").click(function(){
		$("#nav1").css({"background":"lightslategrey"});
		$("#nav2").css({"background":"hotpink"});
		$("#nav3").css({"background":"lightslategrey"});
		$("#nav4").css({"background":"lightslategrey"});
		$("#nav5").css({"background":"lightslategrey"});
		$("#menu").hide();
		$("#menu").fadeIn(1000);
		
	});
	
	$("#nav3").click(function(){
		$("#nav1").css({"background":"lightslategrey"});
		$("#nav2").css({"background":"lightslategrey"});
		$("#nav3").css({"background":"hotpink"});
		$("#nav4").css({"background":"lightslategrey"});
		$("#nav5").css({"background":"lightslategrey"});
		
		$("#reservation").hide();
		$("#reservation").fadeIn(1000);
		
	});
	
	$("#nav4").click(function(){
		$("#nav1").css({"background":"lightslategrey"});
		$("#nav2").css({"background":"lightslategrey"});
		$("#nav3").css({"background":"lightslategrey"});
		$("#nav4").css({"background":"hotpink"});
		$("#nav5").css({"background":"lightslategrey"});
		
		$("#about").hide();
		$("#about").fadeIn(1000);
		
	});
	
	$("#nav5").click(function(){
		$("#nav1").css({"background":"lightslategrey"});
		$("#nav2").css({"background":"lightslategrey"});
		$("#nav3").css({"background":"lightslategrey"});
		$("#nav4").css({"background":"lightslategrey"});
		$("#nav5").css({"background":"hotpink"});
		
		$("#contact").hide();
		$("#contact").fadeIn(1000);
		
	});
	
	$("#btn1").click(function(){
		
		$("#btn2").css({"background":"white"});
		$("#btn1").css({"background":"pink"});
		$("#btn1").hide();
		$("#btn1").fadeIn();
		
	});
	
	$("#btn2").click(function(){
		
		$("#btn1").css({"background":"white"});
		$("#btn2").css({"background":"pink"});
		$("#btn2").hide();
		$("#btn2").fadeIn();
		
	});

	$("#name").blur(function(){

		$("#name").css({"background":"indigo","color":"white"});

	});

	$("#phonenumber").blur(function(){

		$("#phonenumber").css({"background":"indigo","color":"white"});

	});

	$("#email").blur(function(){

		$("#email").css({"background":"indigo","color":"white"});

	});

	$("#date").blur(function(){

		$("#date").css({"background":"indigo","color":"white"});

	});


	$("#time").blur(function(){

		$("#time").css({"background":"indigo","color":"white"});

	});

	$("#people").blur(function(){

		$("#people").css({"background":"indigo","color":"white"});

	});

	$("#comment").blur(function(){

		$("#comment").css({"background":"indigo","color":"white"});

	});


	
});