import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
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
const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity = value => ({ type: 'setCity', value });

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

		store.dispatch(setCity(city));
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

export default App;
