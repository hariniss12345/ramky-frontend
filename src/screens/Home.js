import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export function Home() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
      {/* Header (fixed) */}
      <View style={[styles.imageContainer,{
        
      }]}>
        <Image
          source={require('../../assets/images/main_logo.png')}
          style={[styles.logo]}
        />
        <Image source={require('../../assets/icons/Alert.png')} style={[styles.image,{marginLeft:80}]} />
        <Image source={require('../../assets/icons/Search.png')} style={styles.image} />
        <TouchableOpacity onPress={() => navigation.navigate('Side Bar')}>
          <Image source={require('../../assets/icons/Line.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.container}>
          <Text style={styles.text1}>Welcome Harini</Text>
          <Text style={styles.text2}>
            {new Intl.DateTimeFormat('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(new Date())}
          </Text>

          <FastImage
            source={require('../../assets/icons/Hi.gif')}
            style={styles.image1}
            resizeMode={FastImage.resizeMode.contain}
          />

          <Image
            source={require('../../assets/images/building1.jpg')}
            style={styles.image3}
          />
          <Text style={styles.text4}>Ramky One Odyssey</Text>

          <Image
            source={require('../../assets/icons/Button.png')}
            style={styles.button}
          />
        </View>

        {/* Card layout row of icons */}
        <View style={styles.rowIconsContainer}>
          <View style={styles.iconItem}>
            <Image
              source={require('../../assets/icons/blueTick.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Bookings</Text>
          </View>

          <View style={styles.iconItem}>
            <Image
              source={require('../../assets/icons/payments.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Payments</Text>
          </View>

          <View style={styles.iconItem}>
            <Image
              source={require('../../assets/icons/accounts.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Statement of Accounts</Text>
          </View>

          <View style={styles.iconItem}>
            <Image
              source={require('../../assets/icons/bank.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Banking Partners</Text>
          </View>
        </View>

        <View style={styles.card}>
              <Text style={styles.cardTitle}>Construction Updates</Text>
             <View >
                <Image 
                    source={require('../../assets/icons/graph.png')} 
                    style={styles.cardImage} 
                 />
             </View>
        </View>

        <View style={[styles.card,{marginTop:20}]}>
            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>Documents</Text>
            <Text>My Documents,Project</Text>
            <Text>Documents</Text>
            <Image source={require('../../assets/images/paper.png')} style={{width:70,height:70,marginLeft:230,marginTop:-40}}/>
        </View>

        <View style={[styles.card,{marginTop:20}]}>
            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>How to pay TDS</Text>
            <Text>A step-by-step guide to</Text>
            <Text>TDS payment</Text>
            <Image source={require('../../assets/images/tds.png')} style={{width:70,height:70,marginLeft:230,marginTop:-40}}/>
        </View>

        <View style={styles.cardGrid}>
          {[
            { title: 'Payments', image: require('../../assets/images/graph1.png') },
            { title: 'Handover', image: require('../../assets/images/graph2.png') },
            { title: 'Support', image: require('../../assets/images/graph3.png') },
            { title: 'Refer N Earn', image: require('../../assets/images/graph4.png') },
           ].map((item, index) => (
          <View key={index} style={styles.cardItem}>
            <Text style={styles.cardLabel}>{item.title}</Text>
            <Image source={item.image} style={styles.cardIcon} />
          </View>
        ))}
      </View>
 
      <View style={[styles.card,{marginTop:20,backgroundColor:'#007ACC'}]}>
        <Text style={{color:'white',fontSize:18}}>You love Ramky, your </Text>
        <Text style={{color:'white',fontSize:18}}>friends are going to love us </Text>
        <Text style={{color:'white',fontSize:18}}>too.</Text>
        <TouchableOpacity style={styles.referButton}>
        <Text style={styles.referButtonText}>Refer N Earn Now</Text>
      </TouchableOpacity>
        <Image source={require('../../assets/images/Character.png')} style={{width:90,height:90,marginLeft:220,marginTop:-80}}/>
      </View>

      <View style={[styles.card,{marginTop:20}]}>
        <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:10,}}>FAQs</Text>
        <Text>Billing,Agreement</Text>
        <Text>Home Loan,etc.</Text>
        <Image source={require('../../assets/images/Layer.png')} style={{width:90,height:90,marginLeft:200,marginTop:-50}}/>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
  <Text style={{ marginBottom: 10 ,fontSize:20,fontWeight:'bold'}}>We got your back!</Text>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/emi.png')} style={{ width: 30, height: 30 }} />
      <Text>EMI Calculator</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/cal.png')} style={{ width: 30, height: 30 }} />
      <Text>Calendar</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/scan.png')} style={{ width: 30, height: 30 }} />
      <Text>Scan N Pay</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/services.png')} style={{ width: 30, height: 30 }} />
      <Text>Services</Text>
    </View>
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

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 59,
    height: 48,
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  container: {
    paddingHorizontal: 10,
  },
  text1: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  image1: {
    width: 90,
    height: 90,
    marginLeft: 250,
    marginTop: -115,
  },
  image3: {
    width: '95%',
    height: 200,
    marginTop: 45,
    borderRadius: 20,
    alignSelf: 'center',
  },
  text4: {
    color: 'white',
    marginTop: -40,
    marginLeft: 30,
    fontSize: 20,
  },
  button: {
    width: 60,
    height: 23,
    marginLeft: 140,
    resizeMode: 'contain',
    marginTop: 25,
  },
  rowIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%',
  },
  iconImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
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
  cardContainer: {
    marginVertical: 20,
  },
  
  cardTitle: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
  },
  
  cardItem: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  
  cardIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  
  cardLabel: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom:20
  },
  referButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    marginRight:130
  },
  referButtonText: {
    color: '#007ACC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
