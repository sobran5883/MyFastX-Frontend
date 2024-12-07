// chartData.js
const chartData = {
  series: [22],
  options: {
      colors:["#00B074"],
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
            offsetY: 100,
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
          background: '#00B07426', // Change this color to red
          strokeWidth: '100%',
        },
      },
    },
    labels: ['Customer Growth'],
  },
};

export default chartData;
