const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    mode = 0;
    createCanvas(1200, 900);
    game.setup();
    textSize(50);
    textAlign(CENTER)

    document.querySelector('#message').classList.add('hidden')

    const button = createButton('RESTART GAME');
    button.mousePressed(setup);
    button.position(600, 1300);

}


function draw () {
    clear()
    if (mode == 0) {
        text('Press ENTER to start the Game!', 600, 300);
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
    }

}
