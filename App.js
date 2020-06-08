import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalOutput from './components/GoalOutput';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ lockdownGoals, setLockdownGoals ] = useState([]);

	const [ isAddMode, setIsAddMode ] = useState(false);

	const addGoal = (userDataInput) => {
		setLockdownGoals((currentGoal) => [ ...currentGoal, { id: Math.random().toString(), val: userDataInput } ]);

		setIsAddMode(false);
	};

	const delGoal = (id) => {
		return setLockdownGoals((currentGoal) => {
			return currentGoal.filter((goal) => goal.id !== id);
		});
	};

	const cancelGoalAddMode = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button
			 title="Add New Goal" 
			 onPress={() => setIsAddMode(true)} />
			 
			<GoalInput 
			visible={isAddMode} 
			onAdd={addGoal} 
			onCancel={cancelGoalAddMode} />

			<FlatList
				data={lockdownGoals}
				keyExtractor={(item, index) => item.id}
				renderItem={(itemData) => (
					<GoalOutput id={itemData.item.id} onDelete={delGoal} output={itemData.item.val} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: { padding: 30 }
});
