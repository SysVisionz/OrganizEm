import React, {Component} from 'react';
import { View } from 'react-native';
import {CardSection, Button, InputField } from './common';
import { connect } from 'react-redux';
import { newOrganizer } from '../actions';

export default connect (null, {}) (class HomeScreen extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<InputField 
						label="Organizer: "
						placeholder="Organizer Name"

				</CardSection>
				<CardSection>
					<InputField
						label="Description: "
						placeholder="Organizer Description"
					
			</View>
		);
	}
});