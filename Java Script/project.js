function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  // Input
  const inputString = prompt("Enter the string: ");
  
  // Validate input constraints
  if (inputString.length < 1 || inputString.length > 100 || !/^[a-z]+$/.test(inputString)) {
    console.log("Invalid input! The string should have 1 to 100 lowercase characters.");
  } else {
    // Output
    const reversedString = reverseString(inputString);
    console.log("Output:", reversedString);
  }