// AreaChart.js
import  { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./ChartOrderData";

class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartData;
  }

  render() {
    return (
      <div className="area-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={250}
          width={500}
        />
      </div>
    );
  }
}

export default AreaChart;
