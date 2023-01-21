const companyData = [
    {
        "company": "JD Sports",
        "location": "Bury",
        "turnover": 8563.0,
        "pre-tax proffit": 654.7,
        "year end": "Jan 22"
    },
    {
        "company": "B&M Retail",
        "location": "Liverpool",
        "turnover": 3914.0,
        "pre-tax proffit": 514.0,
        "year end": "Mar 22"
    },
    {
        "company": "EG",
        "location": "Blackburn",
        "turnover": 19553.4,
        "pre-tax proffit": 153.2,
        "year end": "Dec 21"
    },
    {
        "company": "Inovyn",
        "location": "Runcorn",
        "turnover": 3547.4,
        "pre-tax proffit": 466.8,
        "year end": "Dec 21"
    },
    {
        "company": "Ausurus",
        "location": "Warrington",
        "turnover": 4695.0,
        "pre-tax proffit": 251.0,
        "year end": "Dec 21"
    },
    {
        "company": "Bentley Motors",
        "location": "Crewe",
        "turnover": 2392.8,
        "pre-tax proffit": 560.7,
        "year end": "Dec 21"
    },
    {
        "company": "TJ Morris",
        "location": "Liverpool",
        "turnover": 3338.0,
        "pre-tax proffit": 396.7,
        "year end": "Jun 21"
    },
    {
        "company": "Co-Operative",
        "location": "Manchester",
        "turnover": 11427.0,
        "pre-tax proffit": 127.0,
        "year end": "Jan 21"
    },
    {
        "company": "Marlowe",
        "location": "Knutsford",
        "turnover": 2737.8,
        "pre-tax proffit": 167.1,
        "year end": "Dec 21"
    },
    {
        "company": "United Utilities",
        "location": "Warrington",
        "turnover": 1862.7,
        "pre-tax proffit": 439.9,
        "year end": "Mar 22"
    },
    {
        "company": "Radius Payment Solutions",
        "location": "Crewe",
        "turnover": 3389.1,
        "pre-tax proffit": 126.8,
        "year end": "Mar 22"
    },
    {
        "company": "Lookers",
        "location": "Altrincham",
        "turnover": 4050.7,
        "pre-tax proffit": 90.0,
        "year end": "Dec 21"
    },
    {
        "company": "Pets At Home",
        "location": "Wilmslow",
        "turnover": 1317.8,
        "pre-tax proffit": 148.7,
        "year end": "Mar 22"
    },
    {
        "company": "Very",
        "location": "Liverpool",
        "turnover": 2317.1,
        "pre-tax proffit": 81.7,
        "year end": "Jun 21"
    },
    {
        "company": "Brother International Europe",
        "location": "Manchester",
        "turnover": 792.9,
        "pre-tax proffit": 136.4,
        "year end": "Mar 21"
    }

];

// console.log(companyData[1].company);
// console.log(companyData[1].location);
// console.log(companyData[1].turnover);
// console.log(companyData[1]["pre-tax proffit"]);

//calculate pre-taxt proffit as a percentage of turnover
let preTaxProffit = companyData[0]["pre-tax proffit"]
let turnover = companyData[0].turnover
let c = profitPercentage(preTaxProffit, turnover)

function profitPercentage(preTaxProffit, turnover) {
    return (preTaxProffit / turnover * 100).toFixed(1) + "%";
}
console.log(c);

export { companyData };