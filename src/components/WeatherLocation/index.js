import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';
import './style.css';

const data1 = {
	temperature: 18,
	weatherState: SUN,
	humidity: 65,
	wind: '10 m/s'
};

const data2 = {
	temperature: 33,
	weatherState: WINDY,
	humidity: 45,
	wind: '45 m/s'
};


class WeatherLocation extends Component{
	constructor(){
		super();
		this.state = {
			city: 'Buenos Aires',
			data: data1
		}
	}

	handleUpdateClick = () => {
		this.setState( {
			city: 'London',
			data: data2
		});
	}

	render = () => {
		const {city, data} = this.state;
		return (
			<div className="WeatherLocationCont">
				<Location city={city}/>
				<WeatherData data={data}/>
				<button onClick={this.handleUpdateClick}>Update</button>
			</div>
		);
	}
}


export default WeatherLocation;
