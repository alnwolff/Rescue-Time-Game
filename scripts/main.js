const game = new Game();
let bgMusic;
let impactSound;
let winMusic;
let loseMusic;

function preload() {
    game.preload();
    soundFormats('wav');
    bgMusic = loadSound("sounds/background.wav");
    impactSound = loadSound('sounds/impact.wav');
    winMusic = loadSound('sounds/win.wav');
    loseMusic = loadSound('sounds/lose.wav');
}

function setup() {
    mode = 0;
    bgMusic.stop()
    createCanvas(900, 600);
    game.setup();
    textSize(40);
    textAlign(CENTER)

    document.querySelector('#message').classList.add('hidden')

    const button = createButton('RESTART GAME');
    button.mousePressed(setup);
    button.position(270, 780);
}


function draw () {
    clear()
    if (mode == 0) {
        text('Press ENTER to start the Game!', 450, 300);
    }

    if (mode == 1) {
        game.draw();
    }
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump();
	}

    if (keyCode === ENTER) {
        mode = 1;
        bgMusic.loop();
        bgMusic.setVolume(0.5);
    }

}
