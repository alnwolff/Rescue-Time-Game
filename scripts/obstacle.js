class Obstacle {
    constructor(image) {

		this.image = image;
		this.x = 1200;
		this.y = (Math.random() * 900) /1.5;
		this.width = 150;
		this.height = 150;
	}

    collision(playerInfo) {

        const obstacleX = this.x + this.width /2;
		const obstacleY = this.y + this.height /2;

        const playerX = playerInfo.x + playerInfo.width /2;
		const playerY = playerInfo.y + playerInfo.height /2;

        if (dist(obstacleX, obstacleY, playerX, playerY) > 90) {
			return false;
		} else {

            game.player.health -= 10;
            console.log(game.player.health)
			return true;
		}

	}

    draw() {
		this.x -= 10;
		image(this.image, this.x, this.y, this.width, this.height);
	}


}