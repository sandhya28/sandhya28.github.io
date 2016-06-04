$(document).ready(function(){
	$("header").hide();
	$("ul").hide();
	$("img").fadeIn(3000);
	$("header").slideDown(2000);
	$("ul").fadeIn(3000);
	$("div").hide();
	


	$("a.1").click(function()
	{
 		$("div").hide();
		$("header").hide();
		$("ul").hide();
		$("#intro").hide();
		$("header").slideDown(2000);	
		$("ul").fadeIn(3000);

		$("a").removeClass("active");
		$(this).addClass("active");

		$("div.1").fadeIn(2000);
	});

	$("a.2").click(function()
	{
		$("div").hide();
		$("header").hide();
		$("ul").hide();
		$("#intro").hide();
		$("header").slideDown(2000);
		$("ul").fadeIn(3000);

		$("a").removeClass("active");
		$(this).addClass("active");
		$("div.2").fadeIn(2000);
	});
	
	$("a.3").click(function()
	{
		$("div").hide();
		$("header").hide();
		$("ul").hide();
		$("#intro").hide();
		$("header").slideDown(2000);
		$("ul").fadeIn(3000);
		$("a").removeClass("active");
		$(this).addClass("active");
		$("div.3").fadeIn(2000);
	});

	$("a.4").click(function()
	{
		$("div").hide();
		$("header").hide();
		$("ul").hide();
		$("#intro").hide();
		$("header").slideDown(2000);
		$("ul").fadeIn(3000);
		$("a").removeClass("active");
		$(this).addClass("active");
		$("div.4").fadeIn(2000);
	});

});