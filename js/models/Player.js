class Player {
	constructor() {
		this.position = {
			x: 100,
			y: 100
		};
		this.velocity = {
			x: 0,
			y: 0
		}
		this.width = 64;
		this.height = 100;
		this.sides = {
			top: this.position.y,
			bottom: this.position.y + this.height
		}
		this.gravity = 1;
	};

	draw() {
		c.fillStyle = "blue";
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
		//c.fillStyle = "green";
		//c.fillRect(this.position.x, this.position.y, this.width, 30);

		c.beginPath();
		c.arc(this.position.x + 32, this.position.y - 32, 30, 0, Math.PI * 2, true);
		c.fillStyle = "brown";
		c.fill();
		c.stroke();
	};

	jump() {
		if (this.velocity.y < 5) {
			this.velocity.y = -20;
		}
	};

	moveRight() {
		this.velocity.x = 4;
	};
	
	moveLeft() {
		this.velocity.x = -4;
	};

	stopMoving() {
		this.velocity.x = 0;
	}

	update() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.sides.bottom = this.position.y + this.height;
		this.sides.top = this.position.y - 32;
		
		//Acima do limite do canvas
		if (this.sides.bottom + this.velocity.y < canvas.height && this.sides.top >= 0) {
			this.velocity.y += this.gravity;
			this.position.y++;
		}
		//Abaixo do limite do canvas
		else if (this.sides.top < 0) {
			this.velocity.y += this.gravity;
			this.position.y = 64;
		}
		else {
			this.velocity.y = 0;
		}
	};
};