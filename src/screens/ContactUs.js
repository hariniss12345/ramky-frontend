import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function ContactUs() {
  const navigation = useNavigation();
  const [activeTab,setActiveTab] = useState('');

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
            <Image source={require('../../assets/icons/Shape.png')} style={{width:30,height:30,objectFit:'contain'}} />
            <Text style={styles.cardTitle}>Ramky One Odyssey</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/blueLoc.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Property Address</Text>
          </View>
          <Text style={styles.cardText}>9th Floor, Ramky Grandiose, Ramky Towers, Gachibowli, Hyderabad - 500 032.</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.cardLink}>Open Location on Maps</Text>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{width:30,height:30,objectFit:'contain',marginRight:100}} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/email.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Email</Text>
          </View>
          <Text style={styles.cardText}>customer.support@ramky.com</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.cardLink}>Email Us</Text>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{width:30,height:30,objectFit:'contain',marginRight:190}} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/callus.png')} style={styles.image} />
            <Text style={styles.cardTitle}>CRM Contact</Text>
          </View>
          <Text style={styles.cardText}>Sai Krishna: +91 9100434848</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.cardLink}>Call Us</Text>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{width:30,height:30,objectFit:'contain',marginRight:200}} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/blueLoc.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Corporate Address</Text>
          </View>
          <Text style={styles.cardText}>9th Floor, Ramky Grandiose, Ramky Towers, Gachibowli, Hyderabad – 500 032.</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.cardLink}>Open Location on Maps</Text>
            <Image source={require('../../assets/icons/ArrowRight.png')} style={{width:30,height:30,objectFit:'contain',marginRight:100}} />
          </View>
        </View>
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
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
    },
    imageSmall: {
      width: 30,
      height: 30,
      tintColor:'black',
    },
    image:{
        width:40,
        height:40
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
    rowEnd:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    iconSmall: {
      width: 20,
      height: 20,
      tintColor: 'black',
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
  