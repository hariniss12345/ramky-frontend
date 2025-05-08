import React,{use, useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Referrals({ navigation }) {
  const [activeTab,setActiveTab] = useState('');

  return (
    <View style={{flex:1}}>
    <ScrollView style={commonStyles.scrollContent}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Referrals</Text>

      <View style={styles.card}>
        {/* Updated This Month header */}
        <View style={styles.monthHeader}>
          <Image
            source={require("../../assets/icons/Shape.png")}
            style={styles.shapeIcon}
          />
          <Text style={styles.monthText}>This Month</Text>
        </View>

        {/* Referral 1 */}
        <View style={styles.referralCard}>
          <Image
            source={require("../../assets/icons/person1.png")}
            style={styles.image1}
          />
          <Text style={styles.referralName}>Mohan Kumar</Text>
          <Text style={styles.referralDetails}>Property: Ramky One North</Text>
          <Text style={{ fontSize: 18, marginTop: 20 }}>Email: mohankumar@gmail.com</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Phone: 9876543210</Text>
          <View style={[styles.statusBadge, styles.accepted]}>
            <Text style={styles.statusText}>Accepted</Text>
          </View>
        </View>

        {/* Referral 2 */}
        <View style={styles.referralCard}>
          <Image
            source={require("../../assets/icons/person1.png")}
            style={styles.image1}
          />
          <Text style={styles.referralName}>Kavitha P</Text>
          <Text style={styles.referralDetails}>Property: Ramky One North</Text>
          <Text style={{ fontSize: 18, marginTop: 20 }}>Email: kavithaPr@gmail.com</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Phone: 9876802210</Text>
          <View style={[styles.statusBadge, styles.pending]}>
            <Text style={styles.statusText}>Pending</Text>
          </View>
        </View>

        {/* Refer Now Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ReferralForm")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Refer Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
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
    objectFit: "contain",
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
    objectFit: "contain",
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
