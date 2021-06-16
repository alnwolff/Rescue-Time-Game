class Game {

    constructor() {
		this.backgroundImages;
	}

    setup() {
		this.player = new Player();
		this.background = new Background();
		this.obstacles = [];
        this.rescues = [];
        this.playerHealth = [];
        this.healthImages = [
            {src: loadImage('assets/heart.png'), x: 10, y: 20},
            {src: loadImage('assets/heart.png'), x: 70, y: 20},
            {src: loadImage('assets/heart.png'), x: 130, y: 20},
            {src: loadImage('assets/heart.png'), x: 190, y: 20},
            {src: loadImage('assets/heart.png'), x: 250, y: 20},
        ];
	}

    preload() {
		this.backgroundImages = [
            { src: loadImage('assets/background/layer07_Sky.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/layer06_Rocks.png'), x: 0, speed: 0.5 },
            { src: loadImage('assets/background/layer05_Clouds.png'), x: 0, speed: 1.5 },
            { src: loadImage('assets/background/layer04_Hills_2.png'), x: 0, speed: 2.5 },
            { src: loadImage('assets/background/layer03_Hills_1.png'), x: 0, speed: 3.5 },
            { src: loadImage('assets/background/layer02_Trees.png'), x: 0, speed: 4.5 },
            { src: loadImage('assets/background/layer01_Ground.png'), x: 0, speed: 5.5 },
		];

        this.playerImage = loadImage('assets/finn-walk.gif');
        this.obstacleImage = loadImage('assets/Hero-Bullet.gif');
        this.cageImage = loadImage('assets/cage.png');
        this.prisionerImage = loadImage('assets/jake-waiting-dance.gif');
    }

    draw() {
		this.background.draw();
        this.player.draw();

        // health hearts
        game.healthImages.forEach(function (img) {

            image(img.src, img.x, img.y, 40, 40);
        })

        // obstacle appearance and collision

        if (frameCount % 100 === 0) {
			this.obstacles.push(new Obstacle(this.obstacleImage));
		}

        this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})

        this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
				return false;
			} else {
				return true
			}
		})

        // cage appearance and collision

        if (frameCount % 2000 === 0) {
			this.rescues.push(new Cage());
		}

        this.rescues.forEach(function (rescue) {
			rescue.draw();
            
            if (rescue.collision(game.player)) {
                mode = 0;

                let winMessage = '<h2>You rescued Jake! Good Job!</h2>';
                let messageTag = document.querySelector('#message')

                messageTag.classList.remove('hidden');
                messageTag.classList.add('win');
                messageTag.innerHTML = winMessage;

            }
		})

        if (this.healthImages.length <= 0) {
            mode = 0;

            let gameOverMessage = '<h2>You lost all your health!</h2>';
                let messageTag = document.querySelector('#message')

                messageTag.classList.remove('hidden');
                messageTag.classList.remove('win');
                messageTag.classList.add('gameOver');
                messageTag.innerHTML = gameOverMessage;
        }

    

    }

}