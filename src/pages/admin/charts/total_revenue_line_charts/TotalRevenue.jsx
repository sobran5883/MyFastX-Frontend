// LineChart.js
import React, { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./TotalRevenueData";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartData;
  }

  render() {
    return (
      <div className="line-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          width={500}
        />
      </div>
    );
  }
}

export default LineChart;
