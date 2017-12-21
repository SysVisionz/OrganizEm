import React, { Component } from 'react';
import { Text } from 'react-native';
import {Card, CardSection } from './common';

export default class ItemsList extends Component {
	render(){
		return (
			<Card>
				<CardSection>
					<Text>ItemsList</Text>
				</CardSection>
			</Card>
		)
	}
}