import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export function ProjectUpdates1() {
  const [showJuneUpdates, setShowJuneUpdates] = useState(false);
  const navigation = useNavigation(); 

  return (
    <>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Project Updates')}>
        <Image source={require('../../assets/icons/Chevron.png')} style={{width:30,height:30}}/>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      
      <Text style={{fontSize:24,fontWeight:'bold',paddingBottom:10,marginLeft:10}}>Ramky One Odyssey</Text>
      <Text style={{fontSize:16,paddingBottom:30,marginLeft:10}}>Unit Number: 801,Block A</Text>
  
      <ScrollView style={styles.container}>
    
        <TouchableOpacity
          style={[
            styles.cardHeaderOnly,
            showJuneUpdates && styles.cardHeaderOnlyActive
          ]}
          onPress={() => setShowJuneUpdates(!showJuneUpdates)}
        >
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, showJuneUpdates && styles.cardTitleActive]}>
              June 2024 Updates
            </Text>
            {showJuneUpdates ? (
              <Image source={require('../../assets/icons/ChevronDown.png')} style={styles.shape1} />
            ) : (
              <Image source={require('../../assets/icons/Icon.png')} style={styles.shape} />
            )}
          </View>
        </TouchableOpacity>

        {showJuneUpdates && (
          <View style={styles.card}> 
           <Text style={styles.sectionTitle}>Images</Text>
            <View style={styles.imageRow}>
              <Image source={require('../../assets/images/building4.png')} style={styles.image} />
              <Image source={require('../../assets/images/building5.png')} style={styles.image} />
            </View>

            <Text style={styles.sectionTitle}>Videos</Text>
            <View style={styles.imageRow}>
              <Image source={require('../../assets/images/building6.png')} style={styles.image} />
              <Image source={require('../../assets/images/building7.png')} style={styles.image} />
            </View>
          </View>
        )}

        {/* Other Months */}
        <View style={styles.cardHeaderOnly}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>May 2024 Updates</Text>
            <Image source={require('../../assets/icons/Icon.png')} style={styles.shape} />
          </View>
        </View>

        <View style={styles.cardHeaderOnly}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>April 2024 Updates</Text>
            <Image source={require('../../assets/icons/Icon.png')} style={styles.shape} />
          </View>
        </View>

        <View style={styles.cardHeaderOnly}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>March 2024 Updates</Text>
            <Image source={require('../../assets/icons/Icon.png')} style={styles.shape} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom:40
  },
  backText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 35,
    marginTop:-28
  },
  cardHeaderOnly: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeaderOnlyActive: {
    backgroundColor: '#007ACC',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
  },
  cardTitleActive: {
    color: 'white',
  },
  shape: {
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },
  shape1: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor:'black'
  },
  mainImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
  },
  image: {
    width: '48%',
    height: 100,
    borderRadius: 8,
  },
});
