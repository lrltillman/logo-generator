class Shape {
    constructor(color, text, txtColor) {
        this.color = color;
        this.text = text;
        this.txtColor = txtColor;
    }
}

class Square extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor)
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="75" y="30" width="150" height="150" fill="${this.color}"  />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>

</svg>
`
    }
}

class Circle extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor)
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>

</svg>   
`
    }
}

class Triangle extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor)
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 5, 300 150, 5 150" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>

</svg>
        
        `
    }
}

module.exports = { Shape, Triangle, Square, Circle };