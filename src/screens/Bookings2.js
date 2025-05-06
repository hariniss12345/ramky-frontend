import React from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

export function Bookings2() {
  return (
    <View>
      <Image
        source={require('../../assets/images/Rectangle.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width, 
    height: 200,  
    marginTop: 220, 
  },
});
