// clac.js
const { exec } = require('child_process');

// Path to the Calculator app
const calculatorPath = '/System/Applications/Calculator.app/Contents/MacOS/Calculator';

// Open the Calculator app
exec(`open -a "${calculatorPath}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Calculator opened successfully!`);
});