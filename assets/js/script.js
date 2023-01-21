import { companyData } from './data.js'

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
    tickAmount: undefined,
    tickPlacement: 'between',
    min: undefined,
    max: undefined,
    range: undefined,
    floating: false,
    decimalsInFloat: undefined,
    overwriteCategories: undefined,
    position: 'bottom',
    labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
            colors: [],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
            year: 'yyyy',
            month: "MMM 'yy",
            day: 'dd MMM',
            hour: 'HH:mm',
        },
    },
    group: {
      groups: [],
      style: {
        colors: [],
        fontSize: '12px',
        fontWeight: 400,
        fontFamily: undefined,
        cssClass: ''
      }
    },
    axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
    },
    axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0
    },
   
    title: {
        text: "COMPANY",
        offsetX: 0,
        offsetY: 80,
        style: {
            color: undefined,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title',
        },
    },
    crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        opacity: 0.9,        
        stroke: {
            color: '#b6b6b6',
            width: 0,
            dashArray: 0,
        },
        fill: {
            type: 'solid',
            color: '#B1B9C4',
            gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
            },
        },
        dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 1,
            opacity: 0.4,
        },
    },
    tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: 0,
          fontFamily: 0,
        },
    },
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  },
  yaxis: {
    show: true,
    showAlways: true,
    showForNullSeries: false,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    logBase: 10,
    tickAmount: 6,
    min: 0,
    max: 20000,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: 0,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-yaxis-label',
      },
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
      // formatter: (value) => { return val },
    },
    axisBorder: {
      show: true,
      color: '#78909C',
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    title: {
      text: "£M",
      rotate: -90,
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#b6b6b6',
        width: 1,
        dashArray: 0,
      },
    },
    tooltip: {
      enabled: false,
      offsetX: 0,
    },

  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();