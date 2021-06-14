class Game {

    constructor() {
		this.backgroundImages;
	}

    setup() {
		// this.player = new Player();
		this.background = new Background();
		// this.obstacles = [];
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
    }

    draw() {
		clear();
		this.background.draw();
    }
}