import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';

export function UpcomingEvents() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [activeTab, setActiveTab] = useState('Events');
    const navigation = useNavigation();

    const handleRegister = () => {
        setIsRegistered(true);
    };

    const data = [
        {
            title: 'Real Estate Summit...',
            description: 'Join top industry experts for insights on the latest trends.',
            img: require('../../assets/images/image.png'),
            img1: require('../../assets/icons/date.png'),
            img2:require('../../assets/icons/loc.png'),
            date: 'March 15, 2025 10:00 AM - 3:00 PM',
            location: 'Hi-Tech City - Hyderabad',
        },
        {
            img2: require('../../assets/icons/calendar1.gif'),
            title1: 'Registration Complete',
            message: 'Congratulations! You are registered for the event. Please find the event details on your registered email ID.'
        }
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView style={commonStyles.scrollContent}>
                <Header navigation={navigation} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 30, marginLeft: 10 }}>
                    Upcoming Events
                </Text>

                {data.slice(0, 1).map((ele, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image source={ele.img} style={styles.cardImage} />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>{ele.title}</Text>
                                <Text style={styles.cardDescription}>{ele.description}</Text>
                            </View>
                        </View>

                        <View style={styles.cardDetails}>
                            <Image source={ele.img1} style={styles.icon} />
                            <Text style={styles.cardDate}>{ele.date}</Text>
                        </View>

                        <View style={styles.cardDetails}>
                            <Image source={ele.img2} style={styles.icon} />
                            <Text style={styles.cardLocation}>{ele.location}</Text>
                        </View>

                        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                            <Text style={styles.registerButtonText}>Register Now</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {isRegistered && (
                    <View style={styles.registrationCard}>
                        <FastImage source={data[1].img2} style={styles.cardImage1} />
                        <Text style={styles.cardTitle1}>{data[1].title1}</Text>
                        <Text style={styles.cardDescription1}>{data[1].message}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsRegistered(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
            <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
        tintColor: 'black',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginHorizontal: 10,
    },
    cardContent: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    cardTextContainer: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#007ACC',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
    },
    cardDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        tintColor: 'gray',
        objectFit: 'contain',
    },
    cardDate: {
        fontSize: 15,
        color: '#777',
        fontWeight: '700',
    },
    cardLocation: {
        fontSize: 15,
        color: '#777',
        fontWeight: '700',
    },
    registerButton: {
        backgroundColor: '#007ACC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registrationCard: {
        position: 'absolute',
        top: '70%',
        left: '45%',
        transform: [{ translateX: -150 }, { translateY: -100 }],
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginLeft: 20,
        marginTop: 30,
    },
    cardImage1: {
        width: '50%',
        height: 150,
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 50,
    },
    cardTitle1: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        marginLeft: 30,
    },
    cardDescription1: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
        marginLeft: 20,
    },
    closeButton: {
        backgroundColor: 'white',
        borderColor: '#007ACC',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 15,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: '#007ACC',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
