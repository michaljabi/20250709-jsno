// @ts-check

import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { makeBanner, wrapWithBorder } from './make-banner.js';

wrapWithBorder("WITAJ W GENERATORZE BANNERÓW [!]")

const rl = createInterface({
  input,
  output,
});

rl.question("Podaj zdanie jakie chcesz zamienić w banner:", (answer = "") => {
  makeBanner(answer);
  rl.close();
});



