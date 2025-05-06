import React, { useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ProjectUpdates() {
  const [activeTab, setActiveTab] = useState('Projects');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/main_logo.png')} style={styles.image2} />
          <Image source={require('../../assets/icons/Alert.png')} style={styles.image3} />
          <Image source={require('../../assets/icons/Search.png')} style={styles.image1} />
          <TouchableOpacity onPress={() => navigation.navigate('Side Bar')}>
            <Image source={require('../../assets/icons/Line.png')} style={[styles.image1,{paddingRight:30}]} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 24, marginTop: 10 }}>Construction Updates</Text>

        {/* Card 1 */}
        <View style={styles.card}>
          <Image source={require('../../assets/images/1building.png')} style={styles.image} />
          <Text style={styles.title}>Ramky One Odyssey</Text>
          <Text style={styles.subtitle}>Ramky One Odyssey is an</Text>
          <Text style={styles.description}>exclusive edifice of 36 floors de...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Project Updates1')}
          >
            <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image source={require('../../assets/images/2building.png')} style={styles.image} />
          <Text style={styles.title}>Ramky One Orion</Text>
          <Text style={styles.subtitle}>Ramky One Orion is a</Text>
          <Text style={styles.description}>combinataion of next-gen design...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Project Updates1')}
          >
            <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Bookings');
            navigation.navigate('Bookings');
          }}>
          <Image source={require('../../assets/icons/homemore.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Project');
            navigation.navigate('Project Updates');
          }}>
          <Image source={require('../../assets/icons/checkmark.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Home');
            navigation.navigate('Home');
          }}>
          <Image source={require('../../assets/images/main_logo.png')} style={styles.footerLogo} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Visits');
            navigation.navigate('Visits');
          }}>
          <Image source={require('../../assets/icons/Location.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Visits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Events');
            navigation.navigate('Upcoming Events');
          }}>
          <Image source={require('../../assets/icons/star.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 120, // ensures last content is visible above footer
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor:'white'
  },
  image2: {
    width: 59,
    height: 48,
    marginLeft:10
  },
  image1: {
    width: 35,
    height: 35,
    tintColor: 'black',
  },
  image3: {
    width: 35,
    height: 35,
    tintColor: 'black',
    marginLeft:80
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    marginTop: 20
  },
  image: {
    width: '92%',
    height: 150,
    borderRadius: 15,
    marginBottom: 12,
    marginTop: 12,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 15
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    marginLeft: 15
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    marginLeft: 15
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30
  },
  arrow: {
    width: 35,
    height: 35,
    marginLeft: 220,
    marginTop: -55
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  footerLogo: {
    width: 50,
    height: 30,
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
  },
});
