# API endpoint question:

'https://api.agency.gov/data/fiscal?format=json';

Example Response:

```js
{
    results: [{
        name: 'EPA',
        outlay_fy: '2019',
        outlay_fq: '1',
        outlay_amt: '20000',
        budget: '35000',
        contact:'zinka, Ryan(LOL)'
    },
    {
        name: 'USCIS',
        outlay_fy:'2018',
        outlay_fq: '3',
        outlay_amt: '100000',
        budget: '15000',
        contact: 'whoever'
    },
    ...
    ]
}
```

Using node, write an application that will retrieve the agency data at the endpoint above,
and will log QUARTERLY outlay totals for the FISCAL year (2018).

Example Output:

```Shell
Q1-2018: 52,000,000.9162746
Q2-2018: 61,000,000.105219
Q3-2018: 120,586,342.013672
Q4-2018: 2,467,826,422.6176829
```
