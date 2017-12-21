import React, { Component } from 'react';
import {ListView} from 'react-native';
import ExpandListItem from './ExpandListItem';
import Card from './Card';
import CardSection from './CardSection';

export default class ExpandList extends Component {
	componentWillMount(props) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.library);
	}

	renderRow(library) {
		return (<ExpandListItem library={library} />);
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}