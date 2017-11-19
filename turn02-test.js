const assert = require('assert');
const { gen, out, runLife, roundOf, countRound, run } = require("./turn02");

describe("turn02", function() {
  /* runLife */

  describe("#runLife(0, 1)", function() {
    it("should be no change when dead with lifes round is 1", function() {
      assert.equal(runLife(0, 1), 0);
    });
  });

  describe("#runLife(1, 1)", function() {
    it("should dead when life with lifes round is 1", function() {
      assert.equal(runLife(1, 1), 0);
    });
  });

  describe("#runLife(1, 2)", function() {
    it("should be no change when life with lifes round is 2", function() {
      assert.equal(runLife(1, 2), 1);
    });
  });

  describe("#runLife(0, 2)", function() {
    it("should be no change when dead with lifes round is 2", function() {
      assert.equal(runLife(0, 2), 0);
    });
  });

  describe("#runLife(1, 3)", function() {
    it("should dead when life with lifes round is 3", function() {
      assert.equal(runLife(1, 3), 0);
    });
  });

  describe("#runLife(0, 3)", function() {
    it("should life when dead with lifes round is 3", function() {
      assert.equal(runLife(0, 3), 1);
    });
  });

  describe("#runLife(0, 4)", function() {
    it("should be no change when dead with lifes round is 4", function() {
      assert.equal(runLife(0, 4), 0);
    });
  });

  describe("#runLife(1, 4)", function() {
    it("should dead when life with lifes round is 4", function() {
      assert.equal(runLife(1, 4), 0);
    });
  });

  /* roundOf */

  describe("#roundOf", function() {
    const expected = {
      i: 1, j: 1, y1: 0, y2: 2, x1: 0, x2: 2
    };
    it("should roundOf(3, 3, 1, 1) return "
      + JSON.stringify(expected), function() {
      assert.deepEqual(roundOf(3, 3, 1, 1), expected);
    });
  });

  // /* countRound */

  describe("#countRound", function() {
    const world = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 1, 1]
    ];
    const round = {
      i: 1, j: 1, y1: 0, y2: 2, x1: 0, x2: 2
    };
    it("should return 5", function() {
      assert.equal(countRound(world, round), 5);
    });
  });

  describe("#countRound", function() {
    const world = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 1, 1]
    ];
    const round = {
      i: 1, j: 1, y1: 0, y2: 2, x1: 0, x2: 2
    };
    it("should return 5", function() {
      assert.equal(countRound(world, round), 5);
    });
  });

  // /* run */

  // describe("#run", function() {
  //   const world = [
  //     [1, 0, 1],
  //     [0, 0, 0],
  //     [1, 1, 1]
  //   ];
  //   const expected = [
  //     [0, 0, 0],
  //     [1, 0, 1],
  //     [0, 1, 0]
  //   ];
  //   it("should return 5", function() {
  //     assert.deepEqual(run(world, 3, 3), expected);
  //   });
  // });

});
