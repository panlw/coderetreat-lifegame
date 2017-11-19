const crypto = require('crypto');
const sleep = require('sleep');
const { main } = require('./turn04');

function gen(h, w, src) {
  for (var i = 0, x = 0, world = []; i < h; i++) {
    world[i] = [];
    for (var j = 0; j < w; j++) world[i][j] = src ? src[x++] % 2 : -1;
  }
  return world;
}

function out(world, h, w) {
  for (var i = 0, s = ''; i < h; i++) {
    for (var j = 0; j < w; j++) s += (world[i][j] === 1 ? 'O' : ' ') + ' ';
    s += '\n';
  }
  console.log(s);
}

const H = 10, W = 10;
const src = crypto.randomBytes(W * H);

var world = gen(H, W, src);
var worldObject = main(world, W, H);
while (1) {
  console.log('\033[2J');
  out(worldObject.toMatrix(), H, W);
  worldObject.next();
  console.log('------------------');
  out(worldObject.toMatrix(), H, W);
  worldObject.reset();
  sleep.msleep(500);
}
