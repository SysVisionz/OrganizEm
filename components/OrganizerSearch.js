import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import firebase from 'firebase';
import { InputField, Card, CardSection, ExpandList } from './common';
import { updateProp, searchOrganizers, fetchOrganizers } from  '../actions';


const mapStateToProps = state => {
	const {
		text,
		dimensions,
		tags,
		organizers,
		organizerList
	} = state.search;
	return {
		text,
		dimensions,
		tags,
		organizers,
		organizerList
	}
}

export default connect ( mapStateToProps, { updateProp, searchOrganizers, fetchOrganizers } ) (class OrganizerSearch extends Component {

	componentWillMount() {
//		this.props.fetchOrganizers();
	}

	onTextChanged(value) {
		const { searchOrganizers, updateProp, text, dimensions, tags, organizers } = this.props
		updateProp('text', value);
		searchOrganizers(text, dimensions, tags, organizers);
	}

	onDimensionsChange(value) {
		const { searchOrganizers, updateProp, text, dimensions, tags, organizers } = this.props
		updateProp('dimensions', value);
		searchOrganizers(text, dimensions, tags, organizers);
	}

	onTagsChange(value) {
		const { searchOrganizers, updateProp, text, dimensions, tags, organizers } = this.props
		updateProp('tags', value);
		searchOrganizers(text, dimensions, tags, organizers);
	}

	render() {
		const { tags, dimensions, text, organizerList, updateProp } = this.props;
		return (
			<Card>
				<CardSection>
					<InputField
						label="Title:"
						placeholder="Organizer Title"
						onChangeText={this.onTextChanged.bind(this)}
						value = {text}
					/>
				</CardSection>
				<CardSection>
					<Text>Dimensions:</Text>
					<Picker 
						style={{flex:1}}
						mode="dropdown"
						selectedValue={this.props.dimensions}
						onValueChange={value => updateProp('dimensions', value)}
					>
						<Picker.Item label="Any" value="0" />
						<Picker.Item label="1" value="1" />
						<Picker.Item label="2" value="2" />
						<Picker.Item label="3" value="3" />
					</Picker>
				</CardSection>
				<CardSection>
				</CardSection>
			</Card>
		);
	}
})