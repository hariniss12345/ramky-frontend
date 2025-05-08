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

  const visitData = {
    upcoming: [
      {
        title: 'Ramky One Karnival',
        subtitle: '2nd Phase,4th cross,16th Main Rd...',
        details: [
          { label: 'Visit Date', value: '24/5/2023, Wednesday' },
          { label: 'Visit Time', value: '11:00 AM' },
          { label: 'CRM/Handover Person', value: 'Manoj Desai' }
        ],
        status: 'Scheduled'
      }
    ],
    completed: [
      {
        title: 'Ramky One Karnival',
        subtitle: '2nd Phase,4th cross,16th Main Rd...',
        details: [
          { label: 'Visit Date', value: '24/5/2023, Wednesday' },
          { label: 'Visit Time', value: '11:00 AM' },
          { label: 'CRM/Handover Person', value: 'Manoj Desai' }
        ],
        status: 'Completed'
      }
    ],
    incomplete: [
      {
        title: 'Ramky One Karnival',
        subtitle: '2nd Phase,4th cross,16th Main Rd...',
        details: [
          { label: 'Visit Date', value: '24/5/2023, Wednesday' },
          { label: 'Visit Time', value: '11:00 AM' },
          { label: 'CRM/Handover Person', value: 'Manoj Desai' },
          { label: 'Cancelled on', value: '24/5/2023, Wednesday' },
          { label: 'Remarks', value: '-' }
        ],
        status: 'Cancelled'
      }
    ]
  };
  
  const renderVisits = (category) => {
    return visitData[category]?.map((visit, index) => (
      <View key={index} style={styles.card}>
        <Image source={require('../../assets/icons/Frame.png')} style={{ width: 40, height: 40, marginTop: 15 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -40, marginLeft: 60 }}>{visit.title}</Text>
        <Text style={{ marginLeft: 60 }}>{visit.subtitle}</Text>
        <Image source={require('../../assets/icons/rightarrow.png')} style={{ width: 30, height: 30, marginLeft: 290, marginTop: -43 }} />
        
        {visit.details.map((item, i) => (
          <Text key={i} style={{ marginTop: 10, fontWeight: 'bold' }}>
            {item.label}: <Text style={{ fontWeight: 'normal' }}>{item.value}</Text>
          </Text>
        ))}
  
        {visit.status === 'Scheduled' && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Scheduled</Text>
            </TouchableOpacity>
          </View>
        )}
  
        {visit.status === 'Completed' && (
          <>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#007BFF', borderRadius: 20, padding: 10, marginTop: 10 }}>
              <Text style={{ color: '#007BFF', fontWeight: 'bold' }}>Give Feedback</Text>
            </TouchableOpacity>
          </>
        )}
  
        {visit.status === 'Cancelled' && (
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Cancelled</Text>
          </TouchableOpacity>
        )}
      </View>
    ));
  };
  
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

        {renderVisits(activeCategory)}

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
