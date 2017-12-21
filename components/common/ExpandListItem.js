import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class ExpandListItem extends Component{
	componentWillMount() {
		this.props.expanded = false;
	}

	componentWillUpdate() {
	UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	renderDescription(details){
		const {expanded} = this.props;
		if (expanded){
			return (details.map(x => {
				<View>
					<Text style={this.props.labelStyle}>{label}:</Text>
					<Text style={this.props.itemStyle}>{text}</Text>
				</View>
			}));
		}
	}

	render(props) {
		const {label, details} = props;
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.expanded = !this.props.expanded}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{label}</Text>
					</CardSection>
					{this.renderDescription(details)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}