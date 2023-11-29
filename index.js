const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
	position: {
		x: 0,
		y: 0
	},
	imageSrc: "./img/backgroundLevel1.png"
});

const player = new Player({
	collisionBlocks: collisionBlocks,
	imageSrc: "./img/Warrior/WalkingRightSprite.png",
	frameRate: 6
});

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
	collisionBlocks.forEach(collisionBlock => {
		collisionBlock.draw();
	});

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