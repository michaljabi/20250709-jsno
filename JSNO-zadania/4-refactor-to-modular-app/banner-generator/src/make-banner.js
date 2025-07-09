const PADDING = 4;

/**
 * @param {string} sentence
 */
function makeBanner(sentence) {
  const words = sentence.toUpperCase().split(" ");
  for (const word of words) {
    const line = "*".repeat(word.length + PADDING);
    console.log(`${line}
* ${word} *
${line}`);
  }
}


module.exports = {
    makeBanner: makeBanner 
}