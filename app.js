#! /usr/bin/env node
import {Command} from 'commander';
const program = new Command();
import {parseDollar,parseEuro,parseGold} from "./parser.js";
import chalk from 'chalk';

program
  .option('-h,--help')
  .option('-d, --dollar')
  .option('-e, --euro')
  .option('-g, --gold')
  .option('-a, --all');
program.parse();

const options = program.opts();

 if (options.help){
    console.log("Usage: dollar [-h --help][-d, --dollar] [-e, --euro] [-g, --gold] [-a, --all]");
     }
 if (options.dollar) getDollar();
 if (options.euro) getEuro();
 if (options.gold) getGold();
 if (options.all) getAll();

console.log("_________________________");

function getDollar() {
    parseDollar()
    .then((price)=>{
        console.log("|"+chalk.bgGreenBright.black("   USD/TRY    ")+"| " +chalk.bgGreenBright.black(price)+ "  |");
        console.log("-------------------------");
    })
    .catch((err)=>console.log(err));
}

function getEuro() {
    parseEuro()
    .then((price)=>{
        console.log("|"+chalk.bgBlueBright.black("   EUR/TRY    ")+"| " +chalk.bgBlueBright.black(price)+ "  |");
        console.log("-------------------------");
    })
    .catch((err)=>console.log(err));
}

function getGold() {
    parseGold()
    .then((price)=>{
        console.log("|"+chalk.bgYellow.black("  XAU(gr)/TRY ")+"| " +chalk.bgYellow.black(price)+ "  |");
        console.log("-------------------------");
    })
    .catch((err)=>console.log(err));
}

function getAll() {
    getDollar();
    getEuro();
    getGold();
}