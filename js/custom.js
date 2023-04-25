	$(".js-height-full").height($(window).height());
	$(".js-height-parent").each(function() {
	    $(this).height($(this).parent().first().height());
	});




	function count($this) {
		var current = parseInt($this.html(), 10);
		current = current + 350; /* Where 350 is increment */
		
		$this.html(++current);
	
		if (current >= $this.data('count')) {
			$this.html($this.data('count') >= 1000 ? '+ ' + ($this.data('count') / 1000).toFixed(1) + 'K' : $this.data('count'));
			return;
		} else {
			setTimeout(function() {
				count($this);
			}, 50);
		}
	}
	$(".stat-timer").each(function() {
		$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
		count($(this));
	});


	$('.header').affix({
	    offset: {
	        top: 100,
	        bottom: function() {
	            return (this.bottom = $('.footer').outerHeight(true))
	        }
	    }
	})

	$(window).load(function() {
	    $("#preloader").on(500).fadeOut();
	    $(".preloader").on(600).fadeOut("slow");
	});


/******************************************
           AGREGADOS
******************************************/



	// function startCount() {
	// 	let count = 0;
	// 	setInterval(function() {
	// 		count += 100;
	// 		if(count > 27000) {
	// 			document.getElementById("contador").innerHTML = "27K";
	// 			clearInterval();
	// 		} else if(count >= 1000) {
	// 			document.getElementById("contador").innerHTML = (count / 1000).toFixed(0) + "K";
	// 		} else {
	// 			document.getElementById("contador").innerHTML = count;
	// 		}
	// 	}, 1000);
	// }
	