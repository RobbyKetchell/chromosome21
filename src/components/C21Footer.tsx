import React, {Component} from 'react';


export default class C21Footer extends Component<{}, {}> {

	render() {
		const C21FooterStyle: object = {
			width: "100%",
			padding: "25px",
			backgroundColor: "rgba(0, 0, 0, 0.05)",
			position: "fixed",
			bottom: "0",
			textAlign: "center",
			fontSize: "85%"
		};

		return(
			<div style={C21FooterStyle}>
				To make the world a better place, you must explore and share your discoveries with everyone <br />
				To all the homies with extra chromies &#128170;&#128170;&#128170;
			</div>
		);
	}
}
