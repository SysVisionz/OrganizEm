//Import libraries
import React from 'react';
import {Text, View} from 'react-native';
//Make component

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style = {viewStyle}>
		<Text style = {textStyle}>{props.headerText}</Text>
	</View>);
};

const styles = {
	viewStyle: {
		paddingTop: 20,
		backgroundColor: '#995544',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	textStyle: {
		fontSize: 40,
		textAlign: 'center'
	}
};

//Make available

export { Header };