import React, { Component } from 'react';
import { Text } from 'react-native';
import {Card, CardSection } from './common';

export default class EditItem extends Component {
	render(){
		return (
			<Card>
				<CardSection>
					<Text>EditItem</Text>
				</CardSection>
			</Card>
		)
	}
}