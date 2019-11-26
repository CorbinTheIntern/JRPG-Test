var can, ctx;

var CAN_W = 960;
var CAN_H = 640;
var MIDDLE_TILE_X = CAN_W/32;
var MIDDLE_TILE_Y = CAN_H/32;
var FPS = 60;
var smoothingLoops = 5;

var player;

var GameStates = {
    'MainMenu': 0,
    'WorldMap': 1,
    'Dungeon': 2
}

var currentGameState, worldMap;

function init() {
    can = document.getElementById('can');
    ctx = can.getContext('2d');

    can.width = CAN_W;
    can.height = CAN_H;

    player = new Player(MIDDLE_TILE_X, MIDDLE_TILE_Y);
    currentGameState = GameStates.MainMenu;
    worldMap = instantiateWorldMap(60, 40);
    
    setInterval(_LOOP, 1000 / FPS);
}

function _LOOP() {
    draw();
}

function draw() {
    ctx.clearRect(0, 0, CAN_W, CAN_H);
    let m;
    switch (currentGameState) {
        case GameStates.MainMenu:
            m = "Main Menu";
            break;
        case GameStates.WorldMap:
            drawGroundTiles();
            /*drawTerrainFeatures();
            drawEnvironmentObjects();*/
            drawPlayer();
            break;
        case GameStates.Dungeon:
        m = "Dungeon";
        break;
        default:
            m = "Error.";
            break;
    }
    console.log(m);
}

function drawGroundTiles() {
    for (let i = 0; i < worldMap.length; i++) {
        for (let j = 0; j < worldMap[0].length; j++) {
            if (worldMap[i][j] == 0) ctx.fillStyle = 'blue';
            else ctx.fillStyle = 'green';
            ctx.fillRect(i*16, j*16, 16, 16);
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x*16+2, player.y*16+2, 12, 12);
}

/*function drawObject(Sprite, position) {
    ctx.drawImage(Sprite.img, position.x, position.y);
}*/