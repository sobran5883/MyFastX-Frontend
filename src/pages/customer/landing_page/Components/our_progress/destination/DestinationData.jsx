// chartData.js
const DestinationData = {
    series: [100],
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
              offsetY: 60,
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
      labels: ['Destination'],
    },
  };
  
  export default DestinationData;
  