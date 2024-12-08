// chartData.js
const DeliveryData = {
  series: [100],
  options: {
    colors: ["#00B074"],
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
            offsetY: 60, // Adjusted to position it closer to the chart
            show: true,
            color: '#464255',
            fontSize: '15px',
          },
          value: {
            offsetY: -10,
            color: '#111',
            fontSize: '20px',
            show: true,
          },
        },
        track: {
          background: '#00B07426', // Keeping the red background
          strokeWidth: '100%',
        },
      },
    },
    labels: ['Delivery'], // Ensure the label is defined correctly
  },
};

export default DeliveryData;
