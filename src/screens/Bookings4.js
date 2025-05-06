import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export function Bookings4() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/icons/Chevron.png')}
            style={styles.backIcon}
          />
          <TouchableOpacity onPress={()=>navigation.navigate('Bookings1')}>
              <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
      <View style={styles.card}>
        <Image source={require('../../assets/icons/female.png')} style={{width:80,height:80,marginTop:10}}/>
        <Text style={styles.name}>Rekha Mehta</Text>
        <Text style={styles.label1}>Second Applicant</Text>
      </View>


      <View style={styles.card}>
        <Text style={styles.label}>Date Of Birth:</Text>
        <Text style={styles.value}>23-10-1994</Text>

        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>9876543212</Text>

        <Text style={styles.label}>Email ID:</Text>
        <Text style={styles.value}>rekha@gmail.com</Text>

        <Text style={styles.label}>Adhaar Number:</Text>
        <Text style={styles.value}>9801 8989 1234 7819</Text>

        <Text style={styles.label}>Pan Number:</Text>
        <Text style={styles.value}>AXD09382673</Text>
      </View>
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
    paddingBottom:40
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  backText: {
    fontSize: 16,
    marginLeft: 30,
    marginTop:-20,
    paddingBottom:50
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -65,
    marginLeft: 100
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#444',

  },
  label1: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 100,
    color: '#444'
  },
  value: {
    fontSize: 14,
    color: '#222',
  },
});
