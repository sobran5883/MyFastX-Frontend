// chartsData.js
const chartsData = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    fill: {
      colors: ["#FF5B5B", "#2D9CDB"] // Change this color to the desired one
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%', // Adjust this value to control the width of the bars
        endingShape: 'rounded'
      }
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60]
    }
  ]
};

export default chartsData;
