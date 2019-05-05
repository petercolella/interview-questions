//API endpoint question:
// 'https://api.agency.gov/data/fiscal?format=json';

//example response:
// {
//     results: [{
//         name: 'EPA',
//         outlay_fy: '2019',
//         outlay_fq: '1',
//         outlay_amt: '20000',
//         budget: '35000',
//         contact:'zinka, Ryan(LOL)'
//     },
//     {
//         name: 'USCIS',
//         outlay_fy:'2018',
//         outlay_fq: '3',
//         outlay_amt: '100000',
//         budget: '15000',
//         contact: 'whoever'
//     },
//     ...
//     ]
// }

//using node, write an application that will retrieve the agency data at the endpoint above,
//and will log QUARTERLY outlay totals for the FISCAL year (2018).

//example output:
//Q1-2018: 52,000,000.9162746
//Q2-2018: 61,000,000.105219
//Q3-2018: 120,586,342.013672
//Q4-2018: 2,467,826,422.6176829

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
      outlay_amt: '100000',
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
      outlay_amt: '130000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'INTERIOR',
      outlay_fy: '2018',
      outlay_fq: '1',
      outlay_amt: '120000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'EDUCATION',
      outlay_fy: '2018',
      outlay_fq: '4',
      outlay_amt: '110000',
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
      outlay_amt: '70000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'INTERIOR',
      outlay_fy: '2018',
      outlay_fq: '1',
      outlay_amt: '80000',
      budget: '15000',
      contact: 'whoever'
    },
    {
      name: 'EDUCATION',
      outlay_fy: '2018',
      outlay_fq: '4',
      outlay_amt: '90000',
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
          console.log(`${key}: ${outputObj[key]}`);
        });
    });
}

outlay(url, 2018);
