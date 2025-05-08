import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Documents() {
  const [activeTab, setActiveTab] = useState('');
  const navigation = useNavigation();

  const data = [
    {
      text: 'Ramky One Odyssey',
      title: 'My Documents, Project',
      subtitle: 'Documents',
      img: require('../../assets/icons/ArrowRight.png'),
      img1: require('../../assets/images/docs.png'),
    },
    {
      text: 'Ramky One Karnival',
      title: 'My Documents, Project',
      subtitle: 'Documents',
      img: require('../../assets/icons/ArrowRight.png'),
      img1: require('../../assets/images/docs.png'),
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />
        <Text style={styles.headerText}>Documents</Text>

        {data.map((ele, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.projectText}>{ele.text}</Text>
            <Text style={styles.titleText}>{ele.title}</Text>
            <Text style={styles.subtitleText}>{ele.subtitle}</Text>

            <TouchableOpacity>
              <Text style={styles.detailsText}>View details</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={ele.img} style={styles.arrowIcon} />
            </TouchableOpacity>

            <Image source={ele.img1} style={styles.imageDoc} />
          </View>
        ))}
      </ScrollView>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 10,
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
    position: 'relative',
  },
  projectText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  subtitleText: {
    fontSize: 13,
    color: '#555',
  },
  detailsText: {
    marginTop: 20,
    color: '#007AFF',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 30,
    height: 30,
    marginLeft:90,
    marginTop:-25
  },
  imageDoc: {
    width: 90,
    height: 90,
    position: 'absolute',
    right: 20,
    top: 10,
  },
});
