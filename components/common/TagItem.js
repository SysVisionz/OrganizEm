import React from 'react';
import {TouchableWithoutFeedback, Text } from 'react-native';
import {CardSection } from './CardSection';
import {Button} from './Button';

const TagItem = ({source}) => {
	return (
		<CardSection>
			<Text>{props.children.concat(' ')}</Text>
			<TouchableWithoutFeedback onPress={source.splice(source.indexOf(props.children),1)}>
				<Button>x</Button>
			</TouchableWithoutFeedback>
		</CardSection>
	);
}