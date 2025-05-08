import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/main_logo.png')} style={styles.logo} />
      <Image source={require('../../assets/icons/Alert.png')} style={[styles.icon,{marginLeft:90}]} />
      <Image source={require('../../assets/icons/Search.png')} style={styles.icon} />
      <TouchableOpacity onPress={() => navigation.navigate('Side Bar')}>
        <Image source={require('../../assets/icons/Line.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: { width: 59, height: 48 },
  icon: { width: 30, height: 30, tintColor: 'black'},
});
