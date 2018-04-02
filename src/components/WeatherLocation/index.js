import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './style.css';
//import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';

const location = "London, UK";
const api_key = '1950864f7ff27d459cc2c7c3462b0430';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}=&appid=${api_key}`;




class WeatherLocation extends Component{
	constructor(){
		super();
		this.state = {
			city: 'London',
			data: null
		}
	}


	handleUpdateClick = () => {
		fetch(api_weather).then(data => {
			console.log(api_weather);
			return data.json();
		}).then(weather_data => {

			const data = transformWeather(weather_data);

			this.setState({data: data});
			console.log(weather_data);
		});
	}

	componentWillMount(){
		this.handleUpdateClick();
	}



	render = () => {
		const {city, data} = this.state;
		return (
			<div className="WeatherLocationCont">
				<Location city={city}/>
				{data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7} /> }
			</div>
		);
	}
}


export default WeatherLocation;
