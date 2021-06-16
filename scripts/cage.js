class Cage {

    constructor() {

		this.width = 200;
		this.height = 280;
		this.x = 1200;
		this.y = 550;

    }

    draw() {
        
        image(game.prisionerImage, this.x, this.y, this.width, this.height);
		image(game.cageImage, this.x + 30, this.y + 50, 180, 180);
        
        this.x -= 6;


	}

    collision(playerInfo) {

        const cageX = this.x + this.width /2;
		const cageY = this.y + this.height /2;

        const playerX = playerInfo.x + playerInfo.width /2;
		const playerY = playerInfo.y + playerInfo.height /2;

        if (dist(cageX, cageY, playerX, playerY) > 150) {
			return false;
		} else {
			return true;
		}

	}

   
}