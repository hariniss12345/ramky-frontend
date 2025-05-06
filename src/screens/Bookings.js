import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Bookings() {
  const [activeTab, setActiveTab] = useState('Bookings');
  const navigation = useNavigation();

  const handleViewMore = () => {
    navigation.navigate('Bookings1');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/main_logo.png')}
            style={styles.image1}
          />
          <Image
            source={require('../../assets/icons/Alert.png')}
            style={styles.image2}
          />
          <Image
            source={require('../../assets/icons/Search.png')}
            style={styles.image3}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Side Bar')}>
            <Image
              source={require('../../assets/icons/Line.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.book}>Bookings</Text>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/1building.png')}
            style={styles.buildingImage}
          />
          <Text style={styles.title}>Ramky One Odyssey</Text>
          <Text style={styles.subtitle}>2 BHK, Flat</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.curvedButton1}
              onPress={handleViewMore}
            >
              <Image
                source={require('../../assets/icons/ArrowRight.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/2building.png')}
            style={styles.buildingImage}
          />
          <Text style={styles.title}>Ramky One Orion</Text>
          <Text style={styles.subtitle}>2 BHK, Flat</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.curvedButton1}
              onPress={handleViewMore}
            >
              <Image
                source={require('../../assets/icons/ArrowRight.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


      {/* Footer (fixed) */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Bookings');
            navigation.navigate('Bookings');
          }}>
          <Image
            source={require('../../assets/icons/homemore.png')}
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Project');
            navigation.navigate('Project Updates');
          }}>
          <Image
            source={require('../../assets/icons/checkmark.png')}
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Home');
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../assets/images/main_logo.png')}
            style={styles.footerLogo}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Visits');
            navigation.navigate('Visits');
          }}>
          <Image
            source={require('../../assets/icons/Location.png')}
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>Visits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            setActiveTab('Events');
            navigation.navigate('Upcoming Events');
          }}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>Events</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  scrollContent: {
    paddingBottom: 100, // space for footer
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  image1: {
    width: 59,
    height: 48,
  },
  image2: {
    width: 30,
    height: 30,
    tintColor:'black',
    marginLeft: 90
  },
  image3: {
    width: 30,
    height: 30,
    tintColor:'black'
  },
  book: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buildingImage: {
    width: '100%',
    height: 120, // reduced height
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  curvedButton1: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  arrow: {
    marginTop:-10,
    width: 35,
    height: 35,
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
