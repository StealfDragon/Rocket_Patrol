/*
Cassian Jones
CMPM 120
Rocket Patrol Tutorial
1/20/25
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height:480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

let keyFIRE, keyRESET, keyLEFT, keyRIGHT

let borderUISize = game.config.height /15
let borderPadding = borderUISize / 3
