// chartData.js
const chartData = {
    series: [
      {
        name: 'series1',
        data: [10, 20, 12,25, 12, 25, 20]
      },
    ],
    options: {
      chart: {
        height: 150,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width:2,
      },
      xaxis: {
        type: 'category',
        categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
    },
  };
  
  export default chartData;
  