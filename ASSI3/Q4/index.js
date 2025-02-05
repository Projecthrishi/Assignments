let str = "I love programming in JavaScript"; // Sample string with 27 characters

function countVowelsAndConsonants(inputString) {
    let vowels = 'aeiouAEIOU';
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    let vowelCount = 0;
    let consonantCount = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
        // Check if the character is a consonant
        else if (consonants.includes(char)) {
            consonantCount++;
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

let result = countVowelsAndConsonants(str);
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
