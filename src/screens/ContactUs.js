import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function ContactUs() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('');

  const data = [
    {
      icon1: require('../../assets/icons/blueLoc.png'),
      label: 'Property Address',
      description: '9th Floor, Ramky Grandiose, Ramky Towers, Gachibowli, Hyderabad - 500 032',
      text: 'Open Location on Maps',
      icon: require('../../assets/icons/ArrowRight.png')
    },
    {
      icon1: require('../../assets/icons/email.png'),
      label: 'Email',
      description: 'customer.support@ramky.com',
      text: 'Email Us',
      icon: require('../../assets/icons/ArrowRight.png')
    },
    {
      icon1: require('../../assets/icons/callus.png'),
      label: 'CRM Contact',
      description: 'Sai Krishna: +91 9100434848',
      text: 'Call Us',
      icon: require('../../assets/icons/ArrowRight.png')
    },
    {
      icon1: require('../../assets/icons/blueLoc.png'),
      label: 'Corporate Address',
      description: '9th Floor, Ramky Grandiose, Ramky Towers, Gachibowli, Hyderabad – 500 032.',
      text: 'Open Location on Maps',
      icon: require('../../assets/icons/ArrowRight.png')
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />

        <View style={styles.heading}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>Need to get in touch with us</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/Shape.png')} style={{ width: 30, height: 30,objectFit:'contain' }} />
            <Text style={styles.cardTitle}>Ramky One Odyssey</Text>
          </View>
        </View>

        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <Image source={item.icon1} style={styles.image} />
              <Text style={styles.cardTitle}>{item.label}</Text>
            </View>
            <Text style={styles.cardText}>{item.description}</Text>
            <View style={styles.rowEnd}>
              <Text style={styles.cardLink}>{item.text}</Text>
              <Image source={item.icon} style={{ width: 30, height: 30, marginRight: 100 }} />
            </View>
          </View>
        ))}
      </ScrollView>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },
  image: {
    width: 40,
    height: 40,
  },
  heading: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  cardLink: {
    fontSize: 15,
    fontWeight: '500',
  },
});
