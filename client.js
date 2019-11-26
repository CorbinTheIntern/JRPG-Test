var can, ctx;

var CAN_W = 960;
var CAN_H = 640;
var FPS = 60;
var smoothingLoops = 5;

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

    currentGameState = GameStates.MainMenu;

    worldMap = instantiateWorldMap(60, 40);

    setInterval(_LOOP, 1000 / FPS);
}

function instantiateWorldMap(xSize, ySize) {
    let map = new Array(ySize);
    for (let i = 0; i < xSize; i++) {
        map[i] = [];
    }

    for (let x = 0; x < xSize; x++) {
        for (let y = 0; y < ySize; y++) {
            let rand = Math.random();
            if (rand > 0.5 && x != 0 && y != 0 && x != xSize - 1 && y != ySize - 1) map[x][y] = 1;
            else map[x][y] = 0;
        }
    }
    console.log(map);

    for (let k = 0; k < smoothingLoops; k++) {
        map = smoothMap(map);
    }

    return map;
}

function smoothMap(map) {

    let oldMap = map;
    let newMap = oldMap;

    for (let x = 0; x < oldMap.length; x++) {
        for (let y = 0; y < oldMap[x].length; y++) {
            if (x > 0 && x < oldMap[x].length && y > 0 && y < oldMap.length) {
                let neighborcount = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (!(i == 0 && j == 0) && oldMap[x + i][y + j] != 0) {

                        }
                    }
                }
            }
        }
    }
}

function _LOOP() {
    draw();
}

function draw() {
    let m;
    switch (currentGameState) {
        case GameStates.MainMenu:
            m = "Main Menu";
            break;
        case GameStates.WorldMap:
            drawGroundTiles();
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
            if (worldMap[i][j] == 0) {

            }
        }
    }
}

function drawObject(Sprite, position) {
    ctx.drawImage(Sprite.img, position.x, position.y);
}
