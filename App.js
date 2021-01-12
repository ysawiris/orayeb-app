import React, { Component } from "react";

import { StyleSheet, View, Platform } from "react-native";
import TimedSlideshow from "react-native-timed-slideshow";

// import Slideshow from "react-native-slideshow";

export default class App extends Component {
	render() {
		const items = [
			{
				uri: "https://orayeb.herokuapp.com/documents/0205mitsu.jpg",
				title: "Zi Sushi",
				text: "American Plaza",
				fullWidth: false,
			},
			{
				uri:
					"https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1c2hpfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60",
				title: "Mori Sushi",
				text: "Captiol",
				duration: 5000,
				fullWidth: false,
			},
			{
				uri:
					"https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
				title: "Ama Sushi Bar",
				text: "Galleria",
				fullWidth: false,
			},
		];

		return <TimedSlideshow items={items} />;
	}
}

// export default class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			position: 1,
// 			interval: null,
// 			dataSource: [
// 				{
// 					title: "Title 1",
// 					caption: "Caption 1",
// 					url: "http://127.0.0.1:8000/media/documents/0205mitsu.jpg",
// 				},
// 				{
// 					title: "Title 2",
// 					caption: "Caption 2",
// 					url: "http://127.0.0.1:8000/media/documents/0205mitsu.jpg",
// 				},
// 				{
// 					title: "Title 3",
// 					caption: "Caption 3",
// 					url:
// 						"https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeghttp://127.0.0.1:8000/media/documents/0205mitsu.jpg",
// 				},
// 			],
// 		};
// 	}

// 	componentWillMount() {
// 		this.setState({
// 			interval: setInterval(() => {
// 				this.setState({
// 					position:
// 						this.state.position === this.state.dataSource.length
// 							? 0
// 							: this.state.position + 1,
// 				});
// 			}, 5000),
// 		});
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.state.interval);
// 	}

// 	render() {
// 		return (
// 			<View style={styles.MainContainer}>
// 				<Slideshow
// 					dataSource={this.state.dataSource}
// 					position={this.state.position}
// 					onPositionChanged={(position) => this.setState({ position })}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	MainContainer: {
// 		flex: 1,
// 		alignItems: "center",
// 		paddingTop: Platform.OS === "ios" ? 20 : 0,
// 		backgroundColor: "#FFF8E1",
// 	},
// });
