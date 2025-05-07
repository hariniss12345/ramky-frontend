import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Bookings() {
  const [activeTab, setActiveTab] = useState('Bookings');
  const navigation = useNavigation();

  const handleViewMore = () => {
    navigation.navigate('Bookings1');
  };

  const data = [
    {
      title: "Ramky One Odyssey",
      subtitle: "2 BHK, Flat",
      img1: require("../../assets/images/1building.png"),
      img2: require("../../assets/icons/ArrowRight.png")
    },
    {
      title: "Ramky One Orion",
      subtitle: "2 BHK, Flat",
      img1: require("../../assets/images/2building.png"),
      img2: require("../../assets/icons/ArrowRight.png")
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView contentContainerStyle={commonStyles.scrollContent}>
        <Header navigation={navigation} />
        <Text style={styles.book}>Bookings</Text>

        {data.map((ele, index) => (
          <View key={index} style={commonStyles.card}>
            <Image source={ele.img1} style={commonStyles.buildingImage} />
            <Text style={styles.title}>{ele.title}</Text>
            <Text style={styles.subtitle}>{ele.subtitle}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.curvedButton1} onPress={handleViewMore}>
                <Image source={ele.img2} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  book: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  curvedButton1: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  arrow: {
    marginTop: -10,
    width: 35,
    height: 35,
  },
});
