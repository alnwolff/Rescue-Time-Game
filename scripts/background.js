class Background {
    draw() {

        game.backgroundImages.forEach(function (img) {
			img.x -= img.speed;
			image(img.src, img.x, 0, 900, 600);

            image(img.src, img.x + 900, 0, 900, 600);
			
            
			if (img.x <= - 900) {
				img.x = 0;
			}
		})

    }
}