function repeatedDigitSum(num) {
    // Loop until the number has only one digit
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

// Example usage
console.log(repeatedDigitSum(456));  // Output: 6
console.log(repeatedDigitSum(1234)); // Output: 1
console.log(repeatedDigitSum(999));  // Output: 9
