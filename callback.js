// Callback function example
function greetUser(name, callback) {
    console.log("Hello, " + name + "!");
    callback();  // Calling the callback function
}

// Define the callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call greetUser with the callback
greetUser("Alice", sayGoodbye);
