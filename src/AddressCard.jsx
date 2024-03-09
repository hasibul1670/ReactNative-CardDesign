import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome6";
const addressICon = <EntypoIcon name="location-pin" size={30} color="gray" />;
const githubIcon = <EntypoIcon name="link" size={30} color="gray" />;
const twitterIcon = <EntypoIcon name="twitter" size={30} color="gray" />;
const agihubIcon = <Icon name="building-wheat" size={30} color="gray" />;

const AddressCard = ({ userData }) => {
  const cardItems = [
    { icon: addressICon, value: userData.address },
    { icon: twitterIcon, value: userData.twitter },
    { icon: githubIcon, value: userData.github },
    { icon: agihubIcon, value: userData.agihub },
  ];

  return (
    <View style={[styles.followerCardCss]}>
      {cardItems.map((item, index) => (
        <View key={index} style={styles.cardItem}>
          <Text style={{ marginRight: 10 }}>{item.icon}</Text>
          <Text style={{ marginTop: 1, fontWeight: "bold" }}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  followerCardCss: {
    flexDirection: "column",
    width: 350,
    backgroundColor: "transparent",
    padding: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  cardItem: {
    padding: 2,
    flexDirection: "row",
    cursor: "pointer",
  },
});
export default AddressCard;
