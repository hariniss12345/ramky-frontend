import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export function Bookings2() {
  const navigation = useNavigation();

  const data = [
    {
      img: require('../../assets/icons/male.png'),
      name: 'Ayush Metha',
      applicant: 'First Applicant',
      details: [
        { label: 'Date Of Birth', value: '23-10-1994' },
        { label: 'Mobile Number', value: '9876543212' },
        { label: 'Email ID', value: 'ayush@gmail.com' },
        { label: 'Aadhaar Number', value: '9801 8989 1234 7819' },
        { label: 'Pan Number', value: 'AXD09382673' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Bookings1')} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../assets/icons/Chevron.png')} style={styles.backIcon} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {data.map((ele, index) => (
        <View key={index}>
          <View style={styles.card}>
            <Image source={ele.img} style={{ width: 80, height: 80, marginTop: 10 }} />
            <Text style={styles.name}>{ele.name}</Text>
            <Text style={styles.label1}>{ele.applicant}</Text>
          </View>

          <View style={styles.card}>
            {ele.details.map((detail, i) => (
              <View key={i}>
                <Text style={styles.label}>{detail.label}:</Text>
                <Text style={styles.value}>{detail.value}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingBottom: 40,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  backText: {
    fontSize: 16,
    paddingBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -65,
    marginLeft: 100,
  },
  label1: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 100,
    color: '#444',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#444',
  },
  value: {
    fontSize: 14,
    color: '#222',
  },
});
