import React, {Component} from 'react';
import {Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { newOrganizer } from '../actions';

export default connect (null, {}) (class HomeScreen extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Button>Button</Button>
				</CardSection>
			</Card>
		);
	}
});