class Player extends Sprite {
	constructor({
		collisionBlocks = [],
		imageSrc,
		frameRate
	}) {

		super({ imageSrc, frameRate });

		this.position = {
			x: 200,
			y: 200
		};
		this.velocity = {
			x: 0,
			y: 0
		}

		this.sides = {
			top: this.position.y,
			bottom: this.position.y + this.height
		}
		this.gravity = 2;

		this.collisionBlocks = collisionBlocks;
	};

	jump() {
		if (this.velocity.y < 5) {
			this.velocity.y = -20;
		}
	};

	moveRight() {
		this.velocity.x = 4;
		this.image.src = "/img/Sprites/Walk.png";
	};

	moveLeft() {
		this.velocity.x = -4;
		this.reverse = true;
		this.image.src = "/img/Sprites/Walk.png";
	};

	stopMoving() {
		this.image.src = "/img/Sprites/Idle.png";
		this.velocity.x = 0;
	}

	update() {
		c.fillStyle = 'rgba(0, 0, 255, 0.3)';
		//c.fillRect(this.position.x, this.position.y, this.width, this.height)
		this.position.x += this.velocity.x;

		//Configurar HitBox
		this.updateHitbox()

		//Verifica colisões horizontais
		this.checkForHorizontalCollision();

		// Adicionar gravidade		
		this.applyGravity();

		//Configurar HitBox
		this.updateHitbox()
		
		//Verifica colisão vertical
		this.checkForVerticalCollision();

	};

	updateHitbox() {
		this.hitbox = {
			position: {
				x: this.position.x + 25,
				y: this.position.y + 15
			},
			width: 15,
			height: 30
		};
	};

	checkForHorizontalCollision() {
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];

			//Se colisão existe
			if (
				this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
				this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
				this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
				this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
			) {
				//Colisão indo para a esquerda
				if (this.velocity.x < 0) {
					this.velocity.x = 0;
					const offset = this.hitbox.position.x - this.position.x;
					this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.1;
					break;
				}
				//Colisão indo para a direita
				if (this.velocity.x > 0) {
					this.velocity.x = 0;
					const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
					this.position.x = collisionBlock.position.x - offset - 0.01;
					break;
				}
			}
		}
	};

	checkForVerticalCollision() {
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];

			//Se colisão existe
			if (
				this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
				this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
				this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
				this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
			) {
				//Colisão indo para cima
				if (this.velocity.y < 0) {
					this.velocity.y = 0;
					const offset = this.hitbox.position.y - this.position.y
					this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.1;
					break;
				}
				//Colisão indo para baixo
				if (this.velocity.y > 0) {
					this.velocity.y = 0;
					const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
					this.position.y = collisionBlock.position.y - offset - 0.01;
					break;
				}
			}
		}
	};

	applyGravity() {
		this.velocity.y += this.gravity;
		this.position.y += this.velocity.y;
		this.sides.bottom = this.position.y + this.height;

		//Acima do limite do canvas
		// if (this.sides.bottom + this.velocity.y < canvas.height) {
		// 	this.velocity.y += this.gravity
		// }
		// else {
		// 	this.velocity.y = 0;
		// }
	};


};