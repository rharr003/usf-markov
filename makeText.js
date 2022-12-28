const { MarkovMachine } = require("./markov");
const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, "utf-8", (err, data) => {
  if (err) throw err;
  const m = new MarkovMachine(data);
  console.log(m.makeText(100));
});
