import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './style.css';
//import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';

//const city = "London, UK";
const api_key = '1950864f7ff27d459cc2c7c3462b0430';
const url = 'http://api.openweathermap.org/data/2.5/weather';




class WeatherLocation extends Component{
	constructor({city}){
		super();
		this.state = {
			city: city,
			data: null
		}
	}

	componentWillMount(){
		const {city} = this.state;
		const api_weather = `${url}?q=${city}&appid=${api_key}`;
		fetch(api_weather).then(data => {
			return data.json();
		}).then(weather_data => {
			const data = transformWeather(weather_data);
			this.setState({data: data});
		});
	}



	render = () => {
		const { onWeatherLocationClick } = this.props;
		const {city, data} = this.state;
		return (
			<div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city={city}/>
				{data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7} /> }
			</div>
		);
	}
}

WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;
