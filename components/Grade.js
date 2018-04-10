import React, { Component } from 'react';
import {StyleSheet, FlatList, View } from 'react-native';
import GradeItem from './GradeItem';


class Grade extends Component {
	constructor(props) {
	super(props);
	this.renderItem = this.renderItem.bind(this);

	}

	keyExtractor(item, index) {
		return index;
	}

	renderItem({item}) {
		const navigate = () => {
			this.props.navigateToNotes(item);
		};
		return <GradeItem item={item} onPressItem={navigate} />
	}

	renderSeparator() {
		const style = { height: 1, backgroundColor: '#777' };
    	return <View style={style} />;
  }
	

	render() {
	    const { items } = this.props;
	    return (
	      <FlatList
	       data={items}
	       renderItem={this.renderItem}
	       keyExtractor={this.keyExtractor}
	       ItemSeparatorComponent={this.renderSeparator} />
	    );
  }
}
export default Grade