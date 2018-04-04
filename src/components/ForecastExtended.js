import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './style.css';


/*

const days = [
	'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'
];

const data = {
	temperature: 10,
	humidity: 22,
	weatherState: 'normal',
	wind: '10m/s'
};
*/

const api_key = '1950864f7ff27d459cc2c7c3462b0430';
const url = 'http://api.openweathermap.org/data/2.5/weather';

class ForecastExtended extends Component{

	constructor(){
		super();
		this.state = {
			forecastData: null
		}
	}

	componentDidMount(){
			// fetch or axios
			const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

			fetch(url_forecast).then(
				data => (data.json())
			).then(
				weather_data => {
					console.log(weather_data);
					const forecastData = transformForecast(weather_data);
					this.setState({forecastData: forecastData});
				}
			);
	}

	renderForecastItemDays(){
		return <h2>Render Items</h2>;
		//return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
	}

	renderProgress = () => {
		return <h3>Cargando Pronostico Extendido... </h3>;
	}

	render(){
		const {city} = this.props;
		const {forecastData} = this.state;
		return(
			<div>
				<h2 className="forecast-title">Pronostico Extendido para {city}</h2>
				{forecastData ? this.renderForecastItemDays() : this.renderProgress()}
			</div>
		);
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
};

export default ForecastExtended;
