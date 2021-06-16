class Cage {

    constructor() {

		this.width = 140;
		this.height = 140;
		this.x = 1200;
		this.y = 390;

    }

    draw() {
        
        image(game.prisionerImage, this.x, this.y, this.width, this.height);
		image(game.cageImage, this.x, this.y - 13, 130, 130);
        
        this.x -= 5.5;


	}

    collision(playerInfo) {

        const cageX = this.x + this.width /2;
		const cageY = this.y + this.height /2;

        const playerX = playerInfo.x + playerInfo.width /2;
		const playerY = playerInfo.y + playerInfo.height /2;

        if (dist(cageX, cageY, playerX, playerY) > 130) {
			return false;
		} else {
			return true;
		}

	}

   
}