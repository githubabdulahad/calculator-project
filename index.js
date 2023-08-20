#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let animation = chalkAnimation.rainbow(`Let's start the calculation `);
    await sleep();
    animation.stop();
    const calculatorArt = `
    \x1b[36m
     _____________________
    |  _________________  |
    | | \x1b[33mJO           0.\x1b[36m | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | \x1b[33m7 | 8 | 9 |\x1b[36m | | \x1b[32m+ \x1b[36m|
    | |___|___|___| |___| |
    | | \x1b[33m4 | 5 | 6 |\x1b[36m | | \x1b[31m- \x1b[36m|
    | |___|___|___| |___| |
    | | \x1b[33m1 | 2 | 3 |\x1b[36m | | \x1b[33mx \x1b[36m|
    | |___|___|___| |___| |
    | | \x1b[33m. | 0 | = |\x1b[36m | | \x1b[35m/ \x1b[36m|
    | |___|___|___| |___| |
    |_____________________|`;
    console.log(calculatorArt);
}
await welcome();
async function calculating() {
    const operations = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Which operation do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Divison", "Power"]
        },
        {
            name: "num1",
            type: "number",
            message: "Enter your first number:"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second number:"
        }
    ]);
    if (operations.operator == "Addition") {
        console.log(chalk.blue(operations.num1 + operations.num2));
    }
    else if (operations.operator == "Subtraction") {
        console.log(chalk.greenBright(operations.num1 - operations.num2));
    }
    else if (operations.operator == "Multiplication") {
        console.log(chalk.bgGray(operations.num1 * operations.num2));
    }
    else if (operations.operator == "Divison") {
        console.log(chalk.bgWhiteBright(operations.num1 / operations.num2));
    }
    else if (operations.operator == "Power") {
        console.log(chalk.redBright(Math.pow(operations.num1, operations.num2)));
    }
}
async function restarting() {
    while (true) {
        await calculating();
        var restart = await inquirer.prompt([
            {
                name: "Again",
                type: "list",
                message: "Do you again wanna perform any calculations?",
                choices: ["yes", "no"]
            }
        ]);
        if (restart.Again == "no") {
            console.log("Thankyou for using the calculator!");
            break;
        }
    }
}
restarting();
