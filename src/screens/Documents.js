import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Documents() {
  const [activeTab, setActiveTab] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />

        <Text style={{ fontSize: 24, marginLeft: 10, fontWeight: 'bold', marginBottom: 10 }}>Documents</Text>
        <View style={styles.card}>

          <Text>Ramky One Odyssey</Text>
          <Text>My Documents,Project</Text>
          <Text>Documents</Text>
          <TouchableOpacity >
            <Text style={{ marginTop: 20 }}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{ width: 30, height: 30, marginLeft: 80, marginTop: -25 }} />
          </TouchableOpacity>
          <Image source={require('../../assets/images/docs.png')} style={{ width: 90, height: 90, marginLeft: 230, marginTop: -50 }} />
        </View>

        <View style={styles.card}><Text>Ramky One Odyssey</Text>
          <Text>My Documents,Project</Text>
          <Text>Documents</Text>
          <TouchableOpacity >
            <Text style={{ marginTop: 20 }}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{ width: 30, height: 30, marginLeft: 80, marginTop: -25 }} />
          </TouchableOpacity>
          <Image source={require('../../assets/images/docs.png')} style={{ width: 90, height: 90, marginLeft: 230, marginTop: -50 }} />
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
    backgroundColor: 'white',
    marginBottom: 40,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: 'black'
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  footerLogo: {
    width: 50,
    height: 30,
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
})