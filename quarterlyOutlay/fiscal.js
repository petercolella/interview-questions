const axios = require('axios');
const url = 'https://api.agency.gov/data/fiscal?format=json';
const exampleResponse = {
  results: [
    {
      name: 'EPA',
      outlay_fy: '2019',
      outlay_fq: '1',
      outlay_amt: '20000',
      budget: '35000',
      contact: 'zinka, Ryan(LOL)'
    },
    {
      name: 'USCIS',
      outlay_fy: '2018',
      outlay_fq: '3',
      outlay_amt: '140000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'EPA',
      outlay_fy: '2018',
      outlay_fq: '3',
      outlay_amt: '98000.375',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'USCIS',
      outlay_fy: '2019',
      outlay_fq: '3',
      outlay_amt: '150000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'LABOR',
      outlay_fy: '2018',
      outlay_fq: '2',
      outlay_amt: '1520000.33',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'INTERIOR',
      outlay_fy: '2018',
      outlay_fq: '1',
      outlay_amt: '117000.875',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'EDUCATION',
      outlay_fy: '2018',
      outlay_fq: '4',
      outlay_amt: '43000.67',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'USCIS',
      outlay_fy: '2019',
      outlay_fq: '3',
      outlay_amt: '60000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'LABOR',
      outlay_fy: '2018',
      outlay_fq: '2',
      outlay_amt: '75000.170',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'INTERIOR',
      outlay_fy: '2018',
      outlay_fq: '1',
      outlay_amt: '8300.002',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'EDUCATION',
      outlay_fy: '2018',
      outlay_fq: '4',
      outlay_amt: '6200.777',
      budget: '15000',
      contact: 'whoever'
    }
  ]
};

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
