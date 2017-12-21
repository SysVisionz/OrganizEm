import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { fetchOrganizer } from '../actions';
import Dimension from './Dimension';

const mapStateToProps = state => {
	const { contents, dimensionSelection } = state.organizer;
	return { contents, dimensionSelection };
}

export default connect (mapStateToProps, { fetchOrganizer }) (class DimensionsBox extends Component {
	
	makePickers() {
		const { contents } = this.props;
		if (contents[0]) {
			return (this.props.contents.map(x => <Dimension 
				key={ 'dimension'.concat( count ) } 
				entries={dimension} 
			/>));
		}
	}

	render(){
		return (
			<Card>
				<CardSection style={{flex:1, flexDirection: column}}>
					{makePickers}
				</CardSection>
			</Card>
		)
	}
})