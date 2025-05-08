import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../ReusableComponents/Header';
import { commonStyles } from '../Global/commonStyles';
import { useNavigation } from "@react-navigation/native";


export function TDS() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
            <ScrollView style={commonStyles.scrollContent}>
                <Header navigation={navigation} />

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>How to pay TDS through Challan 26QB online?</Text>
                    <Text style={styles.cardText}>
                        At Ramky Estates, we guide you through the TDS payment process. Visit the TIN NSDL website, fill in property, buyer, and seller details, and complete the payment using net banking or a debit card. Download the receipt for your records.
                    </Text>
                    <Text style={styles.link}>Website: https://www.incometax.gov.in/iec/foportal</Text>
                </View>

                {[
                    {
                        step: "Step 1",
                        desc: "Log in to your account on the Income Tax e-filing portal. Select e-File > click on e-Pay Tax from the dropdown.",
                        image: require('../../assets/images/step1.png')
                    },
                    {
                        step: "Step 2",
                        desc: "Click on ‘+ New Payment’",
                        image: require('../../assets/images/step2.png')
                    },
                    {
                        step: "Step 3",
                        desc: "Click on the proceed button under ‘26QB - TDS on Property’.",
                        image: require('../../assets/images/step3.png')
                    },
                    {
                        step: "Step 4",
                        desc: "Add Buyer’s details. Most will be auto-filled, but can be edited. Click on ‘Continue’.",
                        image: require('../../assets/images/step4.png')
                    },
                    {
                        step: "Step 5",
                        desc: "Add Seller’s details including PAN and address.",
                        image: require('../../assets/images/step5.png')
                    },
                    {
                        step: "Step 6",
                        desc: "Add Property details including type, address, agreement date, and value. Tax will be auto-calculated. Click 'Continue'.",
                        image: require('../../assets/images/step6.png')
                    },
                    {
                        step: "Step 7",
                        desc: "Choose payment mode and complete the transaction. A challan will be generated.",
                        image: require('../../assets/images/step6.png')
                    },
                ].map(({ step, desc, image }, idx) => (
                    <View style={styles.card} key={idx}>
                        <Text style={styles.cardTitle}>{step}</Text>
                        <Text style={styles.cardText}>{desc}</Text>
                        <Image source={image} style={styles.cardImage} />
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginBottom: 25,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
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
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    cardText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
        lineHeight: 20,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    link: {
        fontSize: 14,
        color: '#007ACC',
        marginTop: 10,
        fontStyle: 'italic',
    },
});
