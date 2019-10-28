import React, {Component} from 'react';
import '../styles/Length.css';
import BarChart from "./d3/BarChart";

export default class C21Length extends Component {

	render() {
		return (
			<div>
				<BarChart width={50} dataRef={"chromosome-lengths.csv"}/>
			</div>
		);
	}
}
