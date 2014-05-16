$(document).ready(function() {
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	$('.thinkful').fadeIn(2000);
	$('.jquery').fadeIn(3000);
	$('.streetfighter').fadeIn(4000);

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.thinkful').hide();
		$('.jquery').hide();
		$('.streetfighter').hide();
		$('.text1').fadeIn(3000);
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '300px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '-180px');
				}
			);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.text2').fadeIn(3000);
	});

	$(document).keydown(function(x) {
		if (x.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(x) {
		if (x.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.text3').fadeIn(3000);
		}
	})
	.keydown(function(r) {
		if (r.which == 82) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
			$('.ryu-roll').fadeIn();
		}
	})
	.keyup(function(r) {
		if (r.which == 82) {
			$('.ryu-roll').hide();
			$('.ryu-still').show();
		}
	})
})