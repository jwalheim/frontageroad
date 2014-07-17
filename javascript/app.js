// $('body').hide();
$('li').css('display','none');
var showHeader = function () {
	$('li').first().fadeIn(550,function showNext() {
	$( this ).next('li').fadeIn(550, showNext);
	});
	
}

showHeader();


