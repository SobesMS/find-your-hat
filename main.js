const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(width, height) {
        this._maskedField = Field.generateMaskedField(height, width);
        this._unmaskedField = this.generateItemLocations(this._maskedField, height, width);
        this.generateStartingLocation(height, width);
    }

    get maskedField() {
        return this._maskedField;
    }

    get unmaskedField() {
        return this._unmaskedField;
    }

    // prints the field for the current game
    print(field) {
        for (let i in field) {
            console.log(field[i].join(' '));
            console.log('');
        }
    }

    // checks if any win or loss conditions have been met
    winLossCondition(symbol) {
        if (symbol === hat) {
            // win condition
        } else if (symbol === hole) {
            // loss condition
        }
    }

    // generates a new empty field and places player on a random edge square
    static generateMaskedField(height, width) {
        let maskedField = [];
        for (let i = 0; i <= height - 1; i++) {
            let newRow = [];
            for (let j = 0; j <= width - 1; j++) {
                newRow.push(fieldCharacter);
            }
            maskedField.push(newRow);
        }
        return maskedField;
    }

    // places hat, holes, and starting location
    generateItemLocations(maskedField, height, width) {
        
    }

    generateStartingLocation(height, width) {
        const XorY = Math.floor(Math.random() * 2);
        console.log(XorY);
        let startX;
        let startY;
        if (XorY === 0) {
            startX = Math.floor(Math.random() * width);
            if (Math.floor(Math.random() * 2) === 0) {
                startY = 0;
            } else {
                startY = height - 1;
            }
        } else {
            startY = Math.floor(Math.random() * height);
            if (Math.floor(Math.random() * 2) === 0) {
                startX = 0;
            } else {
                startX = width - 1;
            }
        }
        
        this._maskedField[startY][startX] = pathCharacter;
        console.log(this.print(this._maskedField));
    }

    // moves player based on user input
    static movePlayer() {

    }
}

function playGame() {
    let height;
    let width;

    // prompts user for height value
    height = Number(prompt('Enter field height (minimum 3 and maximum 12): '));
    // checks for valid input, minimum height, and maximum height
    while (Number.isNaN(height) || height < 3 || height > 12) {
        console.log('Invalid height.');
        height = Number(prompt('Enter field height (minimum 3 and maximum 12): '));
    }

    // prompts user for width value
    width = Number(prompt('Enter field width (minimum 3 and maximum 12): '));
    // checks for valid input, minimum width, and maximum width
    while (Number.isNaN(width) || width < 3 || width > 12) {
        console.log('Invalid width.');
        width = Number(prompt('Enter field width (minimum 3 and maximum 12): '));
    }

    let winLossConditionMet = false;

    const newGame = new Field(height, width);
}

playGame();
