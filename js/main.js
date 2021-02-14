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
        var n = this.getElementsByTagName('input')[0].value;
        var x = (n / 100) * (this.getElementsByTagName('input')[0].offsetWidth - 8) - 12;
        this.id = 'range' + i;
        if (this.getElementsByTagName('input')[0].value == 0) {
            this.className = "range"
        } else {
            this.className = "range rangeM"
        }
        this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #EE3E18 0%, #EE3E18 " + n + "%, #ccc " + n + "%)} #" + this.id + ":hover input[type=range]:after{left: " + x + "px}</style>";
        i++;
        // document.getElementById("demo").innerHTML = n;
    });

    $('input[type=range]').on("input", function() {
        var a = this.value;
        var p = (a / 100) * (this.offsetWidth - 8) - 12;
        if (a == 0) {
            this.parentNode.className = "range"
        } else {
            this.parentNode.className = "range rangeM"
        }
        this.parentNode.getElementsByTagName('style')[0].innerHTML += "#" + this.parentNode.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #EE3E18 0%, #EE3E18 " + a + "%, #ccc " + a + "%)} #" + this.parentNode.id + ":hover input[type=range]:after{left: " + p + "px}";
        document.getElementById("demo").innerHTML = a;
    })

    $('.review-wrap').owlCarousel({
        nav:true,
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
});