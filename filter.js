// Example array
let numbers = [1, 2, 3, 4, 5];

// Map: Create a new array with each element multiplied by 2
let doubled = numbers.map(num => num * 2);
console.log("Map result:", doubled);

// Reduce: Sum up all elements of the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduce result (sum):", sum);

// Filter: Get only numbers greater than 3
let filtered = numbers.filter(num => num > 3);
console.log("Filter result:", filtered);

// FlatMap: Flatten an array of arrays
let arrays = [[1, 2], [3, 4], [5, 6]];
let flatMapped = arrays.flatMap(arr => arr);
console.log("FlatMap result:", flatMapped);
