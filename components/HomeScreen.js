import React, { Component } from 'react';
import { Text, Picker, Button } from 'react-native';
import {Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeSelection, addDimension, deleteEntry, undo } from '../actions';
import SearchBox from './SearchBox';
import DimensionsBox from './DimensionsBox';
import ItemsList from './ItemsList'; 	
import { Card, CardSection } from './common';

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state) => {
	const { contents, dimensionSelection } = state.organizer;
	return { contents, dimensionSelection };
}

export default connect (mapStateToProps, {}) (class HomeScreen extends Component {
	render() {
		const {name, description, tags, dimensions} = this.props.contents;
		return (
			<Card>
				<CardSection>
					<Text>{this.props.contents.name}</Text>
				</CardSection>
			</Card>
		);
	}
});