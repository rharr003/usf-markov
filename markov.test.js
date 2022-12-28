const { MarkovMachine } = require("./markov");

describe("MarkovMachine class should generally work", function () {
  test("Should return valid MarkovMachine on init", function () {
    const machine = new MarkovMachine("the cat in the hat");
    expect(machine).toBeInstanceOf(MarkovMachine);
    expect(machine.chain).toBeDefined();
  });
});
