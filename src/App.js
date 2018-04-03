import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
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

	handleSelectionLocation = (city) => {
		console.log('handleSelectionLocation --> ' + city);
	}
	render() {
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
								<LocationList
									cities={cities}
									onSelectedLocation={this.handleSelectionLocation}
									></LocationList>
							</Col>
							<Col xs={12} md={6}>

									<Paper>
										<div className="details">
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
