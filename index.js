const fs = require("fs");
const inquirer = require("inquirer")
const { Shape, Triangle, Square, Circle } = require("./lib/Shape.js")


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
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ["triangle", "square", "circle"],
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

function writeLogoFile(fileName, data) {

    fs.writeFile(`${fileName}.svg`, renderShape(data), (error) => {
        if (error) console.log("Oops, something went wrong!");
    })
}

function renderShape(data) {
    let logoShape = "";
    let shapeChoice = data.shape;
    if (shapeChoice === "triangle") {
        logoShape = new Triangle(data.color, data.text, data.txtColor);
        return logoShape.render();
    } else if (shapeChoice === "square") {
        logoShape = new Square(data.color, data.text, data.txtColor);
        return logoShape.render();
    } else if (shapeChoice === "circle") {
        logoShape = new Circle(data.color, data.text, data.txtColor);
        return logoShape.render();
    } else console.log("AHHHHH ERROR", shapeChoice);
}