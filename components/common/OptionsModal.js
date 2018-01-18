import React from 'react';
import {Text, View, Modal, Picker} from 'react-native';
import {CardSection} from './CardSection';
import Card from './Card';
import {Button} from './Button';
import InputField from './InputField';
import TagInput from './TagInput';

const OptionsModal = ({ children, inputArray, visible, style, textStyle}) => {

	const buttons = inputArray.map((x, index) => {
		switch(x.type) {
			case 'button':
				return (
					<Button 
						key={'button'.concat(index)} 
						onPress={x.onPress}>
						{x.label}
					</Button>
				);
			case 'text':
				return (
					<InputField 
						key={'text'.concat(index)} 
						label={x.label} 
						value={x.value} 
						onChangeText={x.onChangeText} 
						placeHolder={x.placeHolder}
						style={x.inputStyle}
					/> 
				);
			case 'tag':
				return (
					<TagInput
						key={'tag'.concat(index)}
						label={x.children}
						sourceOnly={x.sourceOnly}
						source={x.source}
					/>
				)
			case 'picker':
				return (
					<Picker
						key={'dropdown'.concat(index)}
						label={x.label}
						source={x.source}
					/>
				);
			default:
				return 'Invalid input type';
		}
	});

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
	 			<CardSection style={[styles.buttonSectionStyle, style]}>
	 				{buttons}
	 			</CardSection>
	 		</View>
	 	</Modal>
	);
}

const styles = {
	cardSectionStyle: {
		justifyContent:'center'
	},
	buttonSectionStyle: {
		justifyContent: 'center',
		flexDirection: 'column'
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

export { OptionsModal };