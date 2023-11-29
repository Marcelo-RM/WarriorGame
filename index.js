const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const player = new Player();

function animate() {
	window.requestAnimationFrame(animate);
	
	c.fillStyle = 'red';
	c.fillRect(0, 0, canvas.width, canvas.height);

	player.draw();
	player.update();

}

animate();