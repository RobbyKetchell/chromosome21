import React, {Component} from 'react';
import '../styles/Length.css';
import BarChart from "./d3/BarChart";

export default class Length extends Component {

	render() {
		return(
			<div>
				<BarChart width={500} height={500} />
			</div>
		);
	}
}
