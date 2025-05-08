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

    const data = [
        {
            img: require('../../assets/icons/file2.png'),
            title: 'Maintenance',
            caseId: { label: 'Case ID', value: '0090' },
            description: { label: 'Description', value: 'Garbage not being disposed properly in the B-block' },
            date: '25/5/2025',
            status: 'Resolved',
        },
        {
            img: require('../../assets/icons/file2.png'),
            title: 'Failure',
            caseId: { label: 'Case ID', value: '0091' },
            description: { label: 'Description', value: 'Street lights are not working in the A-block' },
            date: '25/5/2025',
            status: 'Pending',
        }
    ];

    const renderRatingCard = () => (
        <View style={styles.overlay}>
            <View style={styles.ratingCard}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setShowRatingCard(false)}>
                        <Image source={require('../../assets/icons/close.png')} style={styles.closeImage} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.ratingTitle}>Rate Us</Text>
                <Text style={{ marginTop: 10, fontSize: 15 }}>Help us improve.</Text>
                <Text style={{ marginTop: 10, fontSize: 15 }}>We are here for you</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                            <Text style={[styles.star, rating >= star && styles.filledStar]}>★</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderThankYouCard = () => (
        <View style={styles.overlay}>
            <View style={styles.thankYouCard}>
                <FastImage source={require('../../assets/icons/thumb.gif')} style={{ width: 80, height: 80 }} />
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

                {data.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image source={item.img} style={styles.cardIcon} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <TouchableOpacity
                                style={[
                                    item.status === 'Resolved' ? styles.resolved : styles.pending,
                                    styles.statusButton
                                ]}
                            >
                                <Text style={styles.statusText}>{item.status}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginLeft: 75, marginTop: -20 }}>
                            {item.caseId.label}: {item.caseId.value}
                        </Text>
                        <Text style={{ marginTop: 40 }}>
                            {item.description.label}: {item.description.value}
                        </Text>
                        <Text style={{ marginTop: 10 }}>Created Date: {item.date}</Text>

                        {item.status === 'Resolved' && (
                            <TouchableOpacity style={styles.rateButton} onPress={() => setShowRatingCard(true)}>
                                <Text style={styles.rateButtonText}>Rate Us</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}

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
        marginLeft: 'auto',
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
    rateButton: {
        marginTop: 16,
        borderColor: '#007ACC',
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignSelf: 'center'
    },
    rateButtonText: {
        color: '#007ACC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    addIconContainer: {
        alignItems: "flex-end",
        paddingHorizontal: 20,
        marginTop: 30,
    },
    submitButton1: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
        color: 'white',
        marginRight: 30
    },
    overlay: {
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
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
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    thankYouCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        elevation: 4,
    },
    thankYouText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    thankYouMessage: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#007ACC',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    closeContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    closeImage: {
        width: 20,
        height: 20
    }
});
