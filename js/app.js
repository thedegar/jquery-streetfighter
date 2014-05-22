$(document).ready(function() {
	//Play Hadouken sound
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	//Play chillin sound
	function playchill () {
		$('#chillin')[0].volume = 0.5;
		//$('#chillin')[0].load();
		$('#chillin')[0].play();
	}

	//Play Rick Roll sound
	function playRoll () {
		$('#ryu-roll-sound')[0].volume = 0.5;
		//$('#ryu-roll-sound')[0].load();
		$('#ryu-roll-sound')[0].play();
	}

	//Hide all other images, show Ready + text1
	function ryuReady () {
		console.log("RyuReady");
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.thinkful').hide();
		$('.jquery').hide();
		$('.streetfighter').hide();
		$('.text1').fadeIn(3000);
		console.log("RyuReadyEnd");
	}

	//Hide Ready, Show Throwing + Hadouken + sound
	function fireHadouken () {
		playHadouken();
		$('.ryu *').hide();
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
	}

	function HideRyu () {
		$('.ryu *').hide();
	}

	//Hide Ryu images, show Cool image + sound
	function StrikeAPose () {
		playchill();
		HideRyu();
		$('.ryu-cool').show();
	}

	//Stop sound, show still, show text3
	function StopPose () {
		$('#chillin')[0].pause();
		$('#chillin')[0].load();
		HideRyu();
		$('.ryu-still').show();
		$('.text3').fadeIn(3000);
	}

	//Hide Ryu, show Rick, play sound
	function StartRick () {
		console.log("Rickstart");
		playRoll();
		HideRyu();
		$('.ryu-roll').show();
	}

	//Hide Rick, stop sound, show Ryu
	function StopRick () {
		$('#ryu-roll-sound')[0].pause();
		HideRyu();
		$('.ryu-still').show();
	}

	//Show sponsors
	$('.thinkful').fadeIn(2000);
	$('.jquery').fadeIn(3000);
	$('.streetfighter').fadeIn(4000);

	//Handle Ryu hover + Hadouken
	$('.ryu').mouseenter(ryuReady)
	.mouseleave(function() {
		HideRyu();
		$('.ryu-still').show();
	})
	.mousedown(fireHadouken)
	.mouseup(function() {
		HideRyu();
		$('.ryu-ready').show();
		$('.text2').fadeIn(3000);
	});

	//Handle key presses (x) and (r)
	$(document).keydown(function(x) {
		if (x.which == 88) {
			StrikeAPose();
		}
	})
	.keyup(function(x) {
		if (x.which == 88) {
			StopPose();
		}
	})
	.keydown(function(r) {
		if (r.which == 82) {
			StartRick();
		}
	})
	.keyup(function(r) {
		if (r.which == 82) {
			StopRick();
		}
	});
})