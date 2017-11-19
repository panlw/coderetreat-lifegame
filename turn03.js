function runLife(life, rcnt) {
  if (rcnt < 2 || rcnt > 3) return 0;
  if (rcnt === 3) return 1;
  return life;
}

function roundBorder(x, y, w, h) {
  return {
    x, y,
    x0: Math.max(0, x-1), x1: Math.min(w-1, x+1),
    y0: Math.max(0, y-1), y1: Math.min(h-1, y+1)
  };
}

function roundCount(world, border) {
  var cnt = 0;
  for (var y = border.y0; y <= border.y1; y++) {
    for (var x = border.x0; x <= border.x1; x++) cnt += world[y][x]
  }
  return cnt - world[border.y][border.x];
}

function run(newWorld, world, w, h, x, y) {
  const border = roundBorder(x, y, w, h);
  const rcnt = roundCount(world, border);
  newWorld[y][x] = runLife(world[y][x], rcnt);
}

function main(newWorld, world, w, h) {
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) run(newWorld, world, w, h, x, y)
  }
}

module.exports = { runLife, roundBorder, roundCount, run, main };
