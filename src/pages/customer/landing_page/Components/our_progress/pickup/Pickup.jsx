// RadialBarChart.js
import React, { Component } from "react";
import Chart from "react-apexcharts";
import PickupData from "./PickupData";

class Pickup extends Component {
  constructor(props) {
    super(props);

    // Initialize state with PickupData
    this.state = PickupData;
  }

  render() {
    return (
      <div className="radial-bar-chart">
        <Chart
          options={this.state.options} // Chart options
          series={this.state.series}   // Data series
          type="radialBar"            // Chart type
          height={200}                // Chart height
          width={130}                 // Chart width
        />
      </div>
    );
  }
}

export default Pickup;
