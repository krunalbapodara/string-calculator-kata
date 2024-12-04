const readline = require('readline');
const { add } = require('./sum');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInputs() {
    rl.question('Do you want to provide a custom delimiter(default is ",")? (yes/no): ', (answer) => {
        let delimiter = ",";

        if (answer.toLowerCase() === "yes") {
            rl.question('Enter your custom delimiter (e.g., ",", ";", etc.): ', (customDelimiter) => {
                if (customDelimiter.length !== 1) {
                    console.log("Error: Only one character is allowed as delimiter.");
                    rl.close();
                    return;
                }
                delimiter = customDelimiter;
                askForNumbers(delimiter);
            });
        } else {
            askForNumbers(delimiter);
        }
    });
}

function askForNumbers(delimiter) {
    rl.question(`Enter the numbers separated by "${delimiter}" (\\n does not supports here): `, (numbers) => {
        try {
            let result = '';
            if (delimiter) {
                result = add(`//${delimiter}\n${numbers}`);
            } else {
                result = add(numbers);
            }
            console.log(`The sum is: ${result}`);
        } catch (error) {
            console.log(error.message);
        }
        rl.close();
    });
}

getInputs();

