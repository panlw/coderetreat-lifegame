function gen(h, w, src) {
  var x = 0;
  var world = [];
  for (var i = 0; i < h; i++) {
    world[i] = [];
    for (var j = 0; j < w; j++) {
      world[i][j] = src ? src[x++] % 2 : -1;
    }
  }
  return world;
}

function out(world, h, w) {
  var s = '';
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      s += (world[i][j] ? '·' : ' ') + ' ';
    }
    s += '\n';
  }
  console.log(s);
}

function runLife(life, roundCount) {
  if (roundCount < 2 || roundCount > 3) {
    return 0;
  }
  if (roundCount == 3) {
    return life ? 0 : 1;
  }
  return life;
}

function roundOf(h, w, i, j) {
  var y1 = Math.max(i - 1, 0),
    y2 = Math.min(i + 1, h);
  var x1 = Math.max(j - 1, 0),
    x2 = Math.min(j + 1, w);
  return { i, j, y1, y2, x1, x2 };
}

function countRound(world, round) {
  var n = 0;
  for (var y = round.y1; y <= round.y2; y++) {
    for (var x = round.x1; x <= round.x2; x++) {
      if (!(y === round.i && x === round.j)) {
        n += world[y][x];
      }
    }
  }
  return n;
}

function run(world, h, w) {
  var newWorld = gen(h, w);
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      var life = world[i][j];
      var rcnt = countRound(world, h, w, i, j);
      newWorld[i][j] = runLife(life, rcnt);
    }
  }
  return newWorld;
}

module.exports = { gen, out, runLife, roundOf, countRound, run };
