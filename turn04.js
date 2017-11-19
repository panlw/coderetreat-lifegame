function createLife(life) {
  return {
    life,
    newLife: -1,
    next: function (rcnt) {
      var newLife = this.life;
      if (rcnt < 2 || rcnt > 3) {
        newLife = 0;
      } else if (rcnt === 3) {
        newLife = 1;
      }
      this.newLife = newLife;
    },
    reset: function () {
      this.life = this.newLife;
      this.newLife = -1;
    }
  }
}

function createPosition(x, y) {
  return { x, y };
}

function createBorder(p0, p1) {
  return {
    x0: p0.x, x1: p1.x, y0: p0.y, y1: p1.y,
    borderOf: function (p) {
      const x0 = Math.max(this.x0, p.x - 1);
      const x1 = Math.min(this.x1, p.x + 1);
      const y0 = Math.max(this.y0, p.y - 1);
      const y1 = Math.min(this.y1, p.y + 1);
      return { x0, x1, y0, y1 };
    }
  };
}

function createWorld(matrix, border) {
  return {
    matrix, border,
    roundCount: function (p) {
      const border = this.border.borderOf(p);
      var cnt = 0;
      for (var y = border.y0; y <= border.y1; y++) {
        for (var x = border.x0; x <= border.x1; x++) {
          cnt += this.matrix[y][x].life;
        }
      }
      return cnt - this.matrix[p.y][p.x].life;
    },
    next: function () {
      for (var y = border.y0; y <= border.y1; y++) {
        for (var x = border.x0; x <= border.x1; x++) {
          const rcnt = this.roundCount(createPosition(x, y));
          this.matrix[y][x].next(rcnt);
        }
      }
    },
    reset: function () {
      for (var y = border.y0; y <= border.y1; y++) {
        for (var x = border.x0; x <= border.x1; x++) {
          this.matrix[y][x].reset();
        }
      }
    },
    toMatrix: function () {
      var matrix = [];
      this.matrix.forEach(row => {
        var rrow = [];
        row.forEach(life => {
          rrow.push(life.life);
        })
        matrix.push(rrow);
      })
      return matrix;
    }
  };
}

function createLifeMatrix(world) {
  var lifeWorld = [];
  world.forEach(row => {
    var lifeRow = [];
    row.forEach(life => {
      lifeRow.push(createLife(life));
    })
    lifeWorld.push(lifeRow);
  })
  return lifeWorld;
}

function main(matrix, h, w) {
  const p0 = createPosition(0, 0);
  const p1 = createPosition(w-1, h-1);
  const border = createBorder(p0, p1);
  const world = createWorld(createLifeMatrix(matrix), border);
  return world;
}

module.exports = { main };
