// BMI Calculator Function
function calculateBMI() {
    // Prompt user for input
    let userName = prompt("Enter your name:");
    let weight = prompt("Enter your weight in kg:");
    let height = prompt("Enter your height in meters:");

    // Convert weight and height to numbers
    weight = Number(weight);
    height = Number(height);

    // Validate input (ensure numbers are entered)
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Calculate BMI
    let bmi = weight / (height * height);

    // Convert BMI value to string for display
    let bmiString = String(bmi.toFixed(2)); // Rounding to 2 decimal places

    // Display the result using string concatenation
    alert("Hello " + userName + ", your BMI is " + bmiString);
    console.log("Hello " + userName + ", your BMI is " + bmiString);

    // Display the result using template literals
    console.log(`Hello ${userName}, your BMI is ${bmiString}`);

    // Type Conversions and Operations- converts variables into different data types
    let nameToNumber = Number(userName); // Expected to give NaN
    let bmiToBoolean = Boolean(bmi); // Will be true if BMI > 0

    console.log("Converting name to number:", nameToNumber); // Should output NaN
    console.log("Converting BMI to boolean:", bmiToBoolean); // True if BMI > 0, False otherwise

    // String and number concatenation
    console.log("Your age is " + 25); // Expected output: "Your age is 25"
}
