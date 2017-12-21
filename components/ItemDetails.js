import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export default class ItemDetails extends Component {
	render(){
		return (
			<Card>
				<CardSection>
					<Text>ItemDetails</Text>
				</CardSection>
			</Card>
		)
	}
}