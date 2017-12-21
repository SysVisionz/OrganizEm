import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { CardSection, AuthField } from './common';

const styles = {
	ButtonStyle
}

export default connect (mapStateToProps, {} (class AuthScreen extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<AuthField
						obfuscate
						label="Username"
						onChangeTest={onUsernameChange.bind.this}
						value={username}
					/>
					<Button
						title="Login"
					/>
				</CardSection>
			</View>
		);
	}
});