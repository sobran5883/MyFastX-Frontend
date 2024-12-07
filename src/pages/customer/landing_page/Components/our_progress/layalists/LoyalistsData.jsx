// chartData.js
const LoyalistsData = {
    series: [70],
    options: {
        colors:["#00B074"],
      chart: {
        height: 100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            name: {
              offsetY: 85,
              show: true,
              color: '#464255',
              fontSize: '15px'
            },
            value: {
              offsetY: -10,
              color: '#111',
              fontSize: '20px',
              show: true,
            }
          },
          track: {
            background: '#00B07426', // Change this color to red
            strokeWidth: '100%',
          },
        },
      },
      labels: ['Loyalists'],
    },
  };
  
  export default LoyalistsData;
  