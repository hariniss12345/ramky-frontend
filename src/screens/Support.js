import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FastImage from "react-native-fast-image";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';



export function Support() {
    const [activeTab, setActiveTab] = useState('');
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);
    const [showRatingCard, setShowRatingCard] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleAddRequest = () => {
        navigation.navigate('Form Page');
    };

    const handleStarPress = (star) => {
        setRating(star);
    };

    const handleSubmit = () => {
        setShowRatingCard(false);
        setSubmitted(true);
    };

    const renderRatingCard = () => (
        <View style={styles.overlay}>
            <View style={styles.ratingCard}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setShowRatingCard(false)}>
                        <Image
                            source={require('../../assets/icons/close.png')}
                            style={styles.closeImage}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.ratingTitle}>Rate Us</Text>
                <Text style={{ marginTop: 10, fontSize: 15 }}>Help us improve.</Text>
                <Text style={{ marginTop: 10, fontSize: 15 }}>We are here for you</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                            <Text style={[styles.star, rating >= star && styles.filledStar]}>
                                ★
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}  // Submit form and show Thank You message
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderThankYouCard = () => (
        <View style={styles.overlay}>
            <View style={styles.thankYouCard}>
                <FastImage
                    source={require('../../assets/icons/thumb.gif')}
                    style={{ width: 80, height: 80 }}
                />
                <Text style={styles.thankYouText}>Thank you for rating us!</Text>
                <Text style={styles.thankYouMessage}>We appreciate you taking the time to share your thoughts.</Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => setSubmitted(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView style={commonStyles.scrollContent}>
                <Header navigation={navigation} />
                <Text style={styles.pageTitle}>Support</Text>
                <View style={styles.monthCard}>
                    <Image source={require('../../assets/icons/Shape.png')} style={styles.monthIcon} />
                    <Text style={styles.monthText}>This Month</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image source={require('../../assets/icons/file2.png')} style={styles.cardIcon} />
                        <Text style={styles.cardTitle}>Maintenance</Text>
                        <TouchableOpacity style={[styles.statusButton, styles.resolved]}>
                            <Text style={styles.statusText}>Resolved</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 75, marginTop: -20 }}>Case ID: 0090</Text>
                    <Text style={{ marginTop: 40 }}>Description: Garbage not being disposed properly in the B-block</Text>
                    <Text style={{ marginTop: 10 }}>Created Date: 25/5/2025</Text>
                    <TouchableOpacity style={styles.rateButton} onPress={() => setShowRatingCard(true)}>
                        <Text style={styles.rateButtonText}>Rate Us</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image source={require('../../assets/icons/file2.png')} style={styles.cardIcon} />
                        <Text style={styles.cardTitle}>Failure</Text>
                        <TouchableOpacity style={[styles.statusButton1, styles.pending]}>
                            <Text style={styles.statusText}>Pending</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 75, marginTop: -20 }}>Case ID: 0091</Text>
                    <Text style={{ marginTop: 40 }}>Description: Street lights are not working in the A-block</Text>
                    <Text style={{ marginTop: 10 }}>Created Date: 25/5/2025</Text>
                </View>


                <View style={styles.addIconContainer}>
                    <TouchableOpacity onPress={handleAddRequest}>
                        <Text style={styles.submitButton1}>Raise a request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />


            {showRatingCard && renderRatingCard()}


            {submitted && renderThankYouCard()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 80,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    iconGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 30,
        tintColor: 'black'
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 10,
        marginTop: 30,
        paddingBottom: 20
    },
    monthCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 10,
    },
    monthIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    monthText: {
        fontSize: 16,
        fontWeight: '600',
    },
    card: {
        padding: 12,
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    cardIcon: {
        width: 65,
        height: 65,
        marginRight: 8,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    statusButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 50,
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: 20
    },
    statusButton1: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 50,
        alignSelf: 'flex-start',
        marginLeft: 90,
        marginTop: 20
    },
    resolved: {
        backgroundColor: '#4CAF50',
    },
    pending: {
        backgroundColor: '#FFC107',
    },
    statusText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addIconContainer: {
        alignItems: "flex-end",
        paddingHorizontal: 20,
        marginTop: 30,
    },
    addIcon: {
        width: 50,
        height: 50,
    },
    rateButton: {
        marginTop: 16,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'center',
        borderColor: '#007ACC',
        borderWidth: 1,
        paddingLeft: 100,
        paddingRight: 100
    },
    rateButtonText: {
        color: '#007ACC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingCard: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        elevation: 4,
    },
    ratingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 50
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    star: {
        fontSize: 36,
        color: '#ccc',
        marginHorizontal: 6,
    },
    filledStar: {
        color: '#FFD700',
    },
    submitButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    submitButton1: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
        color: 'white',
        paddingLeft: 80,
        paddingRight: 80,
        marginRight: 30,
        paddingTop: 10,
        paddingBottom: 10


    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    closeContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 999,
    },
    closeImage: {
        width: 24,
        height: 24,
        tintColor: 'black',
    },
    thankYouCard: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        elevation: 4,
    },
    thankYouText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    thankYouMessage: {
        fontSize: 15,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderColor: '#007ACC',
        borderWidth: 1,
        paddingLeft: 50,
        paddingRight: 50
    },
    closeButtonText: {
        color: '#007ACC',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
