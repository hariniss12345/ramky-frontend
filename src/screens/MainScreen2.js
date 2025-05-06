import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions
} from 'react-native';

import { Login } from './Login';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

export function MainScreen2() {
  const [showLogin, setShowLogin] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current; 

  const navigation = useNavigation();

  const handleLoginPress = () => {
    setShowLogin(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={require('../../assets/images/family.png')}
      style={styles.background}
      blurRadius={2}
    >

      <Image
        source={require('../../assets/images/main_logo1.png')}
        style={styles.image}
      />
      <Text style={styles.txt1}>7500+</Text>
      <Text style={styles.txt2}>Happy Families</Text>
      <Text style={styles.txt3}>Trusted by thousands</Text>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {showLogin && (
        <Animated.View style={[styles.loginContainer, { transform: [{ translateY: slideAnim }] }]}>
          <Login navigation={navigation}  />
        </Animated.View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    image: {
      width: 110,
      height: 87,
      marginTop: -200,
      alignSelf: 'center',
    },
    txt1: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
      marginTop: 105,
    },
    txt2: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
    },
    txt3: {
      color: 'white',
      alignSelf: 'center',
      marginTop: 20,
    },
    button: {
      position: 'absolute',
      bottom: 40,
      alignSelf: 'center',
      backgroundColor: 'orange',
      paddingVertical: 10,
      paddingHorizontal: 70,
      borderRadius: 80,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    loginContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '90%', 
      backgroundColor: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 20,
      elevation: 10,
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
    },
  });
  