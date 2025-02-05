let string = 'INDIA';


let arr = string.split('');


arr.splice(3, 0, 'O', 'N', 'E', 'S');


let modifiedString = arr.join('');

console.log(modifiedString); 
