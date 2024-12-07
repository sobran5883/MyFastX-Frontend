// RadialBarChart.js
import { Component } from "react";
import Chart from "react-apexcharts";
import PickupData from "./PickupData";

class Pickup extends Component {
  constructor(props) {
    super(props);

    this.state = PickupData;
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
          height={200}
          width={130}
        />
      </div>
      </div>
    );
  }
}

export default Pickup;