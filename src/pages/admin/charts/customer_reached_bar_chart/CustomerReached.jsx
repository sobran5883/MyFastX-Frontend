// BarChart.js
import { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./CustomerReachedData";

class BarChart extends Component {
  constructor(props) {
    super(props);

    // Initialize state with imported chart data
    this.state = chartData;
  }

  render() {
    return (
      <div className="bar-chart">
        <Chart
          options={this.state.options} // Chart configuration options
          series={this.state.series}   // Data series for the chart
          type="bar"                   // Chart type
          width={400}                // Width of the chart
          height={300}             // Height of the chart
        />
      </div>
    );
  }
}

export default BarChart;
