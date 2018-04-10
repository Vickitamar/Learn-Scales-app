import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import information from '../information.json';
import Note from '../components/Note';

class NoteScreen extends Component {
	constructor(props) {
		super(props);
		this.navigateToScales = this.navigateToScales.bind(this);

	}

	navigateToScales(item) {
		this.props.navigation.navigate('Scales', {
			item: item
		})
	}






	render() {

		const {item} = this.props.navigation.state.params
		return (
			<Note items={item.notes} navigateToScales={this.navigateToScales} />
		)
	}
}

NoteScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.title
});

export default NoteScreen