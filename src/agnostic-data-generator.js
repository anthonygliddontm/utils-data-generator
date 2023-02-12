// index.js
const fs = require('fs');
const { generateData } = require('./common-functions');
const { v4: uuidv4 } = require('uuid');
const writeToCSV = (data, fileName) => {
  const fields = Object.keys(data[0]);
  const csvData = data.map(row => {
    return fields.map(fieldName => {
      return row[fieldName];
    });
  });
  csvData.unshift(fields);
  const csv = csvData.map(row => row.join(',')).join('\n');
  fs.writeFile(fileName, csv, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Data written to ${fileName}`);
    }
  });
};

const data = [
  {
    fieldName: 'randomNumber',
    fieldGenerator: () => Math.floor(Math.random() * 100000000)
  },
  {
    fieldName: 'status',
    fieldGenerator: () => Math.random() > 0.5 ? 'Success' : 'Failure'
  },
  {
    fieldName: 'uuid',
    fieldGenerator: () => uuidv4()
  },
];
const outputData = generateData(data, 3);
writeToCSV(outputData, 'datum.csv');
