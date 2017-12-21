import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity} from 'react-native';

const Button = ( {onPress, style, children} ) => {
	const {buttonStyle, textStyle} = styles;
	return (
		<TouchableOpacity onPress = {onPress} style={[buttonStyle, style]}>
			<Text style = {textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		color: '#007aff',
		fontSize: 16,
		fontWeight:'600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf:'stretch',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}

export { Button };