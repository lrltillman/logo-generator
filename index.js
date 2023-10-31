const fs = require("fs");
const inquirer = require("inquirer")

const questions = [
    {
        type: 'input',
        message: 'Please enter 1-3 characters that you want displayed on your logo:',
        name: "text"
    },
    {
        type: 'input',
        message: 'What color would you like your text to be? Please enter ROYGBIV or color code:',
        name: "txtColor"
    },
    {
        type: 'checkbox',
        message: 'What shape would you like your logo to be?',
        choices: ["triangle", "square", "rectangle"],
        name: "shape"
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be? Please enter ROYGBIV or color code:',
        name: "color"
    }
]

init();

function init() {
    inquirer.prompt(questions).then(data => {
        writeLogoFile("logo", data);
    })
}

function writeLogoFile(filename, data) {
    fs.writeFile(`${fileName}.svg`, renderShape(data), (error) => {
        if (error) console.log("Oops, something went wrong!");
    })
}

function renderShape(data) {
    logoShape;
    if (data.shape === "triangle") {
        logoShape = new Triangle(data.color, data.txt, data.txtColor);
        return logoShape;
    } else if (data.shape === "square") {
        logoShape = new Square(data.color, data.txt, data.txtColor);
        return logoShape;
    } else if (data.shape === "circle") {
        logoShape = new Circle(data.color, data.txt, data.txtColor);
        return logoShape;
    } else console.log("There has been a HUUUUGE error dude!")
}

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

  <rect x="75" y="30" width="150" height="150" fill="${data.color}"  />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtColor}">${data.text}</text>

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

  <circle cx="150" cy="100" r="80" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtColor}">${data.text}</text>

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

    <polygon points="150 5, 300 150, 5 150" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.txtColor}">${data.text}</text>

</svg>
        
        `
    }
}