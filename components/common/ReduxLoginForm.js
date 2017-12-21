import { Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateValue } from './actions';
import { Card, 
	CardSection, 
	AuthField, 
	Spinner,
	AuthButton 
} from './';

const mapStateToProps = state => {
	const {
		email, 
		password, 
		error, 
		loading,
	} = state.auth;
	return {
		email,
		password,
		error,
		loading,
	};
};

export default connect(mapStateToProps, { updateValue })(class ReduxLoginForm extends Component {

	renderButton() {
		const { loading } = this.props;
		if (loading) {
			return (<Spinner size="large" />);
		}
		else {
			return (<AuthButton />);
		}
	}

	onEmailChange(text) {
		this.props.updateValue('email', text);
	}
	onPasswordChange(text) {
		this.props.updateValue('password', text);
	}
	render() {
		const { email, password, error } = this.props;
		const { onEmailChange, onPasswordChange } = this;
		return (
			<Card>
				<CardSection>
					<AuthField
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={onEmailChange.bind(this)}
						value={email}
					/>
				</CardSection>

				<CardSection>
					<AuthField
						obfuscate
						label="Password"
						placeholder="Password"
						onChangeText={onPasswordChange.bind(this)}
						value={password}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
});

const styles = {
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
};
