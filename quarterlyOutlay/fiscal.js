const axios = require('axios');
const url = 'https://api.agency.gov/data/fiscal?format=json';
const exampleResponse = require('./exampleResponse');

function updateKeyValue(obj, fq, yr, value) {
  const key = `Q${fq}-${yr}`;
  return !obj[key] ? (obj[key] = value) : (obj[key] += value);
}

function outlay(url, year) {
  const outputObj = {};
  axios
    .get(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    })
    .then(() => {
      exampleResponse.results.forEach(result => {
        const amt = parseFloat(result.outlay_amt);
        const fq = result.outlay_fq;
        if (result.outlay_fy == year) {
          switch (fq) {
            case '1':
              updateKeyValue(outputObj, fq, year, amt);
              break;
            case '2':
              updateKeyValue(outputObj, fq, year, amt);
              break;
            case '3':
              updateKeyValue(outputObj, fq, year, amt);
              break;
            case '4':
              updateKeyValue(outputObj, fq, year, amt);
              break;
            default:
              null;
          }
        }
      });
      Object.keys(outputObj)
        .sort()
        .forEach(key => {
          console.log(`${key}: ${outputObj[key].toLocaleString()}`);
        });
    });
}

outlay(url, 2018);
