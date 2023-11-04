const { Shape, Triangle, Square, Circle } = require("../lib/Shape");

describe('shapes', () => {
  describe('triangle', () => {
    it('should display polygon text in svg', () => {
      const triangle = new Triangle("pink", "LOL", "black");
      expect(triangle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 5, 300 150, 5 150" fill="pink" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text>

</svg>
        
        `);
    });
  });
  describe('square', () => {
    it("should display a rect text in svg", () => {
      const square = new Square("pink", "LOL", "black");
      expect(square.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="75" y="30" width="150" height="150" fill="pink"  />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text>

</svg>
`)
    })
  })

  describe('circle', () => {
    it("should display a circle text in svg", () => {
      const circle = new Circle("pink", "LOL", "black");
      expect(circle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="pink" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text>

</svg>   
`)
    })
  })
});
