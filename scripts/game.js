class Game {

    constructor() {
		this.backgroundImages;
	}

    setup() {
		this.player = new Player();
		this.background = new Background();
		this.obstacles = [];
	}

    preload() {
		this.backgroundImages = [
            { src: loadImage('../assets/background/layer07_Sky.png'), x: 0, speed: 0 },
            { src: loadImage('../assets/background/layer06_Rocks.png'), x: 0, speed: 1 },
            { src: loadImage('../assets/background/layer05_Clouds.png'), x: 0, speed: 2 },
            { src: loadImage('../assets/background/layer04_Hills_2.png'), x: 0, speed: 3 },
            { src: loadImage('../assets/background/layer03_Hills_1.png'), x: 0, speed: 4 },
            { src: loadImage('../assets/background/layer02_Trees.png'), x: 0, speed: 5 },
            { src: loadImage('../assets/background/layer01_Ground.png'), x: 0, speed: 6 },
		];

        this.playerImage = loadImage('../assets/finn-walk.gif');
        this.obstacleImage = loadImage('../assets/Hero-Bullet.gif');

    }

    draw() {
		clear();
		this.background.draw();
        this.player.draw();

        if (frameCount % 100 === 0) {
			this.obstacles.push(new Obstacle(this.obstacleImage));
			// console.log(this.obstacles);
		}

        this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})
		// we use array filter to remove coins that collide with the player from the array
		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
				return false;
			} else {
				return true
			}
			// obstacle.collision(this.player);
		})
    }
}