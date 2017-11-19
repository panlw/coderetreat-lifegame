const assert = require('assert');
const { runLife, roundBorder, roundCount, run } = require('./turn04');

describe("turn04", function() {

  describe("#runLife()", function() {
    it("all ok", function() {
      assert.equal(runLife(0, 1), 0);
      assert.equal(runLife(0, 2), 0);
      assert.equal(runLife(0, 3), 1);
      assert.equal(runLife(0, 4), 0);
      assert.equal(runLife(1, 1), 0);
      assert.equal(runLife(1, 2), 1);
      assert.equal(runLife(1, 3), 1);
      assert.equal(runLife(1, 4), 0);
    });
  });

  describe("#roundBorder()", function() {
    it("all ok", function() {
      assert.deepEqual(roundBorder(0,0,3,3), {x:0,y:0,x0:0,x1:1,y0:0,y1:1});
      assert.deepEqual(roundBorder(2,2,3,3), {x:2,y:2,x0:1,x1:2,y0:1,y1:2});
      assert.deepEqual(roundBorder(2,0,3,3), {x:2,y:0,x0:1,x1:2,y0:0,y1:1});
      assert.deepEqual(roundBorder(0,2,3,3), {x:0,y:2,x0:0,x1:1,y0:1,y1:2});
      assert.deepEqual(roundBorder(1,1,3,3), {x:1,y:1,x0:0,x1:2,y0:0,y1:2});
    });
  });

  describe("#roundCount()", function() {
    it("all ok", function() {
      const world = [
        [0,1,0],
        [1,0,0],
        [1,0,0]
      ];
      assert.deepEqual(roundCount(world,{x:0,y:0,x0:0,x1:1,y0:0,y1:1}), 2);
      assert.deepEqual(roundCount(world,{x:2,y:2,x0:1,x1:2,y0:1,y1:2}), 0);
      assert.deepEqual(roundCount(world,{x:2,y:0,x0:1,x1:2,y0:0,y1:1}), 1);
      assert.deepEqual(roundCount(world,{x:0,y:2,x0:0,x1:1,y0:1,y1:2}), 1);
      assert.deepEqual(roundCount(world,{x:1,y:1,x0:0,x1:2,y0:0,y1:2}), 3);
    });
  });

  describe("#run()", function() {
    it("all ok", function() {
      var newWorld = [
        [-1,-1,-1],
        [-1,-1,-1],
        [-1,-1,-1],
      ];
      const world = [
        [0,1,0],
        [1,0,0],
        [1,0,0]
      ];
      run(newWorld, world, 3, 3, 0, 0); assert.deepEqual(newWorld[0][0], 0);
      run(newWorld, world, 3, 3, 0, 2); assert.deepEqual(newWorld[2][0], 0);
      run(newWorld, world, 3, 3, 2, 0); assert.deepEqual(newWorld[0][2], 0);
      run(newWorld, world, 3, 3, 2, 2); assert.deepEqual(newWorld[2][2], 0);
      run(newWorld, world, 3, 3, 1, 1); assert.deepEqual(newWorld[1][1], 1);
    });
  });

});
