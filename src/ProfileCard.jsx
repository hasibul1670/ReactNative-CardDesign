import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FollowersCard from "./FollowersCard";
import AddressCard from "./AddressCard";

const ProfileCard = () => {
  const userData = {
    name: "The Octocat",
    designation: "aoctocat",
    joiningDate: "Joined 25 Jan 2011",
    profileImage: require("../assets/cat.jpg"),
    text: "Velit labore dolor minim nisi in velit irure. Laboris ex duis ipsum non non labore sit culpa veniam.et exercitation enim velit ea ipsum.",
    repos: "8",
    followers: "3938",
    following: "9",
    address: "San Francisco",
    github: "https://github.blog",
    twitter: "Not Available",
    agihub: "agihub",
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameSectionCss}>
        <View>
          <Image style={styles.imageCss} source={userData.profileImage} />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
            {userData.name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#5B9BFF",
              marginBottom: 5,
            }}
          >
            {userData.designation}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
              fontWeight: "semibold",
              marginBottom: 5,
            }}
          >
            {userData.joiningDate}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          fontWeight: "normal",
          color: "gray",
          padding: 3,
          marginBottom: 5,
          textAlign: "justify",
        }}
      >
        {userData.text}
      </Text>

      <FollowersCard userData={userData} />
      <AddressCard userData={userData} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameSectionCss: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageCss: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 50,
  },
  cardStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    
  },

  container: {
    alignItems: "center",
    width: 400,
    height: 650,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderWidth: 2,
    borderColor: "gray",
    padding: 5,
    borderRadius: 25,
  },
});

export default ProfileCard;
