#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter a sentence: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Total Words count = ${words.length}`);
