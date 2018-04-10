import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Scale from '../components/Scale';

class ScaleScreen extends Component {
	render() {
		
		return (
			<Scale />
		)
	}
}

ScaleScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.title
});

export default ScaleScreen