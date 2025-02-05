let str = "I love programming in JavaScript"; // Sample string with 27 characters

function countVowelsAndConsonants(inputString) {
    let vowels = 'aeiouAEIOU';
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    let vowelCount = 0;
    let consonantCount = 0;
    
  
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        
       
        if (vowels.includes(char)) {
            vowelCount++;
        }
        
        else if (consonants.includes(char)) {
            consonantCount++;
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

let result = countVowelsAndConsonants(str);
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
