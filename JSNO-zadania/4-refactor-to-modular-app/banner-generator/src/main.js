// @ts-check

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { makeBanner, wrapWithBorder } = require('./make-banner')

wrapWithBorder("WITAJ W GENERATORZE BANNERÓW [!]")

const rl = readline.createInterface({
  input,
  output,
});

rl.question("Podaj zdanie jakie chcesz zamienić w banner:", (answer = "") => {
  makeBanner(answer);
});


