import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CardSection} from './CardSection';
import {TagItem} from './TagItem';
import {OptionsModal} from './OptionsModal';

export default class TagInput extends Component {

	//initial setup has it so that tags are fed in via a source array, 
	// which tracks which tags have been selected versus which are already available.
	state = {
		selectedTags: [],
		allTags: this.props.source
	};

	//this renders
	renderTags() {
		return (
			<View>
				{state.selectedTags.map(x => <TagItem source={state.selectedTags}>{x}</TagItem>)}
				<Button onPress={addTag()}>Add Tag</Button>
				<OptionsModal inputArray={buttonArray} visible={this.state.showModal}>Actions</OptionsModal>
			</View>
		);
	}

	moveTag(tag) {
		state.selectedTags.indexOf(tag) == -1 ? this.state.selectedtags.push(tag): this.setState({selectedTags: selectedTags.split(indexOf(tag), 1)});
	}

	highlighted(tag) {
		return state.selectedTags.indexOf(tag) == -1 ? ({backgroundColor: (this.props.selectedColor || blue)}) : ({backgroundColor: (this.props.baseTagColor || lightBlue)});
	}

	addTag() {
		let contents = state.allTags.map(x => state.selectedTags.indexOf(x) == -1 ? <Button>{x}</Button> : void 0);
		let buttons;
		if (this.props.sourceOnly){
			buttons=(
				<View>
					<Button onPress={createTag()}>Add New Tag</Button>
					<Button onPress={this.props.visible=false}>Exit</Button>
				</View>
			);
		}
		return (
			<Modal
				animationType="slide"
	 			onRequestClose={() => {}}
	 			transparent
	 			visible={this.props.visible}
 			>
 				<Card>
 					<CardSection>
 						{modal}
 						<Button onPress={visible=!visible}>Cancel</Button>
 					</CardSection>
 				</Card>
 			</Modal>
		);
	}
	render({label, tags, modalUp}) {
		return (
			<CardSection>
				<Text>{label}</Text>
				<View>{renderTags}</View>
			</CardSection>
		);
	}
}