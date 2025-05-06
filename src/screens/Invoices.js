import React,{useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Invoices() {
    const [activeTab, setActiveTab] = useState('');
    const navigation = useNavigation();
  

    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/main_logo.png')} style={{ width: 59, height: 48 }} />
                    <Image source={require('../../assets/icons/Alert.png')} style={[styles.icon, { marginLeft: 90 }]} />
                    <Image source={require('../../assets/icons/Search.png')} style={styles.icon} />
                    <TouchableOpacity onPress={() => navigation.navigate('Side Bar')}>
                      <Image
                        source={require('../../assets/icons/Line.png')}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Invoices</Text>

                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.projectTitle}>Ramky One Odyssey</Text>
                            <Text style={styles.statusText}>1 Overdue, 2 Unpaid</Text>
                            <View style={styles.detailsRow}>
                              <TouchableOpacity onPress={()=>navigation.navigate('Invoices2')}>
                                 <Text style={styles.detailsText}>View details</Text>
                              </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>navigation.navigate('Invoices2')}>
                                 <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrowIcon} />
                                </TouchableOpacity>
                               
                            </View>
                        </View>
                        <Image source={require('../../assets/images/invoice1.png')} style={styles.projectIcon} />
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.projectTitle}>Ramky One Karnival</Text>
                            <Text style={styles.statusText}>0 Overdue, 6 Unpaid</Text>
                            <View style={styles.detailsRow}>
                              <TouchableOpacity onPress={()=>navigation.navigate('Invoices2')}>
                                 <Text style={styles.detailsText}>View details</Text>
                              </TouchableOpacity>
                               
                                <TouchableOpacity onPress={()=>navigation.navigate('Invoices2')}>
                                 <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrowIcon} />
                                </TouchableOpacity>   
                                </View>                        
                        </View>
                        <Image source={require('../../assets/images/invoice2.png')} style={styles.projectIcon} />
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
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        tintColor: 'black'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        margin: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    statusText: {
        color: '#666',
        marginBottom: 8,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsText: {
        color: '#007BFF',
        marginRight: 6,
        fontWeight: '500',
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: '#007BFF',
    },
    projectIcon: {
        width: 80,
        height: 80,
        marginLeft: 12,
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
