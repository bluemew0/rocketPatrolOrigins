class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio("sfx_select", "./assets/select.wav");
        this.load.audio("sfx_explosion", "./assets/explosion.wav");
        this.load.audio("sfx_rocket", "./assets/rocketShoot.wav");
    }

    create() {
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#F3B141",
            color: "#843605",
            align: "center",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0,
            wordWrap: {
                width: game.config.width - borderUISize*2
            }
        }

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, "ROCKET PATROL", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "Use L and R arrow keys to move & (F) to fire", menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = "#00FF00";
        menuConfig.color = "#000";
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding, "Press L arrow key for Novice or R arrow key for Expert", menuConfig).setOrigin(0.5);

        // define menu keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
    }
};