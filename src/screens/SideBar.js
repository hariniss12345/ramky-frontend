import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Animated,
  Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function SideBar() {
  const navigation = useNavigation();

  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current; 

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue:0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleWhoWeAreClick = () => {
    Linking.openURL('https://www.ramkyestates.com/who-we-are')
      .catch((err) => console.error("Failed to open URL: ", err));
  };

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/icons/person3.png')} style={styles.image1} />
          <Text style={styles.label2}>Harini</Text>
        </TouchableOpacity>
        <Text style={styles.label3}>View Profile</Text>

        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={styles.closeImage}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Referrals')}>
          <Image source={require('../../assets/icons/moon.png')} style={styles.image} />
          <Text style={styles.label}>Dark Mode(Theme)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Documents')}>
          <Image source={require('../../assets/icons/Person.png')} style={styles.image} />
          <Text style={styles.label}>Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Invoices')}>
          <Image source={require('../../assets/icons/Receipt.png')} style={styles.image} />
          <Text style={styles.label}>Invoices</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('TDS')}>
          <Image source={require('../../assets/icons/Calculator.png')} style={styles.image} />
          <Text style={styles.label}>How to pay TDS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Support')}>
          <Image source={require('../../assets/icons/Ticket.png')} style={styles.image} />
          <Text style={styles.label}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Referrals')}>
          <Image source={require('../../assets/icons/ref.png')} style={styles.image} />
          <Text style={styles.label}>Referrals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Image source={require('../../assets/icons/bot.png')} style={styles.image} />
          <Text style={styles.label}>Chat with us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={handleWhoWeAreClick}>
          <Image source={require('../../assets/icons/Clover.png')} style={styles.image} />
          <Text style={styles.label}>Who we are</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('FAQ')}>
          <Image source={require('../../assets/icons/Question.png')} style={styles.image} />
          <Text style={styles.label}>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Contact Us')}>
          <Image source={require('../../assets/icons/Call.png')} style={styles.image} />
          <Text style={styles.label}>Contact us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Logout')}>
          <Image source={require('../../assets/icons/Sign.png')} style={styles.image} />
          <Text style={styles.label}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  closeContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999,
  },
  closeImage: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image1: {
    width: 70,
    height: 70,
    marginTop: 45,
  },
  image: {
    width: 24,
    height: 24,
    tintColor: 'black',
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  label2: {
    fontSize: 25,
    color: 'black',
    marginTop: 28,
    marginLeft: 20,
  },
  label3: {
    fontSize: 15,
    color: 'black',
    marginLeft: 80,
    marginBottom: 30,
    marginTop: -40,
  },
});
