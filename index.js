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
	imageSrc: "./img/Sprites/IdleRight.png",
	frameRate: 8,
	animations: {
		idleRight: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/IdleRight.png"
		},
		idleLeft: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/IdleLeft.png"
		},
		walkRight: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/RunRight.png"
		},
		walkLeft: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/RunLeft.png"
		},
		jumpRight: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/JumpRight.png"
		},
		jumpLeft: {
			frameRate: 8,
			frameBuffer: 6,
			loop: true,
			imageSrc: "./img/Sprites/JumpLeft.png"
		},
		attackARight: {
			frameRate: 6,
			frameBuffer: 3,
			loop: false,
			imageSrc: "./img/Sprites/AttackARight.png"
		},
		attackALeft: {
			frameRate: 6,
			frameBuffer: 3,
			loop: false,
			imageSrc: "./img/Sprites/AttackALeft.png"
		}
	}
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
	},
	attackA: {
		pressed: false
	}
}

function animate() {
  window.requestAnimationFrame(animate);

  backgroundLevel1.draw();
  collisionBlocks.forEach(collisionBlock => {
    collisionBlock.draw();
  });

	player.velocity.x = 0;
  if (keys.left.pressed) {
		player.moveLeft();
  } else if (keys.right.pressed) {
		player.moveRight();
	} else if (keys.attackA.pressed) {
		player.attackA();
	}	else {
		player.stopMoving();
	}

  player.draw();
  player.update();

}

animate();