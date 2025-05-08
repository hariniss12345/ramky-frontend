import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../ReusableComponents/Header";
import Footer from "../ReusableComponents/Footer";
import { commonStyles } from "../Global/commonStyles";

export function Referrals({ navigation }) {
  const [activeTab, setActiveTab] = useState("");

  const data = [
    {
      img: require("../../assets/icons/person1.png"),
      name: "Mohan Kumar",
      property: { label: "Property", value: "Ramky One North" },
      email: { label: "Email", value: "mohankumar@gmail.com" },
      phone: { label: "Phone", value: "9876543210" },
      status: "Accepted",
    },
    {
      img: require("../../assets/icons/person1.png"),
      name: "Kavitha P",
      property: { label: "Property", value: "Ramky One North" },
      email: { label: "Email", value: "kavithaPr@gmail.com" },
      phone: { label: "Phone", value: "9876802210" },
      status: "Pending",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />
        <Text style={styles.title}>Referrals</Text>

        <View style={styles.card}>
          <View style={styles.monthHeader}>
            <Image
              source={require("../../assets/icons/Shape.png")}
              style={styles.shapeIcon}
            />
            <Text style={styles.monthText}>This Month</Text>
          </View>

          {data.map((item, index) => (
            <View style={styles.referralCard} key={index}>
              <Image source={item.img} style={styles.image1} />
              <Text style={styles.referralName}>{item.name}</Text>
              <Text style={styles.referralDetails}>
                {item.property.label}: {item.property.value}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 20 }}>
                {item.email.label}: {item.email.value}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 10 }}>
                {item.phone.label}: {item.phone.value}
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  item.status === "Accepted"
                    ? styles.accepted
                    : styles.pending,
                ]}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity
            onPress={() => navigation.navigate("ReferralForm")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Refer Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    tintColor: "black",
  },
  image1: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: "black",
    borderWidth: 1,
  },
  shapeIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: "contain",
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  referralCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  referralName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 55,
    marginTop: -40,
  },
  referralDetails: {
    fontSize: 16,
    marginLeft: 54,
    marginTop: 5,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 20,
  },
  accepted: {
    backgroundColor: "green",
  },
  pending: {
    backgroundColor: "orange",
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007ACC",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
