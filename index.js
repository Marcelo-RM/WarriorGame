const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const backgroundLevel1 = new Sprite({
	position: {
		x: 0,
		y: 0
	},
	imageSrc: "./img/backgroundLevel1.png"
});

const player = new Player();

const keys = {
	up: {
		pressed: false
	},
	left: {
		pressed: false
	},
	right: {
		pressed: false
	}
}

function animate() {
	window.requestAnimationFrame(animate);
	
	backgroundLevel1.draw();

	player.stopMoving();
	if (keys.left.pressed) {
		player.moveLeft();
	} else if (keys.right.pressed) {
		player.moveRight();
	}

	player.draw();
	player.update();

}

animate();