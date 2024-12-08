  // chartData.js
const chartData = {
  series: [81],
  options: {
      colors:["#FF5B5B"],
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
          background: '#FF5B5B26', // Change this color to red
          strokeWidth: '100%',
        },
      },
    },
    labels: ['Total Order'],
  },
};

export default chartData;

  