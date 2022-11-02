"use strict";

/** Command-line tool to generate Markov text. */
const fsP = require("fs/promises");
const argv = process.argv;
let completeText = '';

async function allText(){
    for(let arg of argv){
        if(arg.endsWith(".txt")){
            let completeTextP = await getTextFromFile(arg);
            
        }
    }
    console.log(completeText);
    return completeTextP;
}

let something = await allText()


/**
 * Accepts a file path and console logs the contents,
 * or notifies of non-existing file and exits.
 */
async function getTextFromFile(path) {
    
    try {
        let contents = await fsP.readFile(path, "utf8");
        return contents;
    } catch (err) {
        console.log("No such file exists.");
        console.log(err);
        process.exit(1);
    }
}


module.exports = {
    allText,
}