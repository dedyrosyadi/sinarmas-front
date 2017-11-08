

$('.page-scroll').on('click', function(e) {
	var target = $(this).attr('href');

	// $('body').scrollTop(target.offset().top);
	$('html, body').animate({
		scrollTop: $(target).offset().top - 50
	}, 800);

	e.preventDefault();

});





function openNav() {
    document.getElementById("menu-resv").style.height = "100%";
}

function closeNav() {
    document.getElementById("menu-resv").style.height = "0%";
}
