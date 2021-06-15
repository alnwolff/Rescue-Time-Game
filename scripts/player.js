class Player {

    constructor() {

        this.health = 100;
        this.velocity = 0;
		this.gravity = 0.4;
		this.width = 200;
		this.height = 280;
		this.x = 100;
		this.y = 530;

    }

    draw() {
		// this pushes the player down
		this.velocity += this.gravity;
		this.y += this.velocity;
		// if the player moves out of the screen on the bottom
		if (this.y >= 530) {
			// we reset the y to it's starting position
			this.y = 530;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height);

        if (this.health <= 0) {
            noLoop();

            let gameOverMessage = '<h2>You lose all your health!</h2>';
                let messageTag = document.querySelector('#message')

                messageTag.classList.remove('hidden');
                messageTag.classList.add('gameOver');
                messageTag.innerHTML = gameOverMessage;
        }
	}

    jump() {
		this.velocity = - 15 ;
        game.playerImage = loadImage('../assets/finn-jump.gif');

        const timeoutId = setTimeout(() => {
            game.playerImage = loadImage('../assets/finn-walk.gif');
          }, 1450);
	}

}