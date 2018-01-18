import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, OptionsModal, Button } from './common';
import { fetchItem } from '../actions';

const mapStateToProps = state => {
	const {
		id,
		name,
		description,
		quantity,
		picture
	}
}

const styles = {
	headerStyle: {
		fontSize = 'xx-large',
		fontWeight = 'bold',
		bottomBorder = '5px solid'
	}
}

export default connect(mapStateToProps, {}) (class ItemDetails extends Component {



	render(props){
		const {details, }
		return (
			<Card>
				<CardSection>
					<Text style = {styles.headerStyle}>{name}</Text>
					<Text>{description ? 'Description:' + description : void 0}</Text>
				</CardSection>
				<CardSection>
					<Button onPress = {pullItem}>Pull</Button>
					<Button onPress = {moveItem}>Move</Button>
					<Button onPress = {addItem(1)}>+1</Button>
					<Button onPress = {addItem(-1)}>-1</Button>
					<Button onPress = {changeQuantity}>Edit #</Button>
					<Button onPress = {deleteItem}>x</Button>
				</CardSection>
				<OptionsModal
					inputArray={[{type: 'text', label: 'New Quantity: ', value=this.props.quantity}]}
				>Input Desired Quantity</OptionsModal>
			</Card>
		)
	}
});