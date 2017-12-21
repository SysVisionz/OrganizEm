import React, {Component} from 'react';
import {Spinner} from './Spinner';

export default class LoadingPage extends Component{
	componentDidMount(){
		if (this.props[toCheck]){
			this.props[action];
		}
	}
	render(){
		return <Spinner size="large" />;
	}
}