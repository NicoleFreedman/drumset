let body = document.getElementsByTagName('body')[0];
let buttons = document.getElementsByClassName('button');
let audio;

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		playSound(this.getAttribute("value"));
	})
}

body.addEventListener('keydown', function (event) {
	playSound(event.keyCode);
})


function playSound(sound){
	switch(sound){
		case "boom":
		case 65:
			audio = new Audio('sounds/boom.wav');
			audio.play();
			break;
		case "clap":
		case 83:
			audio = new Audio('sounds/clap.wav');
			audio.play();
			break;
		case "hihat":
		case 68:
			audio = new Audio('sounds/hihat.wav');
			audio.play();
			break;
		case "kick":
		case 70:
			audio = new Audio('sounds/kick.wav');
			audio.play();
			break;
		case "openhat":
		case 71:
			audio = new Audio('sounds/openhat.wav');
			audio.play();
			break;
		case "ride":
		case 72:
			audio = new Audio('sounds/ride.wav');
			audio.play();
			break;
		case "snare":
		case 74:
			audio = new Audio('sounds/snare.wav');
			audio.play();
			break;
		case "tink":
		case 75:
			audio = new Audio('sounds/tink.wav');
			audio.play();
			break;
		case "tom":
		case 76:
			audio = new Audio('sounds/tom.wav');
			audio.play();
			break;
	}
}
