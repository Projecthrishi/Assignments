function sumOfProducts(n1, n2) {
    let s1 = n1.toString();
    let s2 = n2.toString();
    
    let len1 = s1.length;
    let len2 = s2.length;
    
    let sum = 0;
    
    let minLength = Math.min(len1, len2);
    
    for (let i = 0; i < minLength; i++) {
        let d1 = parseInt(s1[len1 - 1 - i]); 
        let d2 = parseInt(s2[len2 - 1 - i]);
        sum += d1 * d2;
    }
    
    return sum;
}


console.log(sumOfProducts(6, 34));   // Output: 24
console.log(sumOfProducts(123, 456)); // Output: 38
console.log(sumOfProducts(98, 7));    // Output: 56
console.log(sumOfProducts(7, 98));    // Output: 56
