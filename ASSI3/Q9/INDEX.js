function countWords(paragraph) {
    // Split the paragraph by spaces, filter out empty strings, and count the words
    return paragraph.split(/\s+/).filter(word => word.length > 0).length;
}

// Example usage
let paragraph = "This is a simple paragraph with several words.";
console.log(countWords(paragraph));  // Output: 7
