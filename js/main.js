$(document).ready(function () {
	// Assign some jquery elements we'll need
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		// init: false,
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 1
				// spaceBetween: 20,
			},
			320: {
				slidesPerView: 1
				// spaceBetween: 10,
			}
		}
	});

	// var startDate = 1526860815;
	// var finishDate = 1528588800;
	//
	// var totalTime = (finishDate - startDate);
	// var nowTime = Math.floor(Date.now() / 1000)
	// var pastFromStart = nowTime - startDate;
	//
	// if (pastFromStart > 0) {
	// 	var percent = Math.round((pastFromStart / totalTime) * 100);
	// 	percent > 100 ? percent = 100 : '';
	// 	$('.progress__fill').css('width', percent + '%')
	// }

	$('.js-popup').on('click', function() {
		$('#popup').css('display', 'flex');
	});

	$('.close-popup').on('click', function() {
		$('#popup').css('display', 'none');
	});

	$(".white-list").submit(function () {
		$('#form-loader').show();
		$.ajax({
			type: "POST",
			url: "white-list.php",
			data: $(this).serialize(),
		}).done(function (data) {
			$('#form-loader').hide();
			alert('Your data has been successfully added to the White List');
			$(".white-list").trigger('reset');
			$('#popup').css('display', 'none');
		});
		return false;
	});

	$(".form-subscribe").submit(function () {
		$.ajax({
			type: "POST",
			url: "subscribe.php",
			data: $(this).serialize(),
		}).done(function (data) {
			$(".form-subscribe").trigger('reset');
			alert('You has been subscribed');
		});
		return false;
	});
});


$(document).ready(function() {
    $('.js-mah-header__menu-trigger').click(function() {
        $('#js-mobile-list').slideToggle(500);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('#js-mobile-list').removeAttr('style');
        }
    });//end resize
});//end


$(document).ready(function () {
	$(".js-gw-header__list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	$(".js-mobile-list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
});




$(document).ready(function() {

	//E-mail Ajax Send
	$(".js-footer__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.js-form-message').css({ display: 'block' });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});