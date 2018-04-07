import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import './App.css';

const cities = [
	'Madrid, Spain',
	'London, UK',
	'Oslo, Norway',
	'New York, US',
	'Los Angeles, US',
	'Santiago, Chile'
];


class App extends Component {
	constructor(){
		super();
		this.state = {
			city: null
		};
	}
	render() {
		const {city} = this.state;
		return (
			<MuiThemeProvider>
				<Grid>
						<Row>
							<Col xs={12}>
								<AppBar title="Weather App" />
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={6} >
								<LocationListContainer
									cities={cities}
									></LocationListContainer>
							</Col>
							<Col xs={12} md={6}>
									<Paper>
										<div className="details">
											{city &&
												<ForecastExtended city={city}></ForecastExtended>
											}
										</div>
									</Paper>
							</Col>
						 </Row>
				</Grid>
		</MuiThemeProvider>
		);
	}
}


export default App;
