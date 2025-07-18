const PADDING = 4;

/**
 * @param {string} sentence
 */
export function makeBanner(sentence) {
  const words = sentence.toUpperCase().split(" ");
  for (const word of words) {
    wrapWithBorder(word);
  }
}

export function wrapWithBorder(word) {
const line = "*".repeat(word.length + PADDING);
    console.log(`${line}
* ${word} *
${line}`);    
}


// export default {
//     makeBanner,
//     wrapWithBorder
// }