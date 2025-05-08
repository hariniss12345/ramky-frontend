import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';

export function Logout() {
  const data = [
    {
      img: require("../../assets/icons/logout.gif"),
      title: 'Logout',
      message: 'You are about to log out of your Ramky Estates account. Thank you for using our portal, and we look forward to your return.'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <FastImage 
                source={item.img} 
                style={styles.image} 
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </React.Fragment>
          );
        })}

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} on> 
            <Text style={styles.cancelText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <Text style={styles.logoutText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#333',
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: '#555',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "white",
    borderColor:'#007ACC',
    borderWidth:1
  },
  logoutButton: {
    backgroundColor: "#007ACC",
  },
  cancelText: {
    color: "#007ACC",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
