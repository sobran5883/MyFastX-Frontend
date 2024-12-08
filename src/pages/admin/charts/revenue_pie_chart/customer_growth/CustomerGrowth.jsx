// RadialBarChart.js
import React, { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./CustomerGrowthData";

class RadialBarChart extends Component {
  constructor(props) {
    super(props);

    // Initialize state with chart data
    this.state = chartData;
  }

  render() {
    return (
      <div className="radial-bar-chart">
        <Chart
          options={this.state.options} // Chart configuration
          series={this.state.series}   // Data for the chart
          type="radialBar"             // Chart type
          height={250}                 // Height of the chart
          width={170}                  // Width of the chart
        />
      </div>
    );
  }
}

export default RadialBarChart;
