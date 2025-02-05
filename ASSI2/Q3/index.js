function findTax(salary) {
    let taxRate;

    switch (true) {
        case salary > 0 && salary <= 500000:
            taxRate = 0;
            break;
        case salary > 500000 && salary <= 1000000:
            taxRate = 0.10;
            break;
        case salary > 1000000 && salary <= 1500000:
            taxRate = 0.20;
            break;
        case salary > 1500000:
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary amount";
    }

    let taxAmount = salary * taxRate;
    return `Tax on salary ₹${salary} is ₹${taxAmount}`;
}


console.log(findTax(400000));  // Output: Tax on salary ₹400000 is ₹0
console.log(findTax(750000));  // Output: Tax on salary ₹750000 is ₹75000
console.log(findTax(1200000)); // Output: Tax on salary ₹1200000 is ₹240000
console.log(findTax(2000000)); // Output: Tax on salary ₹2000000 is ₹600000
console.log(findTax(-50000));  // Output: Invalid salary amount
