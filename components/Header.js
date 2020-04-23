import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#333",
		paddingTop: 20,
		paddingVertical: 12,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 32
	}
});

export default Header;
