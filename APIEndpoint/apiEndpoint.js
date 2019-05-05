const axios = require('axios');
const url = 'https://api.agency.gov/data/fiscal?format=json';
const exampleResponse = require('./exampleResponse');

function updateKeyValue(obj, fq, yr, value) {
  const key = `Q${fq}-${yr}`;
  return !obj[key] ? (obj[key] = value) : (obj[key] += value);
}

function createOutputObject(results, yr) {
  const obj = {};
  results.forEach(result => {
    const amt = parseFloat(result.outlay_amt);
    const fq = result.outlay_fq;
    if (result.outlay_fy == yr) {
      switch (fq) {
        case '1':
          updateKeyValue(obj, fq, yr, amt);
          break;
        case '2':
          updateKeyValue(obj, fq, yr, amt);
          break;
        case '3':
          updateKeyValue(obj, fq, yr, amt);
          break;
        case '4':
          updateKeyValue(obj, fq, yr, amt);
          break;
        default:
          null;
      }
    }
  });
  return obj;
}

function logOutputObject(obj) {
  Object.keys(obj)
    .sort()
    .forEach(key => {
      console.log(`${key}: ${obj[key].toLocaleString()}`);
    });
}

function getData(url, year) {
  axios
    .get(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    })
    .then(() => {
      const outputObj = createOutputObject(exampleResponse.results, year);
      logOutputObject(outputObj);
    });
}

getData(url, 2018);
