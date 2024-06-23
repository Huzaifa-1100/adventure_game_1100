// import chalk
import chalk from "chalk";
// import player1 data from main file
import { player1 } from "./main.js";
// import opponent data from main file
import { opponent1 } from "./main.js";
// Making a class for player
export class Player {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    // Method to decrease fuel
    fuelDecrease() {
        const fuel = this.fuel - 10;
        this.fuel = fuel;
        console.log("-".repeat(50));
        console.log(chalk.bgRed(`\t\t${player1.name} fuel is ${player1.fuel}`));
        console.log(chalk.bgWhite.green(`\t\t${opponent1.name} fuel is ${opponent1.fuel}`));
        console.log("-".repeat(50));
    }
    // Method to increase fuel 10%
    energyDrink() {
        const fuel = this.fuel + 10;
        this.fuel = fuel;
        console.log(chalk.bgWhite.green(`\t${player1.name} your fuel is increase by 10% Fuel is : ${player1.fuel}`));
    }
    // Method to increase fuel by 30%
    medicine() {
        const fuel = this.fuel + 30;
        this.fuel = fuel;
        console.log(chalk.bgWhite.green(`\t${player1.name} your fuel is increase by 30% Fuel is : ${player1.fuel}`));
    }
    // Method to 100 % fuel
    firstAidKit() {
        this.fuel = 100;
        console.log(chalk.bgWhite.green(`\t${player1.name} your fuel is : ${player1.fuel}`));
    }
}
