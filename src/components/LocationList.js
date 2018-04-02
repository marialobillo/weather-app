import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
		<div>
			<WeatherLocation city={'Buenos Aires, ar'}/>
			<WeatherLocation city={'London, uk'}/>
			<WeatherLocation city={'Seville, es'}/>

		</div>
);

export default LocationList;
