import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeSelection, pullItem, undo } from '../actions';
import SearchBox from './SearchBox';
import DimensionsBox from './DimensionsBox';
import ItemsList from './ItemsList'; 	
import { Card, CardSection, Button, OptionsModal, InputField } from './common';

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state) => {
	const { 
		contents, 
		dimensionSelection, 
		pulled 
	} = state.organizer;
	const { 
		visible,
	} = state.search;
	return { contents, dimensionSelection, pulled, visible };
}


export default connect (mapStateToProps, {}) (class HomeScreen extends Component {
	
	state={showModal: false};

	dimensionSelect = () => {
		const {dimensions, dimensionSelection} = this.props.contents
		switch (dimensions.length){
			case 1:
				return dimensions[dimensionSelection[0]];
			case 2:
				return dimensions[dimensionSelection[0]][dimensionSelection[1]];
			case 3:
				return dimensions[dimensionSelection[0]][dimensionSelection[1]][dimensionSelection[2]];
		}
	}

	render() {
		const {name, description, tags, dimensions} = this.props.contents;
		const editOrganizer = () => {
			this.setState({showModal: !this.state.showModal});
			Actions.editOrganizer();
		}
		const organizerSearch = () => {
			this.setState({showModal: !this.state.showModal});
			Actions.organizerSearch();
		}
		const newOrganizer = () => {
			this.setState({showModal: !this.state.showModal});
			Actions.newOrganizer();
		}

		const buttonArray = [
			{
				label: "Edit Organizer Details",
				onPress: editOrganizer,
				type: 'button'
			},
			{
				label: "Select Organizer",
				onPress: organizerSearch,
				type: 'button'
			},
			{
				label: "Create New Organizer",
				onPress: newOrganizer,
				type: 'button'
			},
		];
		return (
			<Card>
				<CardSection>
					<Text style={{fontSize:18, fontWeight:'700', paddingTop: 5, paddingLeft: 10}}>Organizer Name</Text>
					<Button onPress={() => this.setState({showModal: !this.state.showModal })}>
					...
					</Button>
				</CardSection>
				<CardSection>
					<Text>Only show dimensions containing:</Text>
					<InputField
						placeholder="Item"
						label="Item Name"
					/>
					<TagInput
						label="Item Tags"
						source={tags}
					/>
				</CardSection>
				<CardSection>
					<ItemsList contents={dimensionSelect()} />
				</CardSection>
				<OptionsModal inputArray={buttonArray} visible={this.state.showModal}>Actions</OptionsModal>
			</Card>
		);
	}
});