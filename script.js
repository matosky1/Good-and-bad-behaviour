

function checkNumber(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 0) {
          resolve("Good");
        } else if (number < 0) {
          reject("Bad");
        } else {
          reject("Neither positive nor negative");
        }
      }, 3000);
    });
  }
  
  const inputNumber = 5;
  
  checkNumber(inputNumber)
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.log(error); 
    });
  
  module.exports = checkNumber;
  