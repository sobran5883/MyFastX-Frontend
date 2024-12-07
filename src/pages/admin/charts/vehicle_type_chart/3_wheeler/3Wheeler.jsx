// RadialBarChart.js
import { Component } from "react";
import Chart from "react-apexcharts";
import chartData from "./3WheelerData";

class RadialBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = chartData;
  }

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    const { options, series } = this.state;
    const chart = new ApexCharts(document.querySelector("#radial-bar-chart"), options);
    chart.render();
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
