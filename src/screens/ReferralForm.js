import React, { use, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/Chevron.png')}
        style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 15 }}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Referrals')}>
      <Text style={{ fontSize: 20, marginLeft: 35, marginTop: -28 }}>Back</Text>
      </TouchableOpacity>
      
      <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 20, marginBottom: 40 }}>
        Refer Friends
      </Text>

      <Text style={styles.label}>Property Name</Text>
      <View style={styles.inputWithIcon}>
        <TextInput
          style={styles.inputText}
          placeholder="Select"
        />
        <Image
          source={require("../../assets/icons/Shape.png")} 
          style={styles.iconRight}
        />
      </View>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Enter full name" />

      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.phoneInputContainer}>
        <Image
          source={require('../../assets/icons/india.png')}
          style={styles.flagIcon}
        />
        <Text style={styles.countryCode}>91</Text>
        <Image
          source={require('../../assets/icons/Shape.png')} 
          style={styles.smallIconNextToCode}
        />
        <TextInput
          style={styles.phoneInput}
          keyboardType="number-pad"
          placeholder="Enter 10 Digit number"
        />
      </View>

      <TouchableOpacity style={styles.orangeButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Referral</Text>
      </TouchableOpacity>

      {submitted && (
        <View style={styles.overlay}>
          <View style={styles.confirmContainer}>
            <FastImage
              source={require("../../assets/icons/mailDelivery.gif")}
              style={styles.confirmImage}
            />
            <Text style={styles.confirmTitle}>Referral Sent</Text>
            <Text style={styles.confirmText}>
              Congratulations! Your referral has been successfully submitted.
              We appreciate your support in recommending Ramky Estates to
              others.
            </Text>
            <TouchableOpacity
              style={styles.orangeButton1}
              onPress={() => navigation.navigate("Referrals")}
            >
              <Text style={styles.buttonText1}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 45,
    marginTop: 5,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 45,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  inputText: {
    flex: 1,
    fontSize: 15,
  },
  iconRight: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: "#888",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: 45,
    marginTop: 5,
  },
  flagIcon: {
    width: 24,
    height: 16,
    resizeMode: "contain",
    marginRight: 6,
  },
  countryCode: {
    marginRight: 5,
  },
  smallIconNextToCode: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    marginRight: 8,
    tintColor: "#888",
  },
  phoneInput: {
    flex: 1,
    fontSize: 15,
  },
  orangeButton: {
    backgroundColor: "#007ACC",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 250,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  orangeButton1: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10

  },
  buttonText1: {
    color: "#007ACC",
    fontWeight: "bold",
    fontSize: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  confirmContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  confirmImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  confirmTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  confirmText: {
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
  },
});
