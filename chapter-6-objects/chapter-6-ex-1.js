class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return `Vec {x: ${this.x}, y: ${this.y}}`;
  }

  minus(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return `Vec {x: ${this.x}, y: ${this.y}}`;
  }

  get length() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);