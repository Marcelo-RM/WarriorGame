const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

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
	
	c.fillStyle = 'White';
	c.fillRect(0, 0, canvas.width, canvas.height);

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