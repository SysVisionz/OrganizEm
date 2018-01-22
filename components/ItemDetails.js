import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, OptionsModal, Button } from './common';
import { fetchItem } from '../actions';


const mapStateToProps = state => {
	const {
		id,
		name,
		description,
		quantity,
		picture
	} = state.organizer;
	return {id, name, description, quantity, picture};
}

const styles = {
	headerStyle: {
		fontSize : 'xx-large',
		fontWeight : 'bold',
		bottomBorder : '5px solid'
	}
}

export default connect(mapStateToProps, {}) (class ItemDetails extends Component {

	pullItem () {

	}

	moveItem () {

	}

	addItem () {

	}

	changeQuantity () {

	}

	deleteItem () {

	}

	render(props){
		const {name, description, quantity, picture} = this.props; 
		return (
			<Card>
				<CardSection>
					<Text style = {styles.headerStyle}>{name}</Text>
					<Text>{description ? 'Description:' + description : void 0}</Text>
				</CardSection>
				<CardSection>
					<Button onPress = {pullItem}>Pull</Button>
					<Button onPress = {addQuantity}>Add</Button>
					<Button onPress = {moveItem}>Move</Button>
					<Button onPress = {changeQuantity}></Button>
					<Button onPress = {deleteItem}>x</Button>
				</CardSection>
				<OptionsModal
					inputArray={[{type: 'text', label: 'New Quantity: ', value: this.props.quantity}, {type: 'button', label: 'Enter', onPress: addItem(quantity)}]}
					visible={this.props.isVisible}
				>Input Desired Quantity</OptionsModal>
			</Card>
		)
	}
});