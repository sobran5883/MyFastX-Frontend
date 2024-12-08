// RadialBarChart.js
import { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./EicherData";

class RadialBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartData;
  }

  render() {
    return (<div>
      <div className="radial-bar-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={160}
          width={160}
        />
      </div>
      </div>
    );
  }
}

export default RadialBarChart;
