class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    create() {
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        /* rectangle(x, y, width, height, color)
        1. rectangle at (0,0) and is as long as game width and height is defned border size
        2. rectangle at (0, top corner of border thickness at bottom) with same dimensions as above
        3. rectangle at (0,0) and width is border size
        4. rectangle at border width from right edge and ends at the bottom of the screen
        */
    }
};