console.log("hola");

$('.box-arma').click(function(event) {
	$(".container-envia").hide();
	$(".container-lista").hide();
	$(".container-arma").toggle(500);
	$('.box-envia').addClass('disable-box');
	$('.box-lista').addClass('disable-box');
	$('.box-arma').removeClass('disable-box');
	// var y = $(window).scrollTop();
 // 	$('html, body').animate({ scrollTop: y + 550 });

});
$('.box-envia').click(function(event) {
	$(".container-arma").hide();
	$(".container-lista").hide();
	$(".container-envia").toggle(500);
	$('.box-arma').addClass('disable-box');
	$('.box-lista').addClass('disable-box');
	$('.box-envia').removeClass('disable-box');
	$(window).scrollTop(y+500);
	//var y = $(window).scrollTop();
 	//$('html, body').animate({ scrollTop: y + 550 });



});
$('.box-lista').click(function(event) {
	$(".container-arma").hide();
	$(".container-envia").hide();
	$(".container-lista").toggle(500);
	$('.box-envia').addClass('disable-box');
	$('.box-arma').addClass('disable-box');
	$('.box-lista').removeClass('disable-box');
	$(window).scrollTop(y+500);
	//var y = $(window).scrollTop();
 	//$('html, body').animate({ scrollTop: y + 550 });


});
$('.close-l').click(function(event) {
	$(".container-envia").fadeOut(100);
	$(".container-lista").fadeOut(100);
	$(".container-arma").fadeOut(100);
});