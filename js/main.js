$(document).ready(function(){
		new WOW().init();

		var slider = document.getElementById("myRange");
		var output = document.getElementById("demo");
		output.innerHTML = slider.value; // Display the default slider value

		// Update the current slider value (each time you drag the slider handle)
		slider.oninput = function() {
				output.innerHTML = this.value;
		}

		$('input[type=range]').wrap("<div class='range'></div>");
		var i = 1;

		$('.range').each(function() {
				var n = 0;
				var x = (n / 400) * (this.getElementsByTagName('input')[0].offsetWidth - 8) - 12;
				this.id = 'range' + i;
				if (this.getElementsByTagName('input')[0].value == 0) {
						this.className = "range"
				} else {
						this.className = "range rangeM"
				}
				this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #56463E 0%, #56463E " + n + "%, #ccc " + n + "%)} #" + this.id + ":hover input[type=range]:after{left: " + x + "px}</style>";
				i++;
				// document.getElementById("demo").innerHTML = n;
		});

		$('input[type=range]').on("input", function() {
				var a = this.value;
				var p = (a / 400) * (this.offsetWidth - 8) - 12;
				var aa = (p / this.offsetWidth) * 100;
				if (a == 0) {
						this.parentNode.className = "range"
				} else {
						this.parentNode.className = "range rangeM"
				}
				this.parentNode.getElementsByTagName('style')[0].innerHTML += "#" + this.parentNode.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #56463E 0%, #56463E " + aa + "%, #ccc " + aa + "%)} #" + this.parentNode.id + ":hover input[type=range]:after{left: " + p + "px}";
				document.getElementById("demo").innerHTML = a;
				document.getElementById("data-summ").getElementsByTagName('span')[0].innerHTML = a*2200;
		})

		$('.review-wrap').owlCarousel({
				nav:true,
				navText: '',
				items: 1,
		responsive: {
			425: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3
			}
		}
	});

	$('.owl-cert').owlCarousel({
				nav:true,
				navText: '',
				items: 1,
		responsive: {
			425: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3
			}
		}
	});

	$('.gallery').owlCarousel({
		nav:true,
		navText: '',
		items:1
	});
	
	$('.slider-wrap').owlCarousel({
		nav:true,
		navText: '',
		items:1
	});

	$('.popup').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

		// $('.form-kta').submit(function(){
		//     $.magnificPopup.open({
		//     items: {
		//         src: '#thanksPopup'
		//     },
		//     type: 'inline'
		//     });
		//     return false;
		// });
		
		//E-mail Ajax Send
	$("#form-kta").submit(function() {
				var th = $(this);
				
		$.ajax({
			type: "POST",
			url: "thanks.php",
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо, ваша заявка принята!");
			$.magnificPopup.open({
					items: {
							src: '#thanksPopup'
					},
					type: 'inline'
			});
			setTimeout(function() {
				// Done Functions
				// $.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	window.onscroll = function() {fixMMenu()};
	var header = document.getElementById("headerTop");
	var menu = document.getElementById("mmWrap");
	var sticky = header.offsetTop;
	function fixMMenu() {
		if (window.pageYOffset > sticky) {
			menu.classList.add("fix");
		} else {
			menu.classList.remove("fix");
		}
	}

	if(window.matchMedia('(max-width: 540px)').matches){
		$('.slider-wrap').addClass('owl-carousel');
	}
});