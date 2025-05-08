import React, { useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function ProjectUpdates() {
  const [activeTab, setActiveTab] = useState('Projects');
  const navigation = useNavigation();

  const handleViewMore = () => {
    navigation.navigate('Project Updates1');
  };

  const data = [
    {
      title: "Ramky One Odyssey",
      subtitle: "Ramky One Odyssey is an",
      description: "exclusive edifice of 36 floors de...",
      img1: require("../../assets/images/1building.png"),
      img2: require('../../assets/icons/ArrowRight.png'),
    },
    {
      title: "Ramky One Orion",
      subtitle: "Ramky One Orion is an",
      description: "combinataion of next-gen design...",
      img1: require("../../assets/images/2building.png"),
      img2: require('../../assets/icons/ArrowRight.png'),
    }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Header navigation={navigation} />
        <Text style={styles.heading}>Construction Updates</Text>

        {data.map((ele, index) => (
          <View key={index} style={commonStyles.card}>
            <Image source={ele.img1} style={commonStyles.buildingImage} />
            <Text style={styles.title}>{ele.title}</Text>
            <Text style={styles.subtitle}>{ele.subtitle}</Text>
            <Text style={styles.description}>{ele.description}</Text>
            <TouchableOpacity style={styles.button} onPress={handleViewMore}>
              <Image source={ele.img2} style={styles.arrow} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    alignItems: 'flex-end',
  },
  arrow: {
    width: 35,
    height: 35,
  },

});
