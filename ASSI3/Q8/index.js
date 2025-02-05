function repeatedDigitSum(num) {
    
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}


console.log(repeatedDigitSum(456));  // Output: 6
console.log(repeatedDigitSum(1234)); // Output: 1
console.log(repeatedDigitSum(999));  // Output: 9
