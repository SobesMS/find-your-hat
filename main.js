const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(width, height) {
        this._fieldArray = Field.generateField(height, width);
    }

    // prints the field for the current game
    print() {
        for (let i in this._fieldArray) {
            console.log(this._fieldArray[i].join(''));
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

    // generates a new field
    static generateField(height, width) {
        let newField;

        for (let i = 1; i <= height; i++) {
            let newRow;
            for (let j = 1; j <= width; j++) {
                // auto-generate new field
            }
        }
        return newField;
    }

    // moves player based on user input
    static movePlayer() {

    }
}

function playGame() {
    let height;
    let width;
    height = prompt('Enter field height (minimum 5 and maximum 20: ');
    // checks for minimum and maximum height
    while (typeof height !== 'number' || height < 5 || height > 20) {
        console.log('Invalid field height.');
        height = prompt('Enter field height (minimum 5 and maximum 20: ');
    }
    width = prompt('Enter field width (minimum 5 and maximum 20: ');
    // checks for minimum and maximum width
    while (typeof width !== 'number' || width < 5 || width > 20) {
        console.log('Invalid field width.');
        width = prompt('Enter field width (minimum 5 and maximum 20: ');
    }
    let winLossConditionMet = false;

    const newGame = new Field(height, width);
    const myField = new Field([
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
    ]);
    
    myField.print();
    console.log(myField._fieldArray);
    console.log('');
}

playGame();
