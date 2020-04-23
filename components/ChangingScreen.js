import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ChangingScreen extends Component {
	state = {
		buttonenabled: true,
	};

	render() {
		const buttoncolor = this.state.buttonenabled ? "orange" : "#4caf50";

		return (
			<View style={[styles.home, { backgroundColor: buttoncolor }]}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						this.setState({ buttonenabled: !this.state.buttonenabled })
					}
				>
					<Text style={[styles.text, { color: buttoncolor }]}>Swap</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default ChangingScreen;

const styles = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	button: {
		width: "40%",
		marginTop: 200,
		backgroundColor: "#333",
		borderRadius: 40,
		height: 65,
		justifyContent: "space-around",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
