let triangle = {
  a: 0,
  b: 0,
  c: 0,
  assign: function () {
    this.a = +prompt("Input a:");
    this.b = +prompt("Input b:");
    this.c = +prompt("Input c:");
  },
  getSquareAndPerimetr: function (a, b, c) {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert(`Perimetr: ${p * 2} cm\nSquare: ${s} cm²`);
  },
};
function getSquare() {
  triangle.getSquareAndPerimetr(triangle.a, triangle.b, triangle.c);
}
