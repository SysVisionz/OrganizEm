import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export default class SelectedItem extends Component {
	render(){
		return (
			<Card>
				<CardSection>
					<Text>SelectedItem</Text>
				</CardSection>
			</Card>
		)
	}
}