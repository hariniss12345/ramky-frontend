import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';

export function MainScreen({ navigation }) {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500, 
      useNativeDriver: true,
    }).start();

    // Navigate after 1 second
    const timer = setTimeout(() => {
      navigation.navigate('MainScreen1');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      <Image
        source={require('../../assets/images/main_logo.png')}
        style={styles.main_logo}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_logo: {
    width: 204,
    height: 153,
  },
});
