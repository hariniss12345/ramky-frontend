import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity ,Image,ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';


export function FormPage() {
    const [issue, setIssue] = useState('');
    const [otherIssue, setOtherIssue] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigation = useNavigation();

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <View style={styles.container}>
        
            {submitted ? (
                <View>
                    <Text style={styles.successText}>Your request has been raised successfully!</Text>
                    <Text style={styles.successSubtext}>
                        We have received your service request and it is now being reviewed by our team.
                        Thank you for contacting Ramky Estates.
                    </Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.navigate('Support')}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>  
                    <Image source={require('../../assets/icons/Chevron.png')} style={{width:30,height:30,marginTop:-215}}/>
                    <Text style={{marginLeft:30,fontSize:24,fontWeight:'bold',marginTop:-30,paddingBottom:30}}>Back</Text>
                    <Text style={styles.formTitle}>Raise a Service Request</Text>
                    <Text style={{fontSize:15,paddingBottom:20}}>Please select the type of issue that best matches your inquiry or request below.</Text>

                    <Text style={styles.label}>Select an issue</Text>
                    <TextInput
                        style={styles.input}
                        value={issue}
                        onChangeText={setIssue}
                        placeholder="Select an issue you have faced"
                    />

                    <Text style={styles.label}>Others</Text>
                    <TextInput
                        style={styles.input}
                        value={otherIssue}
                        onChangeText={setOtherIssue}
                        placeholder="Write an issue"
                    />

                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textarea]}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Describe your issue"
                        multiline
                        numberOfLines={4}
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </>
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        justifyContent: 'center',
        marginTop:50
    },
    formTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        marginTop: 10,
        marginBottom: 4,
        fontWeight: "500",
        fontSize:18
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 8,
        marginBottom: 10,
    },
    textarea: {
        height: 100,
        textAlignVertical: "top",
    },
    card: {
        backgroundColor: "#f0fdf4",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    successText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textAlign: "center",
    },
    successSubtext: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
        color: "black",
    },
    submitButton: {
        backgroundColor: "#007ACC",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
