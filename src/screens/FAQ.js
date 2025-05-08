import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';
import { useNavigation } from "@react-navigation/native";

export function FAQ() {
  const navigation = useNavigation();
  const [activeTab,setActiveTab] = useState('')
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (questionIndex) => {
    setActiveQuestion((prevIndex) => (prevIndex === questionIndex ? null : questionIndex));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={commonStyles.scrollContent}>
        <Header navigation={navigation} />
      <Text style={{ fontSize: 24, marginLeft: 10, marginBottom: 20 }}>FAQ'S</Text>

      <View style={styles.tabRow}>
        <Text style={styles.tabText}>Billing</Text>
        <Text style={styles.tabText}>Agreement</Text>
        <Text style={styles.tabText}>Home Loan</Text>
      </View>

      <View style={styles.qaSection}>
        <TouchableOpacity
          style={[styles.card, activeQuestion === 0 && styles.activeCard]}
          onPress={() => toggleAnswer(0)}
        >
          <View style={styles.questionRow}>
            <Text style={[styles.question, activeQuestion === 0 && styles.activeQuestionText]}>
              I paid a token amount. Do I still pay 10% as first installment?
            </Text>
            <Image source={require('../../assets/icons/Shape.png')} style={[styles.inlineIcon, activeQuestion === 0 && { tintColor: '#fff' }]} />
          </View>
        </TouchableOpacity>

        {activeQuestion === 0 && (
          <View style={styles.answer}>
            <Text>No, it’s 10% minus the token/booking amount already paid.</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.card, activeQuestion === 1 && styles.activeCard]}
          onPress={() => toggleAnswer(1)}
        >
          <View style={styles.questionRow}>
            <Text style={[styles.question, activeQuestion === 1 && styles.activeQuestionText]}>
              Invoice says 7.5% GST, but only 5% charged?
            </Text>
            <Image source={require('../../assets/icons/Shape.png')} style={[styles.inlineIcon, activeQuestion === 1 && { tintColor: '#fff' }]} />
          </View>
        </TouchableOpacity>

        {activeQuestion === 1 && (
          <View style={styles.answer}>
            <Text>7.5% = GST on land + building. 5% GST is for building only.</Text>
          </View>
        )}
      </View>
      </ScrollView>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    marginBottom: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    tintColor: 'black',
  },
  qaSection: {
    gap: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  activeCard: {
    backgroundColor: '#007ACC',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flexShrink: 1,
  },
  activeQuestionText: {
    color: '#FFFFFF',
  },
  inlineIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  answer: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  tabText: {
    fontSize: 20,
    fontWeight: '600',
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
