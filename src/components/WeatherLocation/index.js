import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';
import './style.css';

const data = {
	temperature: 18,
	weatherState: SUN,
	humidity: 65,
	wind: '10 m/s'
};

const WeatherLocation = () => (
	<div className="WeatherLocationCont">
		<Location city={'New Your, US'}/>
		<WeatherData data={data}/>
	</div>
);

export default WeatherLocation;
