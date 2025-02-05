function countWords(paragraph) {
    
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}

e
let paragraph = "This is a simple paragraph with several words.";
console.log(countWords(paragraph));  // Output: 7
