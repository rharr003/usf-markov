/** Textual markov chain generator */
const fs = require("fs");

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = {};
    this.words.forEach((word, index, arr) => {
      if (!chain[`${word}`]) {
        chain[`${word}`] = [index < arr.length - 1 ? arr[index + 1] : null];
      } else {
        chain[`${word}`].push(index < arr.length - 1 ? arr[index + 1] : null);
      }
    });
    this.chain = chain;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let message = "";
    let curword = this.words[Math.floor(Math.random() * this.words.length)];
    for (let i = 0; i < numWords; i++) {
      message += curword + " ";
      if (!this.chain[curword][0]) return message;
      const nextWord =
        this.chain[curword][
          Math.floor(Math.random() * this.chain[curword].length)
        ];
      curword = nextWord;
    }

    return message;
  }
}
fs.readFile("eggs.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const m = new MarkovMachine(data);
  console.log(m.makeText(100));
});

module.exports = {
  MarkovMachine: MarkovMachine,
};
