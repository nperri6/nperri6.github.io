// $(document).ready(function() {
// 	$('nav').fadeOut("slow");
// })

$(document).ready(function() {
	$("#nav-pulldown").click(function() {
		$("nav").slideToggle("slow");
	})
})

$(document).ready(function() {
	$("#blog-pulldown").click(function() {
		$(".additional-blogs").slideToggle("slow");	
	})
})