class Polygon {
  constructor(width, height) {
    // var width = width;
    // var height = height;
    this.width = width;
    this.height = height;
  }
}

class Rect extends Polygon {
  constructor(width, height) {
    super(width, height);
    this._color = "";
  }

  get area() {
    return this.width * this.height;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
}

class Square extends Rect {
  constructor(side) {
    super(side, side);
    this._color = "";
  }
  get area() {
    return this.width * this.height;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
}
let r1 = new Rect(2, 3);
console.log("area", r1.area);
r1.color = "red";
console.log("color", r1.color);
let s1 = new Square(10);
console.log(s1.side);
console.log(s1.area);
