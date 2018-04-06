import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../component/LocationList';

class LocationListContainer extends Component{
	render(){
		return (
			<div>
				<LocationList cities={cities}
					onSelectedLocation={this.handleSelectionLocation}></LocationList>
			</div>
		);
	}
}

LocationListContainer.propTypes = {
	setCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	setCity: value => dispatch(setCity(value));
});

export default connect(null, mapLocationListContainer)(LocationListContainer);
