import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Invoices2() {
  const navigation = useNavigation();

  const invoices = [
    {
      title: "30 Days from Booking",
      details: [
        { label: "Invoice No", value: "0090" },
        { label: "Receipt No", value: "RM001" },
        { label: "Amount", value: "5,66,255" },
        { label: "Invoice Date", value: "25/5/2025" },
        { label: "Payment Date", value: "25/5/2025" },
        { label: "Unpaid Amount", value: "0" },
        { label: "TDS Submission", value: "Booking.jpg" },
        { label: "Days Overdue", value: "0" },
      ],
    },
    {
      title: "Basement Slab of respective block",
      details: [
        { label: "Invoice No", value: "0091" },
        { label: "Receipt No", value: "RM002" },
        { label: "Amount", value: "6,00,000" },
        { label: "Invoice Date", value: "28/5/2025" },
        { label: "Payment Date", value: "28/5/2025" },
        { label: "Unpaid Amount", value: "0" },
        { label: "TDS Submission", value: "Slab.jpg" },
        { label: "Days Overdue", value: "0" },
      ],
    },
    {
      title: "Foundation Slab of respective block",
      details: [
        { label: "Invoice No", value: "0092" },
        { label: "Receipt No", value: "RM003" },
        { label: "Amount", value: "6,20,000" },
        { label: "Invoice Date", value: "30/5/2025" },
        { label: "Payment Date", value: "30/5/2025" },
        { label: "Unpaid Amount", value: "0" },
        { label: "TDS Submission", value: "Foundation.jpg" },
        { label: "Days Overdue", value: "0" },
      ],
    },
    {
      title: "First floor of respective block",
      details: [
        { label: "Invoice No", value: "0093" },
        { label: "Receipt No", value: "RM004" },
        { label: "Amount", value: "6,40,000" },
        { label: "Invoice Date", value: "2/6/2025" },
        { label: "Payment Date", value: "2/6/2025" },
        { label: "Unpaid Amount", value: "0" },
        { label: "TDS Submission", value: "FirstFloor.jpg" },
        { label: "Days Overdue", value: "0" },
      ],
    },
    {
      title: "Second Slab of respective block",
      details: [
        { label: "Invoice No", value: "0094" },
        { label: "Receipt No", value: "RM005" },
        { label: "Amount", value: "6,50,000" },
        { label: "Invoice Date", value: "5/6/2025" },
        { label: "Payment Date", value: "5/6/2025" },
        { label: "Unpaid Amount", value: "0" },
        { label: "TDS Submission", value: "SecondSlab.jpg" },
        { label: "Days Overdue", value: "0" },
      ],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#e6f0f5" }}>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <Image
            source={require("../../assets/icons/Chevron.png")}
            style={{ width: 30, height: 30, marginTop: 20, marginBottom: 20 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Invoices")}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 30,
                marginTop: -50,
                marginBottom: 10,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Ramky One North
        </Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>Booking ID :0090</Text>

        <View style={styles.card}>
          <Image
            source={require("../../assets/icons/Shape.png")}
            style={{ width: 30, height: 30, objectFit: "contain" }}
          />
          <Text style={{ fontSize: 16, marginLeft: 50, marginTop: -25 }}>
            This month
          </Text>
        </View>

        <View style={styles.statusButtonsContainer}>
          <TouchableOpacity style={[styles.statusButton, styles.paid]}>
            <Text style={styles.statusText}>Paid</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.statusButton, styles.overdue]}>
            <Text style={styles.statusText1}>Overdue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.statusButton, styles.unpaid]}>
            <Text style={styles.statusText2}>Unpaid</Text>
          </TouchableOpacity>
        </View>

        {/* Render invoice cards dynamically */}
        {invoices.map((invoice, index) => (
          <View key={index} style={styles.card}>
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>
              {invoice.title}
            </Text>
            {invoice.details.map((item, idx) => (
              <Text key={idx}>
                {item.label}: {item.value}
              </Text>
            ))}
            <Image
              source={require("../../assets/icons/eyeBox.png")}
              style={{
                width: 30,
                height: 30,
                marginBottom: 10,
                marginTop: 10,
              }}
            />
            <Image
              source={require("../../assets/icons/download.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 50,
                marginTop: -40,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 20,
  },
  statusButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  statusText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
  statusText1: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 14,
  },
  statusText2: {
    color: "red",
    fontWeight: "bold",
    fontSize: 14,
  },
  paid: {
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 1,
  },
  overdue: {
    backgroundColor: "white",
    borderColor: "orange",
    borderWidth: 1,
  },
  unpaid: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

