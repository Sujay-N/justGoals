import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalOutput = (props) => {
	return (
		<TouchableOpacity onPress={()=> props.onDelete(props.id)}>
			<View style={styles.displayGoals}>
				<Text>{props.output}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	displayGoals: { padding: 10, margin: 10, borderWidth: 1, backgroundColor: 'skyblue' }
});

export default GoalOutput;
