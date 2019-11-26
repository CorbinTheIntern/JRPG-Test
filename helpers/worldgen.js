var randomFillPercent = 0.25;

function instantiateWorldMap(xSize, ySize) {
    let map = new Array(ySize);
    for (let i = 0; i < xSize; i++) {
        map[i] = [];
    }

    for (let x = 0; x < xSize; x++) {
        for (let y = 0; y < ySize; y++) {
            let rand = Math.random();
            if (rand > randomFillPercent && (x != 0 && y != 0 && x != xSize - 1 && y != ySize - 1)) map[x][y] = 1;
            else map[x][y] = 0;
        }
    }
    
    map[MIDDLE_TILE_X][MIDDLE_TILE_Y] = 1;
    
    console.log(map);

    /*for (let k = 0; k < smoothingLoops; k++) {
        map = smoothMap(map);
    }*/

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