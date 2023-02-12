// common-functions.js
const { v4: uuidv4 } = require('uuid');

function generateRandomBoolean(ternaryOpperator1,ternaryOpperator2) {
  return Math.random() >= 0.1 ? ternaryOpperator1 : ternaryOpperator2;
};
function generateNumber(numberLength) {
  let randomNumber = ''
  for (let i = 0; i<numberLength;i++){
  randomNumber += Math.floor(Math.random() * 10);}
  return randomNumber;
};
function getAccNum(accountNumbers) {
  const randomIndex = Math.floor(Math.random() * accountNumbers.length);
  return accountNumbers[randomIndex];
};


const generateData = (data, n) => {
  const outputData = [];
  for (let i = 0; i < n; i++) {
    const item = {
      id: uuidv4()
    };
    data.forEach(element => {
      item[element.fieldName] = element.fieldGenerator();
    });
    outputData.push(item);
  }
  return outputData;
};

module.exports = {
  generateData,
  generateRandomBoolean,
  generateNumber,
  getAccNum

};
