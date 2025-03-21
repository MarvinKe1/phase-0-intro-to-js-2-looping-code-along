// Code your solutions in this file
// writeCards function
function writeCards(names, event) {
    let thankYouCards = []; // Initialize an empty array to store messages
  
    // Loop through the names array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for each name
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
      // Add the message to the thankYouCards array
      thankYouCards.push(message);
    }
  
    // Return the array with all the messages
    return thankYouCards;
  }
  
  // Function to count down from a given number to zero
  function countDown(start) {
    // While the start number is greater than or equal to zero
    while (start >= 0) {
      console.log(start);  // Log the current number
      start--;  // Decrement the counter by 1
    }
  }
  
  // Export the functions for testing
  module.exports = { writeCards, countDown };
  
  
