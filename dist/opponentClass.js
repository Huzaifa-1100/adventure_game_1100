// import chalk
import chalk from "chalk";
// import player1 data from main file
import { player1 } from "./main.js";
// import opponent data from main file
import { opponent1 } from "./main.js";
// Making a class for opponent
export class Opponent {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    // Method to decrease opponent fuel
    fuelDecrease() {
        const fuel = this.fuel - 10;
        this.fuel = fuel;
        console.log("-".repeat(50));
        console.log(chalk.bgRed(`\t\t${opponent1.name} fuel is ${opponent1.fuel}`));
        console.log(chalk.bgWhite.green(`\t\t${player1.name} fuel is ${player1.fuel}`));
        console.log("-".repeat(50));
    }
}
