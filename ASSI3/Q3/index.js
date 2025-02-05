let string = 'INDIA';

// Convert the string to an array of characters
let arr = string.split('');

// Use splice to insert 'O', 'N', 'E', 'S' after 'IND'
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Convert the array back to a string
let modifiedString = arr.join('');

console.log(modifiedString); // Output: 'INDONESIA'
