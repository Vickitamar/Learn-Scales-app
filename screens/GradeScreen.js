import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import information from '../information.json';
import Grade from '../components/Grade';

class GradeScreen extends Component {
	constructor(props) {
		super(props);
		this.navigateToNotes = this.navigateToNotes.bind(this);

	}

	navigateToNotes(item) {
		this.props.navigation.navigate('Notes', {
			item: item
		})
	}






	render() {
		return (
			<Grade items={information} navigateToNotes={this.navigateToNotes} />
		)
	}
}

export default GradeScreen