import React, { useState } from "react"; 
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Visits() {
    const navigation = useNavigation()
    const [activeCategory, setActiveCategory] = useState('upcoming'); 
    const [activeTab, setActiveTab] = useState('Visits');

    const renderUpcomingVisits = () => (
        <View>
            <View style={styles.card}>
                <Image source={require('../../assets/icons/Frame.png')} style={{ width:40,height:40,objectFit:'contain',marginTop:15}} />
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:-40,marginLeft:60}}>Ramky One Karnival</Text>
                <Text style={{marginLeft:60}}>2nd Phase,4th cross,16th Main Rd...</Text>
                <Image source={require('../../assets/icons/rightarrow.png')} style={{width:30,height:30,marginLeft:290,marginTop:-43}}/>
                <Text style={{marginTop:40,fontWeight:'bold'}}>Visit Date: <Text style={{fontWeight:'normal'}}>24/5/2023, Wednesday</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold'}}>Visit Time:<Text style={{fontWeight:'normal'}}>11:00 AM</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold',paddingBottom:20}}>CRM/Handover Person: <Text style={{fontWeight:'normal'}}>Manoj Desai</Text></Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Scheduled</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderCompletedVisits = () => (
        <View>
            <View style={styles.card}>
                <Image source={require('../../assets/icons/Frame.png')} style={{ width:40,height:40,objectFit:'contain',marginTop:15}} />
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:-40,marginLeft:60}}>Ramky One Karnival</Text>
                <Text style={{marginLeft:60}}>2nd Phase,4th cross,16th Main Rd...</Text>
                <Image source={require('../../assets/icons/rightarrow.png')} style={{width:30,height:30,marginLeft:290,marginTop:-43}}/>
                <Text style={{marginTop:40,fontWeight:'bold'}}>Visit Date: <Text style={{fontWeight:'normal'}}>24/5/2023, Wednesday</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold'}}>Visit Time:<Text style={{fontWeight:'normal'}}>11:00 AM</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold',paddingBottom:20}}>CRM/Handover Person: <Text style={{fontWeight:'normal'}}>Manoj Desai</Text></Text>
                <TouchableOpacity style={styles.button1}>
                   <Text style={styles.buttonText}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={{ borderWidth: 1,borderColor: '#007BFF',borderRadius: 20,paddingVertical: 10,paddingHorizontal: 20,alignItems: 'center',justifyContent: 'center', margin: 10,marginTop:20
                }}>
                 <Text style={{ color: '#007BFF', fontWeight: 'bold' }}> Give Feedback</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

    const renderIncompleteVisits = () => (
        <View>
            <View style={styles.card}>
            <Image source={require('../../assets/icons/Frame.png')} style={{ width:40,height:40,objectFit:'contain',marginTop:15}} />
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:-40,marginLeft:60}}>Ramky One Karnival</Text>
                <Text style={{marginLeft:60}}>2nd Phase,4th cross,16th Main Rd...</Text>
                <Image source={require('../../assets/icons/rightarrow.png')} style={{width:30,height:30,marginLeft:290,marginTop:-43}}/>
                <Text style={{marginTop:40,fontWeight:'bold'}}>Visit Date: <Text style={{fontWeight:'normal'}}>24/5/2023, Wednesday</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold'}}>Visit Time:<Text style={{fontWeight:'normal'}}>11:00 AM</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold',}}>CRM/Handover Person: <Text style={{fontWeight:'normal'}}>Manoj Desai</Text></Text>
                <Text style={{marginTop:10,fontWeight:'bold'}}>Cancelled on: <Text style={{fontWeight:'normal'}}>24/5/2023,Wednesday</Text></Text>
                <Text style={{margintop:10,fontWeight:'bold',paddingBottom:20}}>Remarks: <Text style={{fontWeight:'normal'}}>-</Text></Text>
                <TouchableOpacity style={styles.button2}>
                   <Text style={styles.buttonText}>Cancelled</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/main_logo.png')} style={{width:59,height:48,marginLeft:10}}/>
                    <Image source={require('../../assets/icons/Alert.png')} style={[styles.image,{marginLeft:120}]} />
                    <Image source={require('../../assets/icons/Search.png')} style={styles.image} />
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image
                           source={require('../../assets/icons/Line.png')}
                           style={styles.image}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.text1}>Visits for Handover</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <ScrollView horizontal={true}>
                        <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('upcoming')}>Upcoming    </Text>
                        <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('completed')}>Completed    </Text>
                        <Text style={{ fontSize: 20 }} onPress={() => setActiveCategory('incomplete')}>Cancelled   </Text>
                    </ScrollView>
                </View>

                {activeCategory === 'upcoming' && renderUpcomingVisits()}
                {activeCategory === 'completed' && renderCompletedVisits()}
                {activeCategory === 'incomplete' && renderIncompleteVisits()}
            </ScrollView>

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
        marginBottom: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'white'
    },
    text1: {
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight:'bold'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
        tintColor:'black',
    },
    card: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderColor:'white',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,

    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 50, 
        padding: 10,
        flex: 1,
        alignItems: 'center',
        marginRight:190
    },
    button1:{
        backgroundColor: 'green',
        borderRadius: 50, 
        padding: 10,
        flex: 1,
        alignItems: 'center',
        marginRight: 200,
    },
    button2:{
        backgroundColor: 'red',
        borderRadius: 50, 
        padding: 10,
        flex: 1,
        alignItems: 'center',
        marginRight: 200
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    reScheduledButton: {
        position: 'absolute',  
        left: 20,
        top:20,
        backgroundColor: 'orange',
        borderRadius: 12,
        padding: 5,
        zIndex: 1,  
    },
    reScheduledButton1: {
        left: 20,
        top:-5,
        backgroundColor: 'green',
        borderRadius: 12,
        padding: 5,
        zIndex: 1, 
        marginRight:220 
    },
    reScheduledButton2: {
        left: 20,
        top:-5,
        backgroundColor: 'red',
        borderRadius: 12,
        padding: 5,
        zIndex: 1, 
        marginRight:230 
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    
    },
    scrollContainer:{
        marginBottom:100
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
