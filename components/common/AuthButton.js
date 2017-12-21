import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { loginUser, updateValue } from './actions';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { Button } from './';

const mapStateToProps = state => {
	const {
		email, 
		password, 
		persist,
	} = state.auth;
	return {
		email: email,
		password: password,
		persist: persist,
	};
};

export default connect( mapStateToProps, { updateValue, loginUser })( class AuthButton extends Component {
	onPersistChanged()
	{
		const { updateValue, persist } = this.props;
		updateValue ( 'persist', !persist );
	}

	onButtonPress(){
		const { email, password, loginUser, persist} = this.props;
		loginUser(email, password, persist);
	}

	render() {
		const { persist } = this.props;
		const {onButtonPress, onPersistChanged } = this;
		return (
			<View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
				<Button onPress={onButtonPress.bind(this)} style={{ height:'auto'}}>
					Login
				</Button>
				<CheckBox
					label="Keep Me Logged In" 
					checked={ persist }
					onChange={ onPersistChanged.bind(this) }
					style={ {alignSelf: 'center'} }
				/>
			</View>
		);
	}
});

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}