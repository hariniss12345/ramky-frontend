import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer({ activeTab, setActiveTab }) {
  const navigation = useNavigation();

  const tabs = [
    { name: 'Bookings', icon: require('../../assets/icons/homemore.png'), route: 'Bookings' },
    { name: 'Project', icon: require('../../assets/icons/checkmark.png'), route: 'Project Updates' },
    { name: 'Home', icon: require('../../assets/images/main_logo.png'), route: 'Home', isLogo: true },
    { name: 'Visits', icon: require('../../assets/icons/Location.png'), route: 'Visits' },
    { name: 'Events', icon: require('../../assets/icons/star.png'), route: 'Upcoming Events' },
  ];

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.item}
          onPress={() => {
            setActiveTab(tab.name);
            navigation.navigate(tab.route);
          }}>
          <Image source={tab.icon} style={tab.isLogo ? styles.logo : styles.icon} />
          <Text style={styles.text}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  item: { alignItems: 'center' },
  icon: { width: 30, height: 30, tintColor: 'black' },
  logo: { width: 50, height: 30 },
  text: { color: 'black', fontSize: 12, marginTop: 4 },
});
