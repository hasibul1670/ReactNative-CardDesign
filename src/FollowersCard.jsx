import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FollowersCard = ({ userData }) => {
  const cardItems = [
    { label: "Repos", value: userData.repos },
    { label: "Followers", value: userData.followers },
    { label: "Following", value: userData.following },
  ];

  return (
    <View style={styles.followerCardCss}>
      {cardItems.map((item, index) => (
        <View key={index} style={styles.cardItem}>
          <Text style={{ marginTop: 10, color: "gray", fontWeight: "normal" }}>
            {item.label}
          </Text>
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  followerCardCss: {
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  cardItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default FollowersCard;
