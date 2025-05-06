import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/icons/person3.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>
          Welcome <Text style={styles.titleBold}>Back!</Text>
        </Text>
        <Text style={styles.subtitle}>
          Unlock the door to seamless experience
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#555" 
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login1')}
        >
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Light grey background
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#FFFFFF', // Card pure white
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#000000', // Black main text
  },
  titleBold: {
    fontWeight: 'bold',
    color: '#000000', // Black "Back!"
  },
  subtitle: {
    fontSize: 14,
    color: '#555555', // Slightly lighter subtitle
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000000',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDD', 
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5B4FF1',
  },
  buttonText: {
    color: '#5B4FF1', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
