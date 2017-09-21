// console.log("gulp bootstrap starter");
$('.page-scroll').on('click', function(e) {
	var target = $(this).attr('href');

	// $('body').scrollTop(target.offset().top);
	$('body').animate({
        scrollTop: $(target).offset().top
    }, 800);

	
	// window.location = '/';
	// e.preventDefault();
});	




function openNav() {
    document.getElementById("menu-resv").style.height = "100%";
}

function closeNav() {
    document.getElementById("menu-resv").style.height = "0%";
}

