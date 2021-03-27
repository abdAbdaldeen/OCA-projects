import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Cards() {
	const [category, setCategory] = useState([
		{
			name: "Sarah",
			uri:
				"https://i.pinimg.com/originals/a7/6a/63/a76a632342f71a6aab4c11479d640382.jpg",

			id: "1",
		},
		{
			name: "Abdel Rahman",
			uri:
				"https://img.republicworld.com/republic-prod/stories/images/161226750960193ff5ce474.jfif",
			id: "2",
		},
		{
			name: "Hala",
			uri:
				"https://recenthighlights.com/wp-content/uploads/2021/03/Attack-on-Titan-Season-4-Episode-15-1024x576.jpg",
			id: "3",
		},
		{
			name: "Abdallah",
			uri:
				"https://i.pinimg.com/originals/37/84/2c/37842cff1334da4541f53ec8c2ecf1b9.jpg",
			id: "4",
		},
		{
			name: "Osama",
			uri:
				"https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/08/Levi-Ackerman-Facts-Cover-Image-1.jpg?q=50&fit=crop&w=960&h=500",
			id: "5",
		},
		{
			name: "Osama",
			uri:
				"https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/08/Levi-Ackerman-Facts-Cover-Image-1.jpg?q=50&fit=crop&w=960&h=500",
			id: "6",
		},
		{
			name: "Osama",
			uri:
				"https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/08/Levi-Ackerman-Facts-Cover-Image-1.jpg?q=50&fit=crop&w=960&h=500",
			id: "7",
		},
		{
			name: "Osama",
			uri:
				"https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/08/Levi-Ackerman-Facts-Cover-Image-1.jpg?q=50&fit=crop&w=960&h=500",
			id: "8",
		},
	]);

	return (
		<FlatList
			numColumns={2}
			keyExtractor={(item) => item.id}
			data={category}
			renderItem={({ item }) => (
				<View style={styles.container}>
					<TouchableOpacity>
						<Card style={styles.wraper}>
							<Card.Cover style={styles.cards} source={{ uri: item.uri }} />
							<Paragraph style={styles.title}>{item.name}</Paragraph>
						</Card>
					</TouchableOpacity>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	wraper: {
		borderRadius: 7,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: 8,
		padding: 0,
	},
	cards: {
		width: 175,
		height: 200,
	},
	title: {
		textAlign: "center",
		backgroundColor: "rgb(250, 250, 250)",
		backgroundColor: "rgba(250, 250, 250, 0.7)",
		marginTop: -33.2,
		paddingVertical: 6.4,
		margin: 0,
	},
});
