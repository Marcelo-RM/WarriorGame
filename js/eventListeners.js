window.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "w":
			player.jump();
			break;
		case "ArrowUp":
			player.jump();
			break;

		case "d":
			keys.right.pressed = true;
			//player.moveRight();
			break;
		case "ArrowRight":
			keys.right.pressed = true;
			//player.moveRight();
			break;

		case "a":
			keys.left.pressed = true;
			//player.moveLeft();
			break;
		case "ArrowLeft":
			keys.left.pressed = true;
			//player.moveLeft();
			break;
		case " ":
			keys.attackA.pressed = true;
			break;
		case "j":
			keys.attackA.pressed = true;
			break;

		default:
			break;
	}
});

window.addEventListener("keyup", (event) => {
	switch (event.key) {
		case "d":
			keys.right.pressed = false;
			//player.stopMoving();
			break;
		case "ArrowRight":
			keys.right.pressed = false;
			//player.stopMoving();
			break;

		case "a":
			keys.left.pressed = false;
			//player.stopMoving();
			break;
		case "ArrowLeft":
			keys.left.pressed = false;
			//player.stopMoving();
			break;
		case " ":
			keys.attackA.pressed = false;
			break;
		case "j":
			keys.attackA.pressed = false;
			break;

		default:
			break;
	}
});