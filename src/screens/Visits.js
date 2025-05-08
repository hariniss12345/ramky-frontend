import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Visits() {
  const navigation = useNavigation()
  const [activeCategory, setActiveCategory] = useState('upcoming');
  const [activeTab, setActiveTab] = useState('Visits');

  const renderUpcomingVisits = () => (
    <View>
      <View style={styles.card}>
        <Image source={require('../../assets/icons/Frame.png')} style={{ width: 40, height: 40, objectFit: 'contain', marginTop: 15 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -40, marginLeft: 60 }}>Ramky One Karnival</Text>
        <Text style={{ marginLeft: 60 }}>2nd Phase,4th cross,16th Main Rd...</Text>
        <Image source={require('../../assets/icons/rightarrow.png')} style={{ width: 30, height: 30, marginLeft: 290, marginTop: -43 }} />
        <Text style={{ marginTop: 40, fontWeight: 'bold' }}>Visit Date: <Text style={{ fontWeight: 'normal' }}>24/5/2023, Wednesday</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Visit Time:<Text style={{ fontWeight: 'normal' }}>11:00 AM</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', paddingBottom: 20 }}>CRM/Handover Person: <Text style={{ fontWeight: 'normal' }}>Manoj Desai</Text></Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Scheduled</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderCompletedVisits = () => (
    <View>
      <View style={styles.card}>
        <Image source={require('../../assets/icons/Frame.png')} style={{ width: 40, height: 40, objectFit: 'contain', marginTop: 15 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -40, marginLeft: 60 }}>Ramky One Karnival</Text>
        <Text style={{ marginLeft: 60 }}>2nd Phase,4th cross,16th Main Rd...</Text>
        <Image source={require('../../assets/icons/rightarrow.png')} style={{ width: 30, height: 30, marginLeft: 290, marginTop: -43 }} />
        <Text style={{ marginTop: 40, fontWeight: 'bold' }}>Visit Date: <Text style={{ fontWeight: 'normal' }}>24/5/2023, Wednesday</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Visit Time:<Text style={{ fontWeight: 'normal' }}>11:00 AM</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', paddingBottom: 20 }}>CRM/Handover Person: <Text style={{ fontWeight: 'normal' }}>Manoj Desai</Text></Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1, borderColor: '#007BFF', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', margin: 10, marginTop: 20
          }}>
          <Text style={{ color: '#007BFF', fontWeight: 'bold' }}> Give Feedback</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

  const renderIncompleteVisits = () => (
    <View>
      <View style={styles.card}>
        <Image source={require('../../assets/icons/Frame.png')} style={{ width: 40, height: 40, objectFit: 'contain', marginTop: 15 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -40, marginLeft: 60 }}>Ramky One Karnival</Text>
        <Text style={{ marginLeft: 60 }}>2nd Phase,4th cross,16th Main Rd...</Text>
        <Image source={require('../../assets/icons/rightarrow.png')} style={{ width: 30, height: 30, marginLeft: 290, marginTop: -43 }} />
        <Text style={{ marginTop: 40, fontWeight: 'bold' }}>Visit Date: <Text style={{ fontWeight: 'normal' }}>24/5/2023, Wednesday</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Visit Time:<Text style={{ fontWeight: 'normal' }}>11:00 AM</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', }}>CRM/Handover Person: <Text style={{ fontWeight: 'normal' }}>Manoj Desai</Text></Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Cancelled on: <Text style={{ fontWeight: 'normal' }}>24/5/2023,Wednesday</Text></Text>
        <Text style={{ margintop: 10, fontWeight: 'bold', paddingBottom: 20 }}>Remarks: <Text style={{ fontWeight: 'normal' }}>-</Text></Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Cancelled</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView style={commonStyles.scrollContent}>
         <Header navigation={navigation} />
        <Text style={styles.text1}>Visits for Handover</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <ScrollView horizontal={true}>
            <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('upcoming')}>Upcoming    </Text>
            <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('completed')}>Completed    </Text>
            <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('incomplete')}>Cancelled   </Text>
          </ScrollView>
        </View>

        {activeCategory === 'upcoming' && renderUpcomingVisits()}
        {activeCategory === 'completed' && renderCompletedVisits()}
        {activeCategory === 'incomplete' && renderIncompleteVisits()}
      </ScrollView>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  text1: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: 'black',
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 190
  },
  button1: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 200,
  },
  button2: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 200
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  reScheduledButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'orange',
    borderRadius: 12,
    padding: 5,
    zIndex: 1,
  },
  reScheduledButton1: {
    left: 20,
    top: -5,
    backgroundColor: 'green',
    borderRadius: 12,
    padding: 5,
    zIndex: 1,
    marginRight: 220
  },
  reScheduledButton2: {
    left: 20,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 5,
    zIndex: 1,
    marginRight: 230
  },
  buttonText: {
    color: 'white',
    fontSize: 16,

  },
  scrollContainer: {
    marginBottom: 100
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
});
