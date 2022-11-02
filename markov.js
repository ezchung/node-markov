/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.uniqueWords = new Set(this.words)
    this.chains = this.getChains();
    console.log(this.chains);
  }


  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   * */

  getChains() {
    let wordChain = {};
    for (let uniqueWord of this.uniqueWords) {
      wordChain[uniqueWord] = [];
      for (let i = 0; i < this.words.length; i++) {
        if (uniqueWord === this.words[i]) {
          
          if (this.words[i + 1] === undefined) {
            let nextWord = null;
            wordChain[uniqueWord].push(nextWord);
          } else {
            let nextWord = this.words[i + 1];
            wordChain[uniqueWord].push(nextWord);
          }
        }
      }
    }
    return wordChain;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    //debugger;
    let currentWord = this.words[0];
    let sentence = currentWord;
    
    while (currentWord) {

      let numPossibleWords = this.chains[currentWord].length;

      if (numPossibleWords === 1) {
        currentWord = this.chains[currentWord][0];
      } else {
        let randIdx = Math.round(Math.random() * (numPossibleWords - 1));
        currentWord = this.chains[currentWord][randIdx];
      }

      if (currentWord !== null) {
        sentence += ` ${currentWord}`;
      } else {
        break;
      }
    }

    return console.log(sentence);
  }
}





let textSnippet = `I would not like them
Here or there.
I would not like them
Anywhere.
I do not like
Green eggs and ham.
I do not like them,
Sam-I-am

Would you like them
In a house?
Would you like them
With a mouse?
`;

//Do we need to put documentation on this??
module.exports = {
  MarkovMachine,
  textSnippet,
}

//const newMarkovMachine = new MarkovMachine(text);

//newMarkovMachine.getText();
// const catInHatMachine = new MarkovMachine("the cat in the hat is oddly shaped");

// catInHatMachine.getText()