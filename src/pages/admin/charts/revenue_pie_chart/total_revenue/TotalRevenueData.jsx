// chartData.js
const chartData = {
    series: [62],
    options: {
        colors:["#2D9CDB"],
      chart: {
        height: 100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%',
          },
          dataLabels: {
            name: {
              offsetY: 85,
              show: true,
              color: '#464255',
              fontSize: '14px'
            },
            value: {
              offsetY: -10,
              color: '#111',
              fontSize: '18px',
              show: true,
            }
          },
          track: {
            background: '#2D9CDB26',
            strokeWidth: '100%',
          },
        },
      },
      labels: ['Total Revenue'],
    },
  };
  
  export default chartData;
  