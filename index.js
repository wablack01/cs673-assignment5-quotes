import inquirer from "inquirer";
import { getQuote } from "./quotes.js";

const prompt = {
    name: 'response',
    message: 'Would you like to receive a new quote?',
    type: 'confirm'
};

console.log("Welcome to the quote generator app.");

function promptUser() {
    let quoteRequested = true;
    inquirer
        .prompt([prompt])
        .then((answers) => {
            quoteRequested = answers.response
            if (quoteRequested) {
                return getQuote()
            } else {
                return "";
            }
        })
        .then((quote) => {
            if (quote != "") {
                console.log(`\"${quote.quoteText.trim()}\" - ${quote.quoteAuthor}`);
            }

            if (quoteRequested) {
                promptUser();
            }
        });
}

promptUser();

