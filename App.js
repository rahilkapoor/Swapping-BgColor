import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./components/Header";
import ChangingScreen from "./components/ChangingScreen";

const App = () => {
	return (
		<View style={styles.home}>
			<Header title="Color Swap" />
			<ChangingScreen />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	home: {
		flex: 1,
	},
});
