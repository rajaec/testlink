// Function to reverse a string
function reverseString(str) {
    let strArray = str.split("");  // Convert string to array
    let reversedArray = strArray.reverse();  // Reverse the array
    let reversedStr = reversedArray.join("");  // Join the array back into a string
    return reversedStr;
}

// Test the function
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
