// BarChart.js
import React, { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./OrderData";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartData;
  }

  render() {
    return (
      <div className="bar-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
          height={300}
        />
      </div>
    );
  }
}

export default BarChart;
