$(document).ready(function(){

	var SnakeQuest = SnakeQuest || {};

	SnakeQuest.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container');

	// BOOT STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Boot = function(){};
	SnakeQuest.Boot.prototype = {
	    preload: function() {
	    	SnakeQuest.game.load.image('loadingBar', 'assets/graphics/loading-bar.jpg', 75, 50);
			// SnakeQuest.game.load.spritesheet('name', 'filepath', 56, 56);
	    },
	    create: function() {
	        this.game.stage.backgroundColor = '#121429';
	        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	        this.scale.minWidth = 400;
	        this.scale.minHeight = 300;
	        this.scale.maxWidth = 800;
	        this.scale.maxHeight = 600;
	        this.scale.pageAlignHorizontally = true;
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);
	        this.state.start('Preload');
	    }
	};
	// !BOOT STATE

	// PRELOAD STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Preload = function(){};
	SnakeQuest.Preload.prototype = {
	    preload: function() {
	        this.game.stage.backgroundColor = '#121429';

	        // MENU SCREENS
	        SnakeQuest.game.load.image('menu', 'assets/graphics/menu.jpg', 800, 600);
	    	SnakeQuest.game.load.image('gameOver', 'assets/graphics/gameover.jpg', 800, 600);
	    	SnakeQuest.game.load.image('level1', 'assets/graphics/level-1.jpg', 800, 600);
	    	SnakeQuest.game.load.image('level2', 'assets/graphics/level-2.jpg', 800, 600);
	    	SnakeQuest.game.load.image('level3', 'assets/graphics/level-3.jpg', 800, 600);
	    	SnakeQuest.game.load.image('level4', 'assets/graphics/level-4.jpg', 800, 600);
			SnakeQuest.game.load.image('cutscene1', 'assets/graphics/cutscene-1.jpg', 800, 600);
			SnakeQuest.game.load.image('cutscene2', 'assets/graphics/cutscene-2.jpg', 800, 600);
			SnakeQuest.game.load.image('cutscene3', 'assets/graphics/cutscene-3.jpg', 800, 600);
			SnakeQuest.game.load.image('screenWin', 'assets/graphics/win-screen.jpg', 800, 600);
			SnakeQuest.game.load.image('screenCredits', 'assets/graphics/credits-screen.jpg', 800, 600);


	        // LOADING BAR
	        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBar');
	        this.preloadBar.anchor.setTo(0.5);
	        this.preloadBar.smoothed = false;
	        this.load.setPreloadSprite(this.preloadBar);

			// PLAYER
				// Platformer
				SnakeQuest.game.load.spritesheet('playerPlatformer', 'assets/graphics/player-platformer.png', 32, 48);

				// Snake
				SnakeQuest.game.load.image('player', 'assets/graphics/player.jpg', 32, 32);

	        // GAME OBJECTS

	        	// NPCs
	        	SnakeQuest.game.load.image('snakeNPC', 'assets/graphics/snake-npc.png');

	        	// In-game Text
	        	SnakeQuest.game.load.image('couldThisBeTheEnd', 'assets/graphics/could-this-be-the-end.png');

	        	// Explosion Particles
	        	SnakeQuest.game.load.image('EnemyExplosionParticle', 'assets/graphics/EnemyExplosionParticle.png');
	        	SnakeQuest.game.load.image('PlayerExplosionParticle', 'assets/graphics/PlayerExplosionParticle.png');

	        	// Platformer objects
				SnakeQuest.game.load.image('background1', 'assets/graphics/bg1.jpg');
			    SnakeQuest.game.load.image('ground', 'assets/graphics/platform.jpg');

			    // Spikes
			    SnakeQuest.game.load.image('spike', 'assets/graphics/spike.png');

			    // Doors
				SnakeQuest.game.load.image('door', 'assets/graphics/door.png');

	        	// Enemy
	        	SnakeQuest.game.load.image('enemy', 'assets/graphics/enemy.jpg', 32, 32);

		        // Pickups
		        SnakeQuest.game.load.image('pickupPoint', 'assets/graphics/pickup-point-sm.png');
				SnakeQuest.game.load.spritesheet('pickupHealth', 'assets/graphics/pickup-health-loop.png', 24, 25);
		        SnakeQuest.game.load.image('diamond', 'assets/graphics/diamond.png');

		        // Bullets
		        SnakeQuest.game.load.image('bullet', 'assets/graphics/bullet.png');
				SnakeQuest.game.load.spritesheet('fireBullet', 'assets/graphics/pickup-fire-bullets-loop.png', 24, 27);

		        // Health
		        SnakeQuest.game.load.image('lives1', 'assets/graphics/lives-1.png', 82, 24);
		        SnakeQuest.game.load.image('lives2', 'assets/graphics/lives-2.png', 82, 24);
		        SnakeQuest.game.load.image('lives3', 'assets/graphics/lives-3.png', 82, 24);

			// AUDIO

				// Sound Effects
				SnakeQuest.game.load.audio('soundJump', 'assets/audio/jump.ogg');
				SnakeQuest.game.load.audio('soundExplosion', 'assets/audio/explosion.ogg');
				SnakeQuest.game.load.audio('soundShoot', 'assets/audio/shoot.ogg');
				SnakeQuest.game.load.audio('soundPickupPoint', 'assets/audio/pickup-point.ogg');
				SnakeQuest.game.load.audio('soundPickupOther', 'assets/audio/pickup-other.ogg');
				SnakeQuest.game.load.audio('soundDoor', 'assets/audio/door.ogg');

				// Music
				SnakeQuest.game.load.audio('MusicPlatformer', 'assets/audio/MusicPlatformer.mp3');
				SnakeQuest.game.load.audio('MusicLevel3', 'assets/audio/MusicLevel3.mp3');
				SnakeQuest.game.load.audio('MusicSnake', 'assets/audio/MusicSnake.mp3');
				SnakeQuest.game.load.audio('MusicWin', 'assets/audio/MusicSnake.mp3');
				SnakeQuest.game.load.audio('MusicCutscene', 'assets/audio/MusicSnake.mp3');
	    },
	    create: function() {
	        this.state.start('MainMenu');
	    }
	};
	// !PRELOAD STATE

	// MAINMENU STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.MainMenu = function(){};
	SnakeQuest.MainMenu.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'menu');

			var style = { font: "20px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "22px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('Cutscene1');
			}
		}
	};
	// !MAINMENU STATE

	// CUTSCENE 1 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Cutscene1 = function(){};
	SnakeQuest.Cutscene1.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'cutscene1');
			musicCutscene = this.game.add.audio('MusicCutscene');
			musicCutscene.play();
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('Cutscene2');
			}
		}
	};
	// !CUTSCENE 1 STATE

	// CUTSCENE 2 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Cutscene2 = function(){};
	SnakeQuest.Cutscene2.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'cutscene2');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('PreLevel1');
			}
		}
	};
	// !CUTSCENE 2 STATE

	// PRELEVEL 1 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PreLevel1 = function(){};
	SnakeQuest.PreLevel1.prototype = {
		init: function(platformingScore, snakeScore) {
			console.log('Level 1');
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicCutscene.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'level1');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('PlatformingGame_Level1');
			}
		}
	};
	// !PRELEVEL 1 STATE

	// PLATFORMING GAME LEVEL 1 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PlatformingGame_Level1 = function(){};
	SnakeQuest.PlatformingGame_Level1.prototype = {
	    create: function() {
	    	this.platforms;
			this.cursors;
			this.pickups;
			this.diamonds;
			this.scoreText;
			this.bulletTimer = 0;

	    	// World dimensions
	        this.game.world.setBounds(0, 0, 2400, 600);

	        // Background Colour
	        this.game.stage.backgroundColor = '#121429';
	        // this.game.add.sprite(0, 0, 'background1');

	        // Physics
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);

	        // Game Objects
		        // Platforms
		        platforms = this.game.add.group();
		        platforms.enableBody = true;

			        // Floor
			        ground = platforms.create(0, this.game.world.height - 32, 'ground');
			        ground.scale.setTo(3, 2);
			        ground.body.immovable = true;

			        ground2 = platforms.create((ground.y*2)+200, this.game.world.height - 32, 'ground');
			        ground2.scale.setTo(1, 1);
			        ground2.body.immovable = true;

			        ground3 = platforms.create(1900, this.game.world.height - 32, 'ground');
			        ground3.scale.setTo(2, 1);
			        ground3.body.immovable = true;

			        // Ledges
			        ledge1 = platforms.create(400, 450, 'ground');
					ledge1.body.immovable = true;
					ledge2 = platforms.create(-100, 350, 'ground');
					ledge2.body.immovable = true;
					ledge3 = platforms.create(375, 230, 'ground');
					ledge3.scale.setTo(0.5, 1);
					ledge3.body.immovable = true;
					ledge4 = platforms.create(575, 130, 'ground');
					ledge4.scale.setTo(0.5, 1);
					ledge4.body.immovable = true;
					ledge5 = platforms.create(825, 80, 'ground');
					ledge5.scale.setTo(3, 1);
					ledge5.body.immovable = true;
					ledge6 = platforms.create(2250, 350, 'ground');
					ledge6.scale.setTo(0.5, 1);
					ledge6.body.immovable = true;

					// Moving Platforms
					// movingLedge1 = platforms.create(50, 450, 'ground');
					// movingLedge1.scale.setTo(0.5, 1);
					// movingLedge1.body.immovable = true;
					// movingLedge1.body.velocity.x = 100;

					// Spikes
					spikes = this.game.add.group();
		        	spikes.enableBody = true;
		        	spike1 = spikes.create(2150, (this.game.world.height - 56), 'spike');
		        	spike1 = spikes.create(2045, (this.game.world.height - 56), 'spike');
					

				// Doors
				doors = this.game.add.group();
		        doors.enableBody = true;
		        door = doors.create(2336, (this.game.world.height - 79)-32, 'door');

				// Pickups
					// Point Pickups
					pickups = this.game.add.group();
					pickups.enableBody = true;
					for (var i = 0; i < 21; i++) {
						if(i == 3){
						} else {
							//  Create a pickup inside of the 'pickups' group
					    	var pickup = pickups.create(i * 100, 0, 'pickupPoint');
					    	//  Let gravity do its thing
					    	pickup.body.gravity.y = 600;
					    	//  This just gives each pickup a slightly random bounce value
					    	pickup.body.bounce.y = 0.2 + Math.random() * 0.2;
						}
					}
					for (var i = 4.3; i < 7; i++) {
						var pickup = pickups.create(i * 100, 300, 'pickupPoint');
						pickup.body.gravity.y = 600;
						pickup.body.bounce.y = 0.2 + Math.random() * 0.2;
					}

					// Diamond Pickups
					diamonds = this.game.add.group();
					diamonds.enableBody = true;
				    var diamond = diamonds.create(2310, 0, 'diamond');
				    diamond.body.gravity.y = 600;
				    diamond.body.bounce.y = 0.2 + Math.random() * 0.2;

				    // Health Pickups
				    healthPickups = this.game.add.group();
					healthPickups.enableBody = true;
				    var healthPickup = healthPickups.create(2100, 300, 'pickupHealth');
				    healthPickup.body.gravity.y = 600;
				    healthPickup.body.bounce.y = 0.2 + Math.random() * 0.2;
				        // Animations
				    	healthPickup.animations.add('loop', [0, 1], 5, true);
				    	healthPickup.animations.play('loop');

				   	// Fire Bullet pickups
				   	fireBullets = this.game.add.group();
					fireBullets.enableBody = true;
				    var fireBullet = fireBullets.create(730, 300, 'fireBullet');
				    fireBullet.body.gravity.y = 600;
				    fireBullet.body.bounce.y = 0.2 + Math.random() * 0.2;
					    // Animations
						fireBullet.animations.add('loop', [0, 1, 2], 5, true);
						fireBullet.animations.play('loop');

				// Bullets
				bullets = this.game.add.group();
				bullets.enableBody = true;
				bullets.physicsBodyType = Phaser.Physics.ARCADE;
				bullets.createMultiple(20, 'bullet');
				bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.killBullet);
				bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
				bullets.setAll('checkWorldBounds', true);

				// Enemies
				enemies = this.game.add.group();
				enemies.enableBody = true;
				enemies.physicsBodyType = Phaser.Physics.ARCADE;

				enemy1 = enemies.create(0, 300, 'enemy');
				enemy1.body.gravity.y = 1200;
				enemy1.body.bounce.y = 0.2 + Math.random() * 0.2;
				enemy1.xMin = 0;
				enemy1.xMax = 268;
				enemy1.body.velocity.x = 150;

				enemy2 = enemies.create(1335, 300, 'enemy');
				enemy2.body.gravity.y = 1200;
				enemy2.body.bounce.y = 0.2 + Math.random() * 0.2;
				enemy2.xMin = 1335;
				enemy2.xMax = 1700;
				enemy2.body.velocity.x = 150;

		        // Player
		        	// Sprite
					player = this.game.add.sprite(32, this.game.world.height - 150, 'playerPlatformer');
					// Player Physics
					this.game.physics.arcade.enable(player);
					player.body.bounce.y = 0.1;
					player.body.gravity.y = 600;
					player.body.collideWorldBounds = true;
					// Animations
					player.animations.add('left', [0, 1, 2, 3], 10, true);
					player.animations.add('right', [5, 6, 7, 8], 10, true);
					// Camera
					this.game.camera.follow(player); 

	        // Game Variables
	        platformingScore = 0;
	        lives = 3;

	        // Text & HUD
			var style = { font: "14px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "16px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };

			scoreText1 = this.game.add.text(15, 15, "SCORE: ", style);
			scoreText2 = this.game.add.text(73, 13, platformingScore, style2);
			scoreText1.smoothed = false;
			scoreText2.smoothed = false;
			scoreText1.fixedToCamera = true;
			scoreText2.fixedToCamera = true;

			lifeDisplay = this.game.add.sprite(Math.round((this.game.width/2)-41), 15, 'lives3');
			lifeDisplay.fixedToCamera = true;		

			//  Controls
			cursors = this.game.input.keyboard.createCursorKeys();
			spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	        
	        // Audio
	        soundJump = this.game.add.audio('soundJump');
			soundExplosion = this.game.add.audio('soundExplosion');
			soundShoot = this.game.add.audio('soundShoot');
			soundPickupPoint = this.game.add.audio('soundPickupPoint');
			soundPickupOther = this.game.add.audio('soundPickupOther');
			soundDoor = this.game.add.audio('soundDoor');

			musicLevel1 = this.game.add.audio('MusicPlatformer');
			musicLevel1.play();
	    },
	    update: function() {
	        //  Collide the player and the pickups with the platforms
	        this.game.physics.arcade.collide(player, platforms);
	        this.game.physics.arcade.collide(pickups, platforms);
	        this.game.physics.arcade.collide(diamonds, platforms);
	        this.game.physics.arcade.collide(fireBullets, platforms);
	        this.game.physics.arcade.collide(enemies, platforms);
	        this.game.physics.arcade.collide(healthPickups, platforms);
	        
	        //  Checks to see if the player overlaps with any of the pickups, if he does call the collectStar function
	        this.game.physics.arcade.overlap(player, pickups, this.collisionPointPickup, null, this);
	        this.game.physics.arcade.overlap(player, diamonds, this.collisionDiamond, null, this);
	        this.game.physics.arcade.overlap(player, doors, this.collisionDoor, null, this);
	        this.game.physics.arcade.overlap(player, enemies, this.collisionEnemy, null, this);
	        this.game.physics.arcade.overlap(bullets, enemies, this.shootEnemy, null, this);
	        this.game.physics.arcade.overlap(player, fireBullets, this.collisionBulletPickup, null, this);
	        this.game.physics.arcade.overlap(player, healthPickups, this.collisionHealthPickup, null, this);
	        this.game.physics.arcade.overlap(player, spikes, this.collisionSpikes, null, this);

	        //  Reset the players velocity (movement)
	        player.body.velocity.x = 0;

	        if (cursors.left.isDown) {
	            //  Move to the left
	            player.body.velocity.x = -250;
	            player.animations.play('left');
	        } else if (cursors.right.isDown) {
	            //  Move to the right
	            player.body.velocity.x = 250;
	            player.animations.play('right');
	        } else {
	            //  Stand still
	            player.animations.stop();
	            player.frame = 4;
	        }
	        
	        //  Allow the player to jump if they are touching the ground.
	        if (cursors.up.isDown && player.body.touching.down) {
	            player.body.velocity.y = -450;
	            soundJump.play();
	        }

	        // Player shooting
	        if (spaceBar.isDown && cursors.right.isDown) {
	            this.playerShoot('right');
	        } else if (spaceBar.isDown && cursors.left.isDown) {
				this.playerShoot('left');
	        } else if (spaceBar.isDown) {
	        	this.playerShoot('right');
	        }

	        // Enemy Movement
	        this.moveEnemy(enemy1);
	        this.moveEnemy(enemy2);

	        // Collision
	        this.collisionWall();

	    },
		moveEnemy: function(enemy){
			if(enemy.x >= enemy.xMax){
				enemy.body.velocity.x = -150;
			} else if(enemy.x <= enemy.xMin){
				enemy.body.velocity.x = 150;
			}
		},
	    killBullet: function(bullet){
	    	bullet.kill();
	    },
	    shootEnemy: function(bullet, enemy){
	    	enemy.kill();
	    	soundExplosion.play();
	    	this.particlesEnemy(enemy);
	    	this.killBullet(bullet);
	    	platformingScore += 100;
		    scoreText2.text = platformingScore.toString();
	    },
        collisionSpikes: function(player){
			this.checkLives();
        },
        particlesEnemy: function(enemy){
	    	var emitter = this.game.add.emitter(enemy.x, enemy.y, 200);
            emitter.makeParticles('EnemyExplosionParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 3000, null, 10);
        },
        collisionEnemy: function(player, enemy){
        	if (enemy.body.touching.up) {
        		enemy.kill();
        		soundExplosion.play();
        		this.particlesEnemy(enemy);
        		platformingScore += 100;
		    	scoreText2.text = platformingScore.toString();
        	} else {
				this.checkLives();
        	}
        },
	    collisionPointPickup: function(player, pickup){
	    	// Removes the pickup from the screen
		    pickup.kill();
		    soundPickupPoint.play();
		    //  Add and update the score
		    platformingScore += 10;
		    scoreText2.text = platformingScore.toString();
	    },
	    collisionDiamond: function(player, diamond){
        	// Removes the diamond from the screen
    	    diamond.kill();
    	    soundPickupOther.play();
    	    //  Add and update the score
    	    platformingScore += 500;
    	    scoreText2.text = platformingScore.toString();
        },
	    collisionHealthPickup: function(player, pickup){
	    	console.log('Picking up Health');
	    	console.log('Lives before: ', lives);
	    	// Check collision with pickup
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 50;
		    scoreText2.text = platformingScore.toString();
		    if(lives < 3){
		    	lives++;
		    	console.log('Lives after: ', lives);
		    	lifeDisplay.loadTexture('lives'+(lives), 0);
		    }
	    },
	    collisionBulletPickup: function(player, pickup){
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 20;
	    	scoreText2.text = platformingScore.toString();
	    	bullets.forEach(function(item) {
	    	    item.loadTexture('fireBullet', 0);
	    	}, this);
	    },
	    collisionDoor: function(player, doors){
	    	// Check collision with doors
	    	soundDoor.play();
	    	this.game.state.start('PreLevel2', true, false, platformingScore);
	    },
	    collisionWall: function(){
	    	// Check collision with wall boundry
	    	if(player.x >= 2400 || player.x < 0 || player.y >= 550 || player.y < 0){
	    		this.checkLives();
    	    }
	    },
	    playerShoot: function(direction){
	    	if (this.game.time.now > this.bulletTimer){
	        	var bulletLimit = 250;
	    		var bullet = bullets.getFirstExists(false);
	    		if (bullet) {
	    			bullet.reset(player.x, player.y + 30);
	    			if(direction == 'right') {
	    				bullet.body.velocity.x = 500;
	    			} else {
	    				bullet.body.velocity.x = -500;
	    			}
	    			soundShoot.play();
	    			this.bulletTimer = this.game.time.now + bulletLimit;
    			}
	    	}
	    },
	    checkLives: function(){
	    	if(lives > 0 && lives != 1){
	    		// Update lives display
	    		lifeDisplay.loadTexture('lives'+(lives-1), 0);
	    		lives--;
	    		soundExplosion.play();
	    		var emitter = this.game.add.emitter(player.x, player.y, 30);
	            emitter.makeParticles('PlayerExplosionParticle');
	            emitter.minParticleSpeed.setTo(-50, -50);
	            emitter.maxParticleSpeed.setTo(200, 200);
	            emitter.gravity = 0;
	            emitter.start(true, 1000, null, 10);
	    		// Respawn player
	    		player.x = 32;
	    		player.y = this.game.world.height - 150;
	    	} else {
	    		// player.destroy();
	    		this.gameOver();
	    	}
	    },
	    gameOver: function() {        
	        this.game.state.start('GameOver', true, false, platformingScore, 0, 'PreLevel1');
	    }
	};
	// !PLATFORMING GAME LEVEL 1  STATE

	// PRELEVEL 2 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PreLevel2 = function(){};
	SnakeQuest.PreLevel2.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicLevel1.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'level2');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('PlatformingGame_Level2', true, false, this.platformingScore);
			}
		}
	};
	// !PRELEVEL 2 STATE

	// PLATFORMING GAME LEVEL 2 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PlatformingGame_Level2 = function(){};
	SnakeQuest.PlatformingGame_Level2.prototype = {
		init: function(platformingScore) {
			this.platformingScore = platformingScore || 0;
		},
	    create: function() {
	    	this.platforms;
			this.cursors;
			this.pickups;
			this.diamonds;
			this.scoreText;
			this.bulletTimer = 0;

	    	// World dimensions
	        this.game.world.setBounds(0, 0, 2400, 600);

	        // Background Colour
	        this.game.stage.backgroundColor = '#121429';

	        // Physics
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);

	        // Game Objects
		        // Platforms
		        platforms = this.game.add.group();
		        platforms.enableBody = true;

			        // Floor
			        ground = platforms.create(0, this.game.world.height - 32, 'ground');
			        ground.scale.setTo(0.5, 2);
			        ground.body.immovable = true;

					// Moving Platforms
					movingLedge1 = platforms.create(150, 450, 'ground');
					movingLedge1.scale.setTo(0.5, 1);
					movingLedge1.body.immovable = true;
					movingLedge1.body.velocity.x = 100;
					movingLedge1.xMin = 150;
					movingLedge1.xMax = 450;

					ledge1 = platforms.create(650, 350, 'ground');
					ledge1.scale.setTo(1, 1);
					ledge1.body.immovable = true;

					movingLedge2 = platforms.create(1000, 250, 'ground');
					movingLedge2.scale.setTo(0.5, 1);
					movingLedge2.body.immovable = true;
					movingLedge2.body.velocity.x = 100;
					movingLedge2.xMin = 1000;
					movingLedge2.xMax = 1400;

					ledge2 = platforms.create(1700, 500, 'ground');
					ledge2.scale.setTo(3, 1);
					ledge2.body.immovable = true;

					movingLedge3 = platforms.create(1775, 350, 'ground');
					movingLedge3.scale.setTo(0.5, 1);
					movingLedge3.body.immovable = true;
					movingLedge3.body.velocity.x = 100;
					movingLedge3.xMin = 1775;
					movingLedge3.xMax = 2100;

					ledge3 = platforms.create(2200, 250, 'ground');
					ledge3.scale.setTo(2, 1);
					ledge3.body.immovable = true;

					// Spikes
					spikes = this.game.add.group();
		        	spikes.enableBody = true;
		        	// spike1 = spikes.create(200, (this.game.world.height - 24), 'spike');
		        	// spike2 = spikes.create(spike1.x+32, (this.game.world.height - 24), 'spike');
		        	for(i = 0; i <= 100; i++){
		        		if(i % 2){

		        		} else {
		        			spike = spikes.create(200 + (i * 32), (this.game.world.height - 24), 'spike');
		        		}
		        	}
		        	// spike1 = spikes.create(2045, (this.game.world.height - 56), 'spike');
					

				// Doors
				doors = this.game.add.group();
		        doors.enableBody = true;
		        door = doors.create(2336, this.game.world.height - 429, 'door');

				// Pickups
					// Point Pickups
					pickups = this.game.add.group();
					pickups.enableBody = true;
					for (var i = 17; i < 24; i++) {
				    	var pickup = pickups.create(i * 100, 450, 'pickupPoint');
				    	pickup.body.gravity.y = 600;
				    	pickup.body.bounce.y = 0.2 + Math.random() * 0.2;
					}

					// Diamond Pickups
					diamonds = this.game.add.group();
					diamonds.enableBody = true;
				    var diamond1 = diamonds.create(2340, 350, 'diamond');
				    diamond1.body.gravity.y = 600;
				    diamond1.body.bounce.y = 0.2 + Math.random() * 0.2;
				    var diamond2 = diamonds.create(1400, 50, 'diamond');
				    diamond2.body.gravity.y = 0;
				    diamond2.body.bounce.y = 0;

				    // Health Pickups
				    healthPickups = this.game.add.group();
					healthPickups.enableBody = true;

				   	// Fire Bullet pickups
				   	fireBullets = this.game.add.group();
					fireBullets.enableBody = true;


				// Bullets
				bullets = this.game.add.group();
				bullets.enableBody = true;
				bullets.physicsBodyType = Phaser.Physics.ARCADE;
				bullets.createMultiple(20, 'bullet');
				bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.killBullet);
				bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
				bullets.setAll('checkWorldBounds', true);

				// Enemies
				enemies = this.game.add.group();
				enemies.enableBody = true;
				enemies.physicsBodyType = Phaser.Physics.ARCADE;

				enemy1 = enemies.create(650, 250, 'enemy');
				enemy1.body.gravity.y = 1200;
				enemy1.body.bounce.y = 0.2 + Math.random() * 0.2;
				enemy1.xMin = 650;
				enemy1.xMax = 1000;
				enemy1.body.velocity.x = 150;

				enemy2 = enemies.create(1732, 250, 'enemy');
				enemy2.body.gravity.y = 1200;
				enemy2.body.bounce.y = 0.2 + Math.random() * 0.2;
				enemy2.xMin = 1732;
				enemy2.xMax = 2368;
				enemy2.body.velocity.x = 150;

		        // Player
		        	// Sprite
					player = this.game.add.sprite(32, this.game.world.height - 150, 'playerPlatformer');
					// Player Physics
					this.game.physics.arcade.enable(player);
					player.body.bounce.y = 0.1;
					player.body.gravity.y = 600;
					player.body.collideWorldBounds = true;
					// Animations
					player.animations.add('left', [0, 1, 2, 3], 10, true);
					player.animations.add('right', [5, 6, 7, 8], 10, true);
					// Camera
					this.game.camera.follow(player); 

	        // Game Variables
	        platformingScore = this.platformingScore;
	        lives = 3;

	        // Text & HUD
			var style = { font: "14px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "16px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };

			scoreText1 = this.game.add.text(15, 15, "SCORE: ", style);
			scoreText2 = this.game.add.text(73, 13, platformingScore, style2);
			scoreText1.smoothed = false;
			scoreText2.smoothed = false;
			scoreText1.fixedToCamera = true;
			scoreText2.fixedToCamera = true;

			lifeDisplay = this.game.add.sprite(Math.round((this.game.width/2)-41), 15, 'lives3');
			lifeDisplay.fixedToCamera = true;		

			//  Controls
			cursors = this.game.input.keyboard.createCursorKeys();
			spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	        
	        // Audio
	        soundJump = this.game.add.audio('soundJump');
			soundExplosion = this.game.add.audio('soundExplosion');
			soundShoot = this.game.add.audio('soundShoot');
			soundPickupPoint = this.game.add.audio('soundPickupPoint');
			soundPickupOther = this.game.add.audio('soundPickupOther');
			soundDoor = this.game.add.audio('soundDoor');

			musicLevel2 = this.game.add.audio('MusicPlatformer');
			musicLevel2.play();
	    },
	    update: function() {
	        //  Collide the player and the pickups with the platforms
	        this.game.physics.arcade.collide(player, platforms);
	        this.game.physics.arcade.collide(pickups, platforms);
	        this.game.physics.arcade.collide(diamonds, platforms);
	        this.game.physics.arcade.collide(fireBullets, platforms);
	        this.game.physics.arcade.collide(enemies, platforms);
	        this.game.physics.arcade.collide(healthPickups, platforms);
	        
	        //  Checks to see if the player overlaps with any of the pickups, if he does call the collectStar function
	        this.game.physics.arcade.overlap(player, pickups, this.collisionPointPickup, null, this);
	        this.game.physics.arcade.overlap(player, diamonds, this.collisionDiamond, null, this);
	        this.game.physics.arcade.overlap(player, doors, this.collisionDoor, null, this);
	        this.game.physics.arcade.overlap(player, enemies, this.collisionEnemy, null, this);
	        this.game.physics.arcade.overlap(bullets, enemies, this.shootEnemy, null, this);
	        this.game.physics.arcade.overlap(player, fireBullets, this.collisionBulletPickup, null, this);
	        this.game.physics.arcade.overlap(player, healthPickups, this.collisionHealthPickup, null, this);
	        this.game.physics.arcade.overlap(player, spikes, this.collisionSpikes, null, this);

	        //  Reset the players velocity (movement)
	        player.body.velocity.x = 0;

	        if (cursors.left.isDown) {
	            //  Move to the left
	            player.body.velocity.x = -250;
	            player.animations.play('left');
	        } else if (cursors.right.isDown) {
	            //  Move to the right
	            player.body.velocity.x = 250;
	            player.animations.play('right');
	        } else {
	            //  Stand still
	            player.animations.stop();
	            player.frame = 4;
	        }
	        
	        //  Allow the player to jump if they are touching the ground.
	        if (cursors.up.isDown && player.body.touching.down) {
	            player.body.velocity.y = -450;
	            soundJump.play();
	        }

	        // Player shooting
	        if (spaceBar.isDown && cursors.right.isDown) {
	            this.playerShoot('right');
	        } else if (spaceBar.isDown && cursors.left.isDown) {
				this.playerShoot('left');
	        } else if (spaceBar.isDown) {
	        	this.playerShoot('right');
	        }

	        // Enemy Movement
	        this.moveEnemy(enemy1);
	        this.moveEnemy(enemy2);

	        // Moving Platform Movement
	        this.moveLedge(movingLedge1);
	        this.moveLedge(movingLedge2);
	        this.moveLedge(movingLedge3);

	        // Collision
	        this.collisionWall();

	    },
	    moveLedge: function(ledge){
    		if(ledge.x >= ledge.xMax){
    			ledge.body.velocity.x = -150;
    		} else if(ledge.x <= ledge.xMin){
    			ledge.body.velocity.x = 150;
    		}
	    },
		moveEnemy: function(enemy){
			if(enemy.x >= enemy.xMax){
				enemy.body.velocity.x = -150;
			} else if(enemy.x <= enemy.xMin){
				enemy.body.velocity.x = 150;
			}
		},
	    killBullet: function(bullet){
	    	bullet.kill();
	    },
	    shootEnemy: function(bullet, enemy){
	    	enemy.kill();
	    	soundExplosion.play();
	    	this.particlesEnemy(enemy);
	    	this.killBullet(bullet);
	    	platformingScore += 100;
		    scoreText2.text = platformingScore.toString();
	    },
        collisionSpikes: function(player){
			this.checkLives();
        },
        particlesEnemy: function(enemy){
	    	var emitter = this.game.add.emitter(enemy.x, enemy.y, 200);
            emitter.makeParticles('EnemyExplosionParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 3000, null, 10);
        },
        collisionEnemy: function(player, enemy){
        	if (enemy.body.touching.up) {
        		enemy.kill();
        		soundExplosion.play();
        		this.particlesEnemy(enemy);
        		platformingScore += 100;
		    	scoreText2.text = platformingScore.toString();
        	} else {
				this.checkLives();
        	}
        },
	    collisionPointPickup: function(player, pickup){
	    	// Removes the pickup from the screen
		    pickup.kill();
		    soundPickupPoint.play();
		    //  Add and update the score
		    platformingScore += 10;
		    scoreText2.text = platformingScore.toString();
	    },
	    collisionDiamond: function(player, diamond){
        	// Removes the diamond from the screen
    	    diamond.kill();
    	    soundPickupOther.play();
    	    //  Add and update the score
    	    platformingScore += 500;
    	    scoreText2.text = platformingScore.toString();
        },
	    collisionHealthPickup: function(player, pickup){
	    	console.log('Picking up Health');
	    	console.log('Lives before: ', lives);
	    	// Check collision with pickup
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 50;
		    scoreText2.text = platformingScore.toString();
		    if(lives < 3){
		    	lives++;
		    	console.log('Lives after: ', lives);
		    	lifeDisplay.loadTexture('lives'+(lives), 0);
		    }
	    },
	    collisionBulletPickup: function(player, pickup){
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 20;
	    	scoreText2.text = platformingScore.toString();
	    	bullets.forEach(function(item) {
	    	    item.loadTexture('fireBullet', 0);
	    	}, this);
	    },
	    collisionDoor: function(player, doors){
	    	// Check collision with doors
	    	soundDoor.play();
	    	this.game.state.start('PreLevel3', true, false, platformingScore);
	    },
	    collisionWall: function(){
	    	// Check collision with wall boundry
	    	if(player.x >= 2400 || player.x < 0 || player.y >= 550 || player.y < 0){
	    		this.checkLives();
    	    }
	    },
	    playerShoot: function(direction){
	    	if (this.game.time.now > this.bulletTimer){
	        	var bulletLimit = 250;
	    		var bullet = bullets.getFirstExists(false);
	    		if (bullet) {
	    			bullet.reset(player.x, player.y + 30);
	    			if(direction == 'right') {
	    				bullet.body.velocity.x = 500;
	    			} else {
	    				bullet.body.velocity.x = -500;
	    			}
	    			soundShoot.play();
	    			this.bulletTimer = this.game.time.now + bulletLimit;
    			}
	    	}
	    },
	    checkLives: function(){
	    	console.log(lives);
	    	if(lives > 0 && lives != 1){
	    		// Update lives display
	    		lifeDisplay.loadTexture('lives'+(lives-1), 0);
	    		lives--;
	    		soundExplosion.play();
	    		var emitter = this.game.add.emitter(player.x, player.y, 30);
	            emitter.makeParticles('PlayerExplosionParticle');
	            emitter.minParticleSpeed.setTo(-50, -50);
	            emitter.maxParticleSpeed.setTo(200, 200);
	            emitter.gravity = 0;
	            emitter.start(true, 1000, null, 10);
	    		// Respawn player
	    		player.x = 32;
	    		player.y = this.game.world.height - 150;
	    	} else{
	    		this.gameOver();
	    		// player.destroy();
	    	}
	    },
	    gameOver: function() {        
	        this.game.state.start('GameOver', true, false, platformingScore, 0, 'PreLevel2');
	    }
	};
	// !PLATFORMING GAME LEVEL 2 STATE

	// PRELEVEL 3 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PreLevel3 = function(){};
	SnakeQuest.PreLevel3.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicLevel2.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'level3');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('PlatformingGame_Level3', true, false, this.platformingScore);
			}
		}
	};
	// !PRELEVEL 3 STATE

	// PLATFORMING GAME LEVEL 3 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PlatformingGame_Level3 = function(){};
	SnakeQuest.PlatformingGame_Level3.prototype = {
		init: function(platformingScore) {
			this.platformingScore = platformingScore || 0;
		},
	    create: function() {
	    	this.platforms;
			this.cursors;
			this.pickups;
			this.diamonds;
			this.scoreText;
			this.bulletTimer = 0;

	    	// World dimensions
	        this.game.world.setBounds(0, 0, 2400, 600);

	        // Background Colour
	        this.game.stage.backgroundColor = '#121429';
	        this.game.add.sprite(800, 250, 'couldThisBeTheEnd');

	        // NPCS
	        snakeNPC = this.game.add.sprite(1800, 95, 'snakeNPC');
	        snakeNPC.enableBody = true;
	        this.game.physics.arcade.enable(snakeNPC);
	        snakeNPC.physicsBodyType = Phaser.Physics.ARCADE;
	        snakeNPC.body.immovable = true;

	        // Physics
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);

	        // Game Objects
		        // Platforms
		        platforms = this.game.add.group();
		        platforms.enableBody = true;

		        // Floor
		        ground = platforms.create(0, this.game.world.height - 80, 'ground');
		        ground.scale.setTo(8, 1);
		        ground.body.immovable = true;

				// Spikes
				spikes = this.game.add.group();
	        	spikes.enableBody = true;
	        	for(i = 0; i <= 100; i++){
	        		spike = spikes.create(i * 32, (this.game.world.height - 24), 'spike');
	        	}

				// Doors
				doors = this.game.add.group();
		        doors.enableBody = true;
		        // door = doors.create(2336, this.game.world.height - 429, 'door');

				// Pickups
					// Point Pickups
					pickups = this.game.add.group();
					pickups.enableBody = true;

					// Diamond Pickups
					diamonds = this.game.add.group();
					diamonds.enableBody = true;

				    // Health Pickups
				    healthPickups = this.game.add.group();
					healthPickups.enableBody = true;

				   	// Fire Bullet pickups
				   	fireBullets = this.game.add.group();
					fireBullets.enableBody = true;


				// Bullets
				bullets = this.game.add.group();
				bullets.enableBody = true;
				bullets.physicsBodyType = Phaser.Physics.ARCADE;
				bullets.createMultiple(20, 'bullet');
				bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.killBullet);
				bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
				bullets.setAll('checkWorldBounds', true);

				// Enemies
				enemies = this.game.add.group();
				enemies.enableBody = true;
				enemies.physicsBodyType = Phaser.Physics.ARCADE;

		        // Player
		        	// Sprite
					player = this.game.add.sprite(124, this.game.world.height - 150, 'playerPlatformer');
					// Player Physics
					this.game.physics.arcade.enable(player);
					player.body.bounce.y = 0.1;
					player.body.gravity.y = 600;
					player.body.collideWorldBounds = true;
					// Animations
					player.animations.add('left', [0, 1, 2, 3], 10, true);
					player.animations.add('right', [5, 6, 7, 8], 10, true);
					// Camera
					this.game.camera.follow(player); 

	        // Game Variables
	        platformingScore = this.platformingScore;
	        lives = 3;

	        // Text & HUD
			var style = { font: "14px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "16px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };

			scoreText1 = this.game.add.text(15, 15, "SCORE: ", style);
			scoreText2 = this.game.add.text(73, 13, platformingScore, style2);
			scoreText1.smoothed = false;
			scoreText2.smoothed = false;
			scoreText1.fixedToCamera = true;
			scoreText2.fixedToCamera = true;

			lifeDisplay = this.game.add.sprite(Math.round((this.game.width/2)-41), 15, 'lives3');
			lifeDisplay.fixedToCamera = true;		

			//  Controls
			cursors = this.game.input.keyboard.createCursorKeys();
			spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	        
	        // Audio
	        soundJump = this.game.add.audio('soundJump');
			soundExplosion = this.game.add.audio('soundExplosion');
			soundShoot = this.game.add.audio('soundShoot');
			soundPickupPoint = this.game.add.audio('soundPickupPoint');
			soundPickupOther = this.game.add.audio('soundPickupOther');
			soundDoor = this.game.add.audio('soundDoor');

			musicLevel3 = this.game.add.audio('MusicLevel3');
			musicLevel3.play();
	    },
	    update: function() {
	        //  Collide the player and the pickups with the platforms
	        this.game.physics.arcade.collide(player, platforms);
	        this.game.physics.arcade.collide(player, snakeNPC, this.collisionSnakeNPC, null, this);
	        this.game.physics.arcade.collide(pickups, platforms);
	        this.game.physics.arcade.collide(diamonds, platforms);
	        this.game.physics.arcade.collide(fireBullets, platforms);
	        this.game.physics.arcade.collide(enemies, platforms);
	        this.game.physics.arcade.collide(healthPickups, platforms);
	        
	        //  Checks to see if the player overlaps with any of the pickups, if he does call the collectStar function
	        this.game.physics.arcade.overlap(player, pickups, this.collisionPointPickup, null, this);
	        this.game.physics.arcade.overlap(player, diamonds, this.collisionDiamond, null, this);
	        this.game.physics.arcade.overlap(player, doors, this.collisionDoor, null, this);
	        this.game.physics.arcade.overlap(player, enemies, this.collisionEnemy, null, this);
	        this.game.physics.arcade.overlap(bullets, enemies, this.shootEnemy, null, this);
	        this.game.physics.arcade.overlap(player, fireBullets, this.collisionBulletPickup, null, this);
	        this.game.physics.arcade.overlap(player, healthPickups, this.collisionHealthPickup, null, this);
	        this.game.physics.arcade.overlap(player, spikes, this.collisionSpikes, null, this);
	        this.game.physics.arcade.overlap(player, snakeNPC);

	        //  Reset the players velocity (movement)
	        player.body.velocity.x = 0;

	        if (cursors.left.isDown) {
	            //  Move to the left
	            player.body.velocity.x = -250;
	            player.animations.play('left');
	        } else if (cursors.right.isDown) {
	            //  Move to the right
	            player.body.velocity.x = 250;
	            player.animations.play('right');
	        } else {
	            //  Stand still
	            player.animations.stop();
	            player.frame = 4;
	        }
	        
	        //  Allow the player to jump if they are touching the ground.
	        if (cursors.up.isDown && player.body.touching.down) {
	            player.body.velocity.y = -450;
	            soundJump.play();
	        }

	        // Player shooting
	        if (spaceBar.isDown && cursors.right.isDown) {
	            this.playerShoot('right');
	        } else if (spaceBar.isDown && cursors.left.isDown) {
				this.playerShoot('left');
	        } else if (spaceBar.isDown) {
	        	this.playerShoot('right');
	        }

	        // Collision
	        this.collisionWall();

	    },
	    moveLedge: function(ledge){
    		if(ledge.x >= ledge.xMax){
    			ledge.body.velocity.x = -150;
    		} else if(ledge.x <= ledge.xMin){
    			ledge.body.velocity.x = 150;
    		}
	    },
		moveEnemy: function(enemy){
			if(enemy.x >= enemy.xMax){
				enemy.body.velocity.x = -150;
			} else if(enemy.x <= enemy.xMin){
				enemy.body.velocity.x = 150;
			}
		},
	    killBullet: function(bullet){
	    	bullet.kill();
	    },
	    shootEnemy: function(bullet, enemy){
	    	enemy.kill();
	    	soundExplosion.play();
	    	this.particlesEnemy(enemy);
	    	this.killBullet(bullet);
	    	platformingScore += 100;
		    scoreText2.text = platformingScore.toString();
	    },
	    collisionSnakeNPC: function(){
	    	soundDoor.play();
	    	this.game.state.start('Cutscene3', true, false, platformingScore);
	    },
        collisionSpikes: function(player){
			this.checkLives();
        },
        particlesEnemy: function(enemy){
	    	var emitter = this.game.add.emitter(enemy.x, enemy.y, 200);
            emitter.makeParticles('EnemyExplosionParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 3000, null, 10);
        },
        collisionEnemy: function(player, enemy){
        	if (enemy.body.touching.up) {
        		enemy.kill();
        		soundExplosion.play();
        		this.particlesEnemy(enemy);
        		platformingScore += 100;
		    	scoreText2.text = platformingScore.toString();
        	} else {
				this.checkLives();
        	}
        },
	    collisionPointPickup: function(player, pickup){
	    	// Removes the pickup from the screen
		    pickup.kill();
		    soundPickupPoint.play();
		    //  Add and update the score
		    platformingScore += 10;
		    scoreText2.text = platformingScore.toString();
	    },
	    collisionDiamond: function(player, diamond){
        	// Removes the diamond from the screen
    	    diamond.kill();
    	    soundPickupOther.play();
    	    //  Add and update the score
    	    platformingScore += 500;
    	    scoreText2.text = platformingScore.toString();
        },
	    collisionHealthPickup: function(player, pickup){
	    	console.log('Picking up Health');
	    	console.log('Lives before: ', lives);
	    	// Check collision with pickup
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 50;
		    scoreText2.text = platformingScore.toString();
		    if(lives < 3){
		    	lives++;
		    	console.log('Lives after: ', lives);
		    	lifeDisplay.loadTexture('lives'+(lives), 0);
		    }
	    },
	    collisionBulletPickup: function(player, pickup){
	    	pickup.kill();
	    	soundPickupOther.play();
	    	platformingScore += 20;
	    	scoreText2.text = platformingScore.toString();
	    	bullets.forEach(function(item) {
	    	    item.loadTexture('fireBullet', 0);
	    	}, this);
	    },
	    collisionDoor: function(player, doors){
	    	// Check collision with doors
	    	this.game.state.start('PreLevel4', true, false, platformingScore);
	    },
	    collisionWall: function(){
	    	// Check collision with wall boundry
	    	if(player.x >= 2400 || player.x < 0 || player.y >= 550 || player.y < 0){
	    		this.checkLives();
    	    }
	    },
	    playerShoot: function(direction){
	    	if (this.game.time.now > this.bulletTimer){
	        	var bulletLimit = 250;
	    		var bullet = bullets.getFirstExists(false);
	    		if (bullet) {
	    			bullet.reset(player.x, player.y + 30);
	    			if(direction == 'right') {
	    				bullet.body.velocity.x = 500;
	    			} else {
	    				bullet.body.velocity.x = -500;
	    			}
	    			soundShoot.play();
	    			this.bulletTimer = this.game.time.now + bulletLimit;
    			}
	    	}
	    },
	    checkLives: function(){
	    	console.log(lives);
	    	if(lives > 0 && lives != 1){
	    		// Update lives display
	    		lifeDisplay.loadTexture('lives'+(lives-1), 0);
	    		lives--;
	    		soundExplosion.play();
	    		var emitter = this.game.add.emitter(player.x, player.y, 30);
	            emitter.makeParticles('PlayerExplosionParticle');
	            emitter.minParticleSpeed.setTo(-50, -50);
	            emitter.maxParticleSpeed.setTo(200, 200);
	            emitter.gravity = 0;
	            emitter.start(true, 1000, null, 10);
	    		// Respawn player
	    		player.x = 32;
	    		player.y = this.game.world.height - 150;
	    	} else{
	    		this.gameOver();
	    		// player.destroy();
	    	}
	    },
	    gameOver: function() {        
	        this.game.state.start('GameOver', true, false, platformingScore, 0, 'PreLevel3');
	    }
	};
	// !PLATFORMING GAME LEVEL 3 STATE

	// CUTSCENE 3 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Cutscene3 = function(){};
	SnakeQuest.Cutscene3.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicLevel3.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'cutscene3');
			musicCutscene.play();
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('PreLevel4', true, false, (this.platformingScore).toString(), 0, 'PreLevel4');
			}
		}
	};
	// !CUTSCENE 3 STATE

	// PRELEVEL 4 STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.PreLevel4 = function(){};
	SnakeQuest.PreLevel4.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicCutscene.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'level4');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('SnakeGame', true, false, this.platformingScore);
			}
		}
	};
	// !PRELEVEL 4 STATE

	// SNAKE GAME STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.SnakeGame = function(){};
	SnakeQuest.SnakeGame.prototype = {
		init: function(platformingScore) {
			console.log('platformingScore: ', platformingScore);
			this.platformingScore = platformingScore || 0;
		},
	    create: function() {
	    	// World dimensions
	        this.game.world.setBounds(0, 0, 800, 600);

	        // Background Colour
	        this.game.stage.backgroundColor = '#121429';

	        // Game Variables
	        pickup = {};
	        snake = [];
	        squareDimension = 32;
	        snakeScore = 0;
	        speed = 0;
	        updateDelay = 0; 
	        direction = 'right';
	        new_direction = null;
	        addNew = false;
	        lives = 3;

	        // Create player
	        for(var i = 0; i < 5; i++){
	            snake[i] = this.game.add.sprite(160+i*squareDimension, 160, 'player');
	        }

	        // Player input
	        cursors = this.game.input.keyboard.createCursorKeys();

	        // Game Objects
	        this.generatePickup();

	        // Text & HUD
			var style = { font: "14px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "16px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };

			scoreText1 = this.game.add.text(15, 15, "SCORE: ", style);
			scoreText2 = this.game.add.text(73, 13, snakeScore.toString() + '/15', style2);
			scoreText1.smoothed = false;
			scoreText2.smoothed = false;

			speedText1 = this.game.add.text(Math.round(this.game.width-80), 15, "SPEED:", style);
			speedText2 = this.game.add.text(Math.round(this.game.width-26), 13, speed, style2);
			speedText1.smoothed = false;
			speedText2.smoothed = false;

			lifeDisplay = this.game.add.sprite(Math.round((this.game.width/2)-41), 15, 'lives3');

	        // Audio
	        soundJump = this.game.add.audio('soundJump');
			soundExplosion = this.game.add.audio('soundExplosion');
			soundShoot = this.game.add.audio('soundShoot');
			soundPickupPoint = this.game.add.audio('soundPickupPoint');
			soundPickupOther = this.game.add.audio('soundPickupOther');

			musicSnake = this.game.add.audio('MusicSnake');
			musicSnake.play();
	    },
	    update: function() {

	        // Player controls
	        if (cursors.right.isDown && direction!='left') {
		        new_direction = 'right';
		    } else if (cursors.left.isDown && direction!='right') {
		        new_direction = 'left';
		    } else if (cursors.up.isDown && direction!='down') {
		        new_direction = 'up';
		    } else if (cursors.down.isDown && direction!='up') {
		        new_direction = 'down';
		    }

		    // Player speed
		    speed = Math.min(10, Math.floor(snakeScore/5));
		    speedText2.text = '' + speed;

		    updateDelay++;

		    if(updateDelay % (10-speed) == 0){
	            // Player movement
	            var firstCell = snake[snake.length - 1];
				var lastCell = snake.shift();
				var oldLastCellx = lastCell.x;
				var oldLastCelly = lastCell.y;
	            // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
	            if(new_direction){
	                direction = new_direction;
	                new_direction = null;
	            }
	            // Change the last cell's coordinates relative to the head of the snake, according to the direction.
	            if(direction == 'right'){
	                lastCell.x = firstCell.x + 32;
	                lastCell.y = firstCell.y;
	            } else if(direction == 'left'){
	                lastCell.x = firstCell.x - 32;
	                lastCell.y = firstCell.y;
	            } else if(direction == 'up'){
	                lastCell.x = firstCell.x;
	                lastCell.y = firstCell.y - 32;
	            } else if(direction == 'down'){
	                lastCell.x = firstCell.x;
	                lastCell.y = firstCell.y + 32;
	            }
	            // Place the last cell in the front of the stack.
	            // Mark it the first cell.
	            snake.push(lastCell);
	            firstCell = lastCell;

			    if(addNew){
	                snake.unshift(this.game.add.sprite(oldLastCellx, oldLastCelly, 'player'));
	                addNew = false;
	            }

		        //Collision Detection
	            this.collisionPickup();
	            this.collisionSelf(firstCell);
	            this.collisionWall(firstCell);
	            this.collisionWall(firstCell);
	        }
	    },
	    generatePickup: function(){
	    	// Adds collectable point to game world
	        // X is between 0 and 768 (24*32)
	        // Y is between 0 and 568 (17.7*32)
	        var randomX = Math.floor(Math.random() * 24 ) * squareDimension;
			var randomY = Math.floor(Math.random() * 16 ) * squareDimension;
	        pickup = this.game.add.sprite(randomX, randomY, 'pickupPoint');
	    },
	    collisionPickup: function(){
	    	// Check collision with pickup
    	    for(var i = 0; i < snake.length; i++){
    	        if(snake[i].x == pickup.x && snake[i].y == pickup.y){
    	            addNew = true;
    	            pickup.destroy();
    	            soundPickupPoint.play();
    	            this.generatePickup();
    	            snakeScore++;
    	            if(snakeScore >= 15){
    	            	this.game.state.start('screenWin', true, false, platformingScore.toString(), snakeScore.toString(), 'MainMenu');
    	            }
    	            scoreText2.text = snakeScore.toString() + '/15';
    	        }
    	    }
	    },
	    collisionSelf: function(head){
	    	// Check collision with self
    	    for(var i = 0; i < snake.length - 1; i++){
    	        if(head.x == snake[i].x && head.y == snake[i].y){
    	        	this.checkLives();
    	        }
    	    }
	    },
	    collisionWall: function(head){
	    	// Check collision with wall boundry
	    	if(head.x >= 800 || head.x < 0 || head.y >= 600 || head.y < 0){
	    		this.checkLives();
    	    }
	    },
	    checkLives: function(){
	    	if(lives > 0 && lives != 1){
	    		// Update lives display
	    		lifeDisplay.loadTexture('lives'+(lives-1), 0);
	    		lives--;
	    		soundExplosion.play();
	    		// Remove dead player
	    		for(var i = 0; i < snake.length; i++){
	    			snake[i].destroy();
	        	}
	        	// Empty snake array.
	        	snake = [];
				// Respawn player with a length of 5.
	        	for(var i = 0; i < 5; i++){
	            	snake[i] = this.game.add.sprite(160+i*squareDimension, 160, 'player');
	        	}
	        	new_direction = 'right';
	        	speed = 0;
	    	} else {
	    		this.gameOver();
	    	}
	    },
	    gameOver: function() {        
	        this.game.state.start('GameOver', true, false, (this.platformingScore).toString(), snakeScore.toString(), 'PreLevel4');
	    }
	};
	// !SNAKE GAME STATE

	// WINSCREEN STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.screenWin = function(){};
	SnakeQuest.screenWin.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicSnake.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'screenWin');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('Credits', true, false, (this.platformingScore).toString(), snakeScore.toString(), 'MainMenu');
				jQuery('#Video').modal('show');
				jQuery('#video-toggle').fadeIn();
			}
		}
	};
	// !WINSCREEN STATE

	// CREDITS STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.Credits = function(){};
	SnakeQuest.Credits.prototype = {
		init: function(platformingScore, snakeScore) {
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			musicSnake.stop();
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'screenCredits');
		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start('MainMenu');
			}
		}
	};
	// !CREDITS STATE

	// GAMEOVER STATE
	var SnakeQuest = SnakeQuest || {};
	SnakeQuest.GameOver = function(){};
	SnakeQuest.GameOver.prototype = {
		init: function(platformingScore, snakeScore, level) {
			this.level = level || 'PlatformingGame';
			this.platformingScore = platformingScore || 0;
			this.snakeScore = snakeScore || 0;
			console.log('platformingScore: ', platformingScore);
			console.log('snakeScore: ', snakeScore);
			if (typeof(musicLevel1) == 'undefined') { } else { musicLevel1.stop(); }
			if (typeof(musicLevel2) == 'undefined') { } else { musicLevel2.stop(); }
			if (typeof(musicLevel3) == 'undefined') { } else { musicLevel3.stop(); }
			if (typeof(musicSnake) == 'undefined') { } else { musicSnake.stop(); }
			if (typeof(musicWin) == 'undefined') { } else { musicWin.stop(); }
			if (typeof(musicCutscene) == 'undefined') { } else { musicCutscene.stop(); }
		},
		create: function() {
			this.game.stage.backgroundColor = '#121429';
			this.game.add.sprite(0, 0, 'gameOver');

			var style = { font: "20px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#00D1FA", align: "center" };
			var style2 = { font: "22px Helvetica Neue , Helvetica, Arial, sans-serif", fill: "#fff", align: "center" };

			// Platforming Score
			var platformingScore1 = this.game.add.text(Math.round(this.game.width/2), Math.round(this.game.height-120), "PLATFORMING HIGHSCORE", style);
			platformingScore1.anchor.set(0.5);
			platformingScore1.smoothed = false;
			var platformingScore2 = this.game.add.text(Math.round(this.game.width/2), Math.round(this.game.height-90), this.platformingScore.toString(), style2);
			platformingScore2.anchor.set(0.5);
			platformingScore2.smoothed = false;

			// Snake Score
			var snakeScoreText1 = this.game.add.text(Math.round(this.game.width/2), Math.round(this.game.height-50), "SNAKE HIGHSCORE", style);
			snakeScoreText1.anchor.set(0.5);
			snakeScoreText1.smoothed = false;
			var snakeScoreText2 = this.game.add.text(Math.round(this.game.width/2), Math.round(this.game.height-20), this.snakeScore.toString(), style2);
			snakeScoreText2.anchor.set(0.5);
			snakeScoreText2.smoothed = false;

		},
		update: function() {
			if(this.game.input.activePointer.justPressed()) {
		  		this.game.state.start(this.level);
			}
		}
	};
	// !GAMEOVER STATE

	SnakeQuest.game.state.add('Boot', SnakeQuest.Boot);
	SnakeQuest.game.state.add('Preload', SnakeQuest.Preload);
	SnakeQuest.game.state.add('MainMenu', SnakeQuest.MainMenu);
	SnakeQuest.game.state.add('PreLevel1', SnakeQuest.PreLevel1);
	SnakeQuest.game.state.add('PlatformingGame_Level1', SnakeQuest.PlatformingGame_Level1);
	SnakeQuest.game.state.add('PreLevel2', SnakeQuest.PreLevel2);
	SnakeQuest.game.state.add('PlatformingGame_Level2', SnakeQuest.PlatformingGame_Level2);
	SnakeQuest.game.state.add('PreLevel3', SnakeQuest.PreLevel3);
	SnakeQuest.game.state.add('PlatformingGame_Level3', SnakeQuest.PlatformingGame_Level3);
	SnakeQuest.game.state.add('PreLevel4', SnakeQuest.PreLevel4);
	SnakeQuest.game.state.add('SnakeGame', SnakeQuest.SnakeGame);
	SnakeQuest.game.state.add('Cutscene1', SnakeQuest.Cutscene1);
	SnakeQuest.game.state.add('Cutscene2', SnakeQuest.Cutscene2);
	SnakeQuest.game.state.add('Cutscene3', SnakeQuest.Cutscene3);
	SnakeQuest.game.state.add('screenWin', SnakeQuest.screenWin);
	SnakeQuest.game.state.add('Credits', SnakeQuest.Credits);
	SnakeQuest.game.state.add('GameOver', SnakeQuest.GameOver);
	SnakeQuest.game.state.start('Boot');

});