const chartData = {
    series: [81],
    options: {
        colors:["#2D9CDB"],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          dataLabels: {
            name: {
              offsetY: 60,
              show: true,
              color: '#464255',
              fontSize: '14px'
            },
            value: {
              offsetY: -8,
              color: '#111',
              fontSize: '18px',
              show: true,
            }
          },
          track: {
            background: '#00000015',
            strokeWidth: '100%',
          },
        },
      },
      labels: ['7ft'],
    },
  };
  
  export default chartData;
  
    