// chartData.js
const chartData = {
  series: [
    {
      name: "2022",
      data: [28, 29, 33, 15, 32, 32, 33, 58 ,82 , 45]
    },
    {
      name: "2023",
      data: [12, 34, 14, 36, 17, 13, 13, 58 ,32 , 95]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#FF5B5B', '#2D9CDB'],
    dataLabels: {
      enabled: false, // Set this to false to hide data labels
    },
    stroke: {
      curve: 'smooth',
      width:2,
    },
    title: {
      text: 'Total Revenue',
      align: 'left'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Revenue (k)'
      },
      min: 0,
      max: 100
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  },
};

export default chartData;
