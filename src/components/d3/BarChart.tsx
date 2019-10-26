import React, {Component} from 'react';
import * as d3 from 'd3';

interface BarChartProps {
	width: number,
	height: number
}

export default class BarChart extends Component<BarChartProps, {}> {

	private node?: SVGSVGElement | null;

	componentDidMount() {
		d3.select(this.node!)
			.append("circle")
			.attr("r", 15)
			.attr("cx", this.props.width/2)
			.attr("cy", this.props.height/2)
			.attr("fill", "red");
	}

	render() {

		return (
			<svg ref={node => this.node = node}
			     width={this.props.width}
			     height={this.props.height}
			>
			</svg>
		);
	}
}
