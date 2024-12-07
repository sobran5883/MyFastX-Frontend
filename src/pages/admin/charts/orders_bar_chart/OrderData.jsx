// chartsData.js
const chartsData = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["6", "7","8","9", "10","11","12", "13","14","15"]
      },
      fill: {
        colors: ["#2D9CDB"] // Change this color to the desired one
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%', // Adjust this value to control the width of the bars
          endingShape: 'rounded'
        },
        dataLabels:{
            value:{
                show:false
            }
        }
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60,30, 40, 45, 50]
      }
    ]
  };
  
  export default chartsData;
  