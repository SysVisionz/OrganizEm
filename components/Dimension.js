import React, { Component } from 'react';
import { Text, Alert, Button, Picker } from 'react-native';
import { Card, CardSection } from './common';

export default class Dimension extends Component {

	makeDimension(dimension) {
		return dimension.map( x => <Picker.Item label={x.label} value={x.id} />);
	};

	render(props) {
		return (
			<Card>
				<CardSection style={style.mainStyle}>
					{makeDimension(props.dimension)}
				</CardSection>
			</Card>
		);
	}
}

const style = {
	mainStyle: {
		flex: 1,
		flexDirection: "column"
	}
}