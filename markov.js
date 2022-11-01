/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    // \r stands for recursive. \n: new line. +: can be more than one word.
    this.uniqueWords = new Set(this.words)
    this.chains = this.getChains();
    //console.log(this.uniqueWords);
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
    // TODO: implement this!
    // creating an object 
    //making the key the word, value
    //make it unique
    let wordChain = {}
    for(let uniqueWord of this.uniqueWords){
      wordChain[uniqueWord] = [];
      for(let i = 0; i < this.words.length; i++){
        if(uniqueWord === this.words[i]){
          if(this.words[i+1] === undefined){
            let nextWord = null;
            wordChain[uniqueWord].push(nextWord);
          }else{
            let nextWord = this.words[i+1];
            wordChain[uniqueWord].push(nextWord);
          }
        }
      }
    }
    return wordChain
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}

const catInHatMachine = new MarkovMachine("the cat in the hat");