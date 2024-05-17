#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("=".repeat(60))
console.log(chalk.bold.cyanBright("\t\t WELCOME-code-with-tooba-words-count-\t"))
console.log("=".repeat(60))

let answers=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your words to count:"
    }
])
let words=answers.sentence.trim().split(" ")

console.log(words)

console.log(`Your words count are:${words.length}`)

console.log(chalk.red.bold("\n\t THANK-YOU FOR USING!\n\t"))