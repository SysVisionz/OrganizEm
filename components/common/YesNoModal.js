import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import Card from './Card';
import {Button} from './Button';

const YesNoModal = ({ children, yesLabel, noLabel, onYes, onNo, visible, style, textStyle}) => {

	const buttons = buttonArray.map((x, index) => (<Button key={'button'.concat(index)} onPress={x.onPress}>{x.label}</Button>));
	yesLabel=yesLabel || 'Yes';
	noLabel=noLabel || 'No';
	children=children || 'Are you sure?';
	
	return (
	 	<Modal
	 	animationType="slide"
	 	onRequestClose={() => {}}
	 	transparent
	 	visible={visible}>
	 		<View style={styles.containerStyle}>
	 			<CardSection style={[styles.cardSectionStyle, style]}>
	 				<Text style={[styles.textStyle, textStyle]} >{children}</Text>
	 			</CardSection>
	 			<CardSection style={[styles.cardSectionStyle, style]}>
	 			<Button onPress={onYes}>{yesLabel}</Button>
	 			<Button onPress={onNo}>{noLabel}</Button>
	 			</CardSection>
	 		</View>
	 	</Modal>
	);
}

const styles = {
	cardSectionStyle: {
		justifyContent:'center'
	},
	textStyle: {
		flex:1,
		fontSize:18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent:'center'
	}
};

export { YesNoModal };