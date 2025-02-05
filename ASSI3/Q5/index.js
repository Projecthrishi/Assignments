function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}

// Example usage:
let sentence = "I love coding in JavaScript. JavaScript is fun.";
let correctedSentence = correctfn(sentence, "JavaScript", "TypeScript");

console.log(correctedSentence);  // Output: "I love coding in TypeScript. TypeScript is fun."
