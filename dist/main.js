#! /usr/bin/env node
// Import chalk
import chalk from "chalk";
// Import inquirer
import inquirer from "inquirer";
// import player class
import { Player } from "./playerClass.js";
// import opponent class
import { Opponent } from "./opponentClass.js";
// User response for player name and select opponent
const players = await inquirer.prompt([
    {
        name: "playerName",
        type: "input",
        message: "Please Enter Your Name",
    },
    {
        name: "opponent",
        type: "list",
        message: "Please ",
        choices: ["Vampire", "Zombie", "Dinosaur"],
    },
]);
// Gathering data
export const player1 = new Player(players.playerName);
export const opponent1 = new Opponent(players.opponent);
// Use while loop to run application until condition is false
while (true) {
    // Use switch statements
    switch (players.opponent) {
        // Vampire Case
        case "Vampire":
            console.log("-".repeat(50));
            console.log(chalk.bgWhite.black(`\t\t${chalk.green(players.playerName)} V/S ${chalk.red(players.opponent)}`));
            console.log("-".repeat(50));
            const askUser = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "Please Select One of the Following",
                choices: ["Attack", "Healing", "Exit.."],
            });
            if (askUser.select === "Attack") {
                const randomNum = Math.floor(Math.random() * 2);
                if (randomNum > 0) {
                    player1.fuelDecrease();
                    if (player1.fuel <= 0) {
                        console.log(chalk.red("-".repeat(50)));
                        console.log(chalk.bgRed.white("\tYou Loose Better Luck Next Time"));
                        console.log(chalk.red("-".repeat(50)));
                        process.exit();
                    }
                }
                if (randomNum <= 0) {
                    opponent1.fuelDecrease();
                    if (opponent1.fuel <= 0) {
                        console.log(chalk.white("-".repeat(50)));
                        console.log(chalk.bgWhite.green("\tWinner Winner Chicken Dinner"));
                        console.log(chalk.white("-".repeat(50)));
                        process.exit();
                    }
                }
            }
            if (askUser.select === "Healing") {
                const askHeal = await inquirer.prompt({
                    name: "heal",
                    type: "list",
                    message: "Please Select one of the Following Heal",
                    choices: ["Energy Drink", "Medicine", "First Aid Kit"],
                });
                if (askHeal.heal === "Energy Drink") {
                    if (player1.fuel < 100) {
                        player1.energyDrink();
                    }
                    else {
                        console.log(chalk.bgWhite.green("Your fuel is full Please try again later"));
                    }
                }
                if (askHeal.heal === "Medicine") {
                    if (player1.fuel <= 70) {
                        player1.medicine();
                    }
                    else {
                        console.log(chalk.bgRed(`Your Fuel is 70+ you can try another Heal Options like Energy Drink`));
                    }
                }
                if (askHeal.heal === "First Aid Kit") {
                    player1.firstAidKit();
                }
            }
            if (askUser.select === "Exit..") {
                console.log(chalk.red("-".repeat(50)));
                console.log(chalk.bgRed.white("\t Better Luck Next Time"));
                console.log(chalk.red("-".repeat(50)));
                process.exit();
            }
            break;
        // Zombie Case
        case "Zombie":
            console.log("-".repeat(50));
            console.log(chalk.bgWhite.black(`\t\t${chalk.green(players.playerName)} V/S ${chalk.red(players.opponent)}`));
            console.log("-".repeat(50));
            const userSelect = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "Please Select One of the Following",
                choices: ["Attack", "Healing", "Exit.."],
            });
            if (userSelect.select === "Attack") {
                const randomNum = Math.floor(Math.random() * 2);
                if (randomNum > 0) {
                    player1.fuelDecrease();
                    if (player1.fuel <= 0) {
                        console.log(chalk.red("-".repeat(50)));
                        console.log(chalk.bgRed.white("\tYou Loose Better Luck Next Time"));
                        console.log(chalk.red("-".repeat(50)));
                        process.exit();
                    }
                }
                if (randomNum <= 0) {
                    opponent1.fuelDecrease();
                    if (opponent1.fuel <= 0) {
                        console.log(chalk.white("-".repeat(50)));
                        console.log(chalk.bgWhite.green("\tWinner Winner Chicken Dinner"));
                        console.log(chalk.white("-".repeat(50)));
                        process.exit();
                    }
                }
            }
            if (userSelect.select === "Healing") {
                const askHeal = await inquirer.prompt({
                    name: "heal",
                    type: "list",
                    message: "Please Select one of the Following Heal",
                    choices: ["Energy Drink", "Medicine", "First Aid Kit"],
                });
                if (askHeal.heal === "Energy Drink") {
                    if (player1.fuel < 100) {
                        player1.energyDrink();
                    }
                    else {
                        console.log(chalk.bgWhite.green("Your fuel is full Please try again later"));
                    }
                }
                if (askHeal.heal === "Medicine") {
                    if (player1.fuel <= 70) {
                        player1.medicine();
                    }
                    else {
                        console.log(chalk.bgRed(`Your Fuel is 70+ you can try another Heal Options like Energy Drink`));
                    }
                }
                if (askHeal.heal === "First Aid Kit") {
                    player1.firstAidKit();
                }
            }
            if (userSelect.select === "Exit..") {
                console.log(chalk.red("-".repeat(50)));
                console.log(chalk.bgRed.white("\t Better Luck Next Time"));
                console.log(chalk.red("-".repeat(50)));
                process.exit();
            }
            break;
        // Dinosaur Case
        case "Dinosaur":
            console.log("-".repeat(50));
            console.log(chalk.bgWhite.black(`\t\t${chalk.green(players.playerName)} V/S ${chalk.red(players.opponent)}`));
            console.log("-".repeat(50));
            const userOptions = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "Please Select One of the Following",
                choices: ["Attack", "Healing", "Exit.."],
            });
            if (userOptions.select === "Attack") {
                const randomNum = Math.floor(Math.random() * 2);
                if (randomNum > 0) {
                    player1.fuelDecrease();
                    if (player1.fuel <= 0) {
                        console.log(chalk.red("-".repeat(50)));
                        console.log(chalk.bgRed.white("\tYou Loose Better Luck Next Time"));
                        console.log(chalk.red("-".repeat(50)));
                        process.exit();
                    }
                }
                if (randomNum <= 0) {
                    opponent1.fuelDecrease();
                    if (opponent1.fuel <= 0) {
                        console.log(chalk.white("-".repeat(50)));
                        console.log(chalk.bgWhite.green("\tWinner Winner Chicken Dinner"));
                        console.log(chalk.white("-".repeat(50)));
                        process.exit();
                    }
                }
            }
            if (userOptions.select === "Healing") {
                const askHeal = await inquirer.prompt({
                    name: "heal",
                    type: "list",
                    message: "Please Select one of the Following Heal",
                    choices: ["Energy Drink", "Medicine", "First Aid Kit"],
                });
                if (askHeal.heal === "Energy Drink") {
                    if (player1.fuel < 100) {
                        player1.energyDrink();
                    }
                    else {
                        console.log(chalk.bgWhite.green("Your fuel is full Please try again later"));
                    }
                }
                if (askHeal.heal === "Medicine") {
                    if (player1.fuel <= 70) {
                        player1.medicine();
                    }
                    else {
                        console.log(chalk.bgRed(`Your Fuel is 70+ you can try another Heal Options like Energy Drink`));
                    }
                }
                if (askHeal.heal === "First Aid Kit") {
                    player1.firstAidKit();
                }
            }
            if (userOptions.select === "Exit..") {
                console.log(chalk.red("-".repeat(50)));
                console.log(chalk.bgRed.white("\t Better Luck Next Time"));
                console.log(chalk.red("-".repeat(50)));
                process.exit();
            }
            break;
    }
}
