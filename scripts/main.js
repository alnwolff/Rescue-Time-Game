const game = new Game();

function setup() {
    createCanvas(1200, 900);
    game.setup();
}

function preload() {
    game.preload();
}

function draw () {
    game.draw();
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump();
	}
}


//without OOP - just to check the movements and gifs


// let img;
// let player_x = 100;
// let height = 200;
// let player_y = 590;
// let velocity = 0;
// let gravity = 0.2;
// let cage;
// let prisioner;


// function setup() {
//     let canvas = createCanvas(1100, 900);
//     canvas.parent("canvas");
//     console.log('setup vas called')
// }

// function preload() {
//     console.log('preload was called');
//     img = loadImage('../assets/finn-walk.gif');
//     cage = loadImage('../assets/cage.png');
//     prisioner = loadImage('../assets/jake-waiting-dance.gif')
// }

// function draw() {
//     clear();
//     image(img, player_x, player_y);   

//     velocity += gravity;
//     player_y += velocity;
    
//     if (player_y >= 590) {
//         player_y = 590;
//     }

//     image(prisioner,700,590,200,200);
//     image(cage, 700, 590, 200,200);

// }

// function keyPressed() {

//     if (keyCode === 32) {
//         velocity = - 10;
//         img = loadImage('../assets/finn-jump.gif');

//         const timeoutId = setTimeout(() => {
//             img = loadImage('../assets/finn-walk.gif');
//           }, 1750);
//     }

// }