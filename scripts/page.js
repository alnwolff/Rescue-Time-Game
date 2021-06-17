class Page {
    constructor(image) {

		this.image = image;
		this.x = 1200;
		this.y = (Math.random() * 600) /1.5;
		this.width = 60;
		this.height = 50;
	}

    collision(playerInfo) {

        const pageX = this.x + this.width /2;
		const pageY = this.y + this.height /2;

        const playerX = playerInfo.x + playerInfo.width /2;
		const playerY = playerInfo.y + playerInfo.height /2;

        if (dist(pageX, pageY, playerX, playerY) > 90) {
			return false;
		} else {

            game.player.collectedPages ++
            game.pageSound.play();
            game.pageSound.setVolume(4)
            ;

			return true;
		}

	}

    draw() {
		this.x -= 10;
		image(this.image, this.x, this.y, this.width, this.height);
	}


}