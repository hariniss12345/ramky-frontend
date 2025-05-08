import React,{useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function Invoices() {
    const [activeTab, setActiveTab] = useState('');
    const navigation = useNavigation();
  

    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView style={commonStyles.scrollContent}>
                <Header navigation={navigation} />
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
          <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />  
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
