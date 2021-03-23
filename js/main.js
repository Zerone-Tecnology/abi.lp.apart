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
		responsive: {
			320: {
				items: 1,
			},
			425: {
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
		responsive: {
			320: {
				items: 2,
			},
			425: {
				items: 3,
			},
			1024: {
				items: 4
			}
		}
	});

    $('.gallery').owlCarousel({
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

    $('.form-kta').submit(function(){
        $.magnificPopup.open({
        items: {
            src: '#thanksPopup'
        },
        type: 'inline'
        });
        return false;
    });
    
    //E-mail Ajax Send
	$("#callback").submit(function() {
        var th = $(this);
        
		// $.ajax({
		// 	type: "POST",
		// 	url: "mail.php",
		// 	data: th.serialize()
		// }).done(function() {
		// 	alert("Спасибо, ваша заявка принята!");
		// 	setTimeout(function() {
		// 		// Done Functions
		// 		$.magnificPopup.close();
		// 		th.trigger("reset");
		// 	}, 1000);
		// });
		// return false;
	});
});