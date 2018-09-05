// Iterative Way
function countBs(text) {
  let counter = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] === "B") {
      counter++;
    }
  }
  return counter;
}

function countChar(text, charToSeek) {
  let counter = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] === charToSeek) {
      counter++;
    }
  }
  return counter;
}

// Regex Way
function countBsRegex(text) {
  return text.match(/B/g).length;
}

function countCharRegex(text, charToSeek) {
  let matchRegex = new RegExp(charToSeek, "g"); // "g" is global-search for the text, match all occurrences
  if (text.match(matchRegex)) {
    return text.match(matchRegex).length;
  } else {
    return 0;
  }
}

console.log(countBs("BBC")); // 2
console.log(countBs("Batman")); // 1
console.log(countBs("Bratislab")); // 1

console.log(countChar("Mississipi", "s")); // 4
console.log(countChar("Mississipi", "p")); // 1
console.log(countChar("Mississipi", "i")); // 4
console.log(countChar("Mississipi", "y")); // 0

console.log(countBsRegex("BBC")); // 2
console.log(countBsRegex("Batman")); // 1
console.log(countBsRegex("Bratislab")); // 1

console.log(countCharRegex("Mississipi", "s")); // 4
console.log(countCharRegex("Mississipi", "p")); // 1
console.log(countCharRegex("Mississipi", "i")); // 4
console.log(countCharRegex("Mississipi", "y")); // 0