import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity} from 'react-native';

const Button = ( {onPress, buttonStyle, textStyle, children} ) => {
	const {thisButtonStyle, thisTextStyle} = styles;
	return (
		<TouchableOpacity onPress = {onPress} style={[thisButtonStyle, buttonStyle]}>
			<Text style = {[thisTextStyle, textStyle]}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	thisTextStyle: {
		color: '#007aff',
		fontSize: 16,
		fontWeight:'600',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5
	},
	thisButtonStyle: {
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