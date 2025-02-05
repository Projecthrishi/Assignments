function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}

:
let sentence = "I love coding in JavaScript. JavaScript is fun.";
let correctedSentence = correctfn(sentence, "JavaScript", "TypeScript");

console.log(correctedSentence);  
