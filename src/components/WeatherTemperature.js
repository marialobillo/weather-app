import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = weatherState => {
	switch(weatherState){
		case "cloud":
			return (<WeatherIcons name="cloud" size="2x" />);
			break;
		default:
			return (<WeatherIcons name="sleet" size="2x" />);
			break;
	}
};

const WeatherTemperature = ({temperature, weatherState}) => (
	<div>
		{getWeatherIcon(weatherState)}
		<span>{`${temperature} Cº`}</span></div>
);

export default WeatherTemperature;
