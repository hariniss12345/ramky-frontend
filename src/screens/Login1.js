import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

export function Login1() {
  const navigation = useNavigation();
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  return (
    <View style={styles.container}>
      {/* Card container */}
      <View style={styles.card}>
        <Text style={styles.text}>
          Verify <Text style={styles.txt}>OTP</Text>
        </Text>
        <Text style={styles.txt1}>Enter 6-digit verification code</Text>


        <View style={styles.otpContainer}>
          {inputRefs.map((ref, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              ref={ref}
              onChangeText={(value) => {
                if (value && index < 5) {
                  inputRefs[index + 1].current.focus();
                }
              }}
            />
          ))}
        </View>

        <Text style={styles.txt3}>Didn't get the code? Resend</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText1}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => navigation.navigate('Login2')}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#B0C4DE',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginLeft:70
  },
  txt: {
    color: 'white',
    marginLeft:20
  },
  txt1: {
    fontSize: 15,
    marginTop: 10,
    color: 'white',
    marginLeft: 40
  },
  txt2: {
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
  },
  txt3: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 40,
    height: 70,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 6,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#007ACC',
    marginLeft: 40
  },
  verifyButton: {
    backgroundColor: '#007ACC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight:20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText1: {
    color: '#007ACC',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

