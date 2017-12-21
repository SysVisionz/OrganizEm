import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export default class SearchBox extends Component {
	render(){
		return (
			<Card>
				<CardSection>
					<Text>SearchBox</Text>
				</CardSection>
			</Card>
		)
	}
}