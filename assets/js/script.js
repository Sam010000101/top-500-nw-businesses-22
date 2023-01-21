import {companyData} from './data.js'

var options = {
    series: [{
    name: "Turnover",
    data: [companyData[0].turnover, companyData[1].turnover, companyData[2].turnover, companyData[3].turnover]
  }, {
    name: "pre-tax proffit",
    data: [companyData[0]["pre-tax proffit"], companyData[1]["pre-tax proffit"], companyData[2]["pre-tax proffit"], companyData[3]["pre-tax proffit"]]
  }],
    chart: {
    type: 'bar',
    height: '100%',
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    categories: [companyData[0].company, companyData[1].company, companyData[2].company, companyData[3].company
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();