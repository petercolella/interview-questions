const axios = require('axios');
const request = require('request');
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
      updateKeyValue(obj, fq, yr, amt);
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
  request(url, (error, response, body) => {
    console.log(error.message);
    console.log('statusCode:', response && response.statusCode);
    body = exampleResponse;
    const outputObj = createOutputObject(body.results, year);
    logOutputObject(outputObj);
  });
}

getData(url, 2018);
