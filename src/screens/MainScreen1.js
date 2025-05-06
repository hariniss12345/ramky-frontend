import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function MainScreen1() {
  const [showFirstLogo, setShowFirstLogo] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowFirstLogo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/main.png')}
        style={styles.image}
      >
        {!showFirstLogo && (
          <Image
            source={require('../../assets/images/main_logo.png')} 
            style={{ width: 90, height: 90, marginTop: -30}}
          />
        )}

        
        {showFirstLogo && (
          <Image
            source={require('../../assets/images/main_logo.png')} 
            style={{ width: 90, height: 90, alignSelf: 'center', marginTop: 50 }}
          />
        )}

        {showFirstLogo && (
          <>
            <View style={styles.overlay}>
              <Text style={styles.textWhite}>customer.support@ramky.com</Text>
              <Text style={styles.textWhite1}>+91 9100434848</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 395,
    height: 750,
    padding: 20,
  },
  overlay: {
    marginLeft: 20,
    marginTop: 90,
    padding: 10,
    borderRadius: 5,
  },
  textWhite: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  textWhite1: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
    marginLeft: 50,
  },
  loginButton: {
    marginTop: 290,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginRight: 20,
  },
  loginText: {
    fontSize: 20,
    color: 'black',
    
  },
});
