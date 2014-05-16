$(document).ready(function() {
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
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
	})
})