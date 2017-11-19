const crypto = require('crypto');
const W = 8, H = 8;

function gen() {
    const buf = crypto.randomBytes(W * H);

    var world = [], x = 0;
    for (var i = 0; i < H; i++) {
        world[i] = [];
        for (var j = 0; j < W; j++) {
            world[i][j] = buf[x++] % 2;
        }
    }
    return world;
}

function out(world) {
    var buf = '';
    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            buf += (world[i][j] ? '*' : ' ') + ' ';
        }
        buf += '\n';
    }
    console.log(buf);
}

function run(world) {
    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            world[i][j] = runLife(world, i, j);
        }
    }
}

function runLife(world, i, j) {
    var living = world[i][j];
    var lifes = lifeCountRound(world, i, j);
    if (lifes < 2 && lifes > 3) {
        living = 0;
    } else if (lifes == 3) {
        living = living ? 0 : 1;
    }
    return living;
}

function lifeCountRound(world, i, j) {
    var n = 0;
    for (var y = Math.max(0, i - 1); y < Math.min(i + 1, H); y++) {
        for (var x = Math.max(0, j - 1); x < Math.min(j + 1, W); x++) {
            if (!(x == i && y == j)) {
                n += world[y][x];
            }
        }
    }
    return n;
}

var world = gen();
out(world);
run(world);
out(world);
