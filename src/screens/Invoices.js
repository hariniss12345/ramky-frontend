import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Invoices() {
  const [activeTab, setActiveTab] = useState('');
  const navigation = useNavigation();

  const data = [
    {
      title: 'Ramky One Odyssey',
      status: '1 Overdue, 2 Unpaid',
      img: require('../../assets/icons/ArrowRight.png'),
      img2: require('../../assets/images/invoice1.png'),
    },
    {
      title: 'Ramky One Karnival',
      status: '0 Overdue, 6 Unpaid',
      img: require('../../assets/icons/ArrowRight.png'),
      img2: require('../../assets/images/invoice2.png'),
    }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Invoices</Text>

        {data.map((ele, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardContent}>
              <View style={{ flex: 1 }}>
                <Text style={styles.projectTitle}>{ele.title}</Text>
                <Text style={styles.statusText}>{ele.status}</Text>
                <View style={styles.detailsRow}>
                  <TouchableOpacity onPress={() => navigation.navigate('Invoices2')}>
                    <Text style={styles.detailsText}>View details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Invoices2')}>
                    <Image source={ele.img} style={styles.arrowIcon} />
                  </TouchableOpacity>
                </View>
              </View>
              <Image source={ele.img2} style={styles.projectIcon} />
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    tintColor: 'black'
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  statusText: {
    color: '#666',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    color: '#007BFF',
    marginRight: 6,
    fontWeight: '500',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#007BFF',
  },
  projectIcon: {
    width: 80,
    height: 80,
    marginLeft: 12,
  },

});
