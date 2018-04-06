import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import propTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
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
	handleSelectionLocation = (city) => {
		this.setState({
			city: city
		});
		console.log('handleSelectionLocation --> ' + city);

		this.props.setCity(city);
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
								<LocationList
									cities={cities}
									onSelectedLocation={this.handleSelectionLocation}
									></LocationList>
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

App.propTypes = {
	setCity: propTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
	setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
