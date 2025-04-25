// script.js
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return `${year} is a leap year.`;
        } else {
          return `${year} is not a leap year.`;
        }
      } else {
        return `${year} is a leap year.`;
      }
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(year)) {
      resultElement.textContent = "Please enter a valid year.";
    } else {
      const result = isLeapYear(year);
      resultElement.textContent = result;
    }
  }
  