import React, { act, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../Global/commonStyles';

export function Bookings1() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const navigation = useNavigation();

  const handleEyeClick = (docName) => {
    setSelectedDocument(docName);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedDocument(null);
  };

  const toggleSection = (sectionName) => {
    setActiveSection((prevSection) => (prevSection === sectionName ? null : sectionName));
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return { backgroundColor: 'green' };
      case 'unpaid':
        return { backgroundColor: 'orange' };
      case 'partial paid':
        return { backgroundColor: 'blue' };
      default:
        return { backgroundColor: 'gray' };
    }
  };

  const data = [
    {
      applicant: 'First Applicant',
      name: 'Ayush Metha',
      img1: require('../../assets/icons/ArrowRight.png'),
      img2: require('../../assets/icons/blue.png')
    },
    {
      applicant: 'Second Application',
      name: 'Rekha Metha',
      img1: require('../../assets/icons/ArrowRight.png'),
      img2: require('../../assets/icons/orange.png')
    }
  ]

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
            <Image source={require('../../assets/icons/Chevron.png')} style={{ width: 30, height: 30 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 35, marginTop: -28, paddingBottom: 20 }}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Ramky One Odyssey</Text>
          <Text style={styles.label}>Booking ID: 0090</Text>

          {data.map((ele, index) => (
            <View key={index} style={commonStyles.card}>
              <Text style={{ fontWeight: 'bold' }}>{ele.applicant}</Text>
              <Text>{ele.name}</Text>
              <TouchableOpacity
                onPress={() =>
                  index === 0
                    ? navigation.navigate('Bookings2')
                    : navigation.navigate('Bookings3')
                }>
                <Text style={styles.view}>View Details</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  index === 0
                    ? navigation.navigate('Bookings2')
                    : navigation.navigate('Bookings3')}>
                <Image source={ele.img1} style={styles.arrow} />
              </TouchableOpacity>
              <Image source={ele.img2} style={styles.statusIcon} />
            </View>
          ))}

          <View style={styles.sectionsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => toggleSection('booking')} style={styles.section}>
                <Text style={styles.sectionTitle}>Booking Details</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSection('document')} style={styles.section}>
                <Text style={styles.sectionTitle}>Document</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSection('payment')} style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Plan</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {activeSection === 'booking' && (
            <View style={styles.card}>
              {[
                { label: 'Booking Date:', value: '12/06/2024' },
                { label: 'Flat/Villa:', value: 'Flat' },
                { label: 'Tower/Block/Villa:', value: 'Block A' },
                { label: 'Unit Type:', value: '2BHK' },
                { label: 'Unit Number:', value: '801' },
                { label: 'Square Feet:', value: '1235' },
                { label: 'No. of car parks:', value: '2' },
                { label: 'Property Value (GST Ex.):', value: '2,11,69,460.00' },
                { label: 'Other Charges (GST Ex.):', value: '-' },
                { label: 'Maintenance (GST Ex.):', value: '-' },
                { label: 'Corpus Fund (GST Ex.):', value: '-' },
                { label: 'Legal & Documentation Charges:', value: '-' },
              ].map((item, idx) => (
                <View key={idx} style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.label}</Text>
                  <Text style={{ fontWeight: 'normal' }}>{item.value}</Text>
                </View>
              ))}
            </View>
          )}




          {activeSection === 'document' && (
            <View style={commonStyles.card}>
              {['Booking Form', 'Invoice Copy', 'Agreement of Sale', 'Sale Deed', 'Sale Deed Acknowledge', 'Handover & Possession Letter'].map((doc, index) => (
                <View key={index} style={styles.cardContainer}>
                  <View style={styles.docCard}>
                    <Text style={styles.docLabel}>{doc}</Text>
                    <View style={styles.iconRow}>
                      <TouchableOpacity onPress={() => handleEyeClick(doc)}>
                        <Image source={require('../../assets/icons/attachment.png')} style={styles.icon} />
                      </TouchableOpacity>
                      <Image source={require('../../assets/icons/DownloadSimple.png')} style={styles.icon} />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}


          {/* Payment Plan */}
          {activeSection === 'payment' && (
            <View style={styles.card}>
              <View style={styles.cardRowContainer}>
                <View style={styles.amountCard}>
                  <Text style={styles.amountText}>₹29.9 L</Text>
                  <Text style={styles.amountLabel}>+GST</Text>
                  <Text style={styles.amountLabel}>Total Amount</Text>
                </View>
                <View style={styles.amountCard1}>
                  <Text style={styles.amountText}>₹22.2 L</Text>
                  <Text style={styles.amountLabel}>+GST</Text>
                  <Text style={styles.amountLabel}>Amount Due</Text>
                </View>
                <View style={styles.amountCard2}>
                  <Text style={styles.amountText}>₹7.6 L</Text>
                  <Text style={styles.amountLabel}>+GST</Text>
                  <Text style={styles.amountLabel}>Amount Paid</Text>
                </View>
              </View>


              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.iconButton}>
                  <Image source={require('../../assets/icons/Shape.png')} style={[styles.buttonIcon, { objectFit: 'contain' }]} />
                  <Text style={styles.buttonText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Image source={require('../../assets/icons/Search.png')} style={[styles.buttonIcon, { tintColor: 'black' }]} />
                  <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.paymentCardsContainer}>
                {[
                  { title: 'Booking Amount', receipt: 'RM001', status: 'Paid', amount: '5,66,255', dueDate: '25/06/2025', paymentDate: '25/06/2025', unpaid: '0' },
                  { title: '30 Days from Booking', receipt: 'RM002', status: 'Partial Paid', amount: '5,66,255', dueDate: '25/06/2025', paymentDate: '25/06/2025', unpaid: '0' },
                  { title: 'Basement Slab', receipt: 'RM003', status: 'Unpaid', amount: '5,66,255', dueDate: '25/06/2025', paymentDate: '25/06/2025', unpaid: '5,66,255' },
                ].map((item, index) => (
                  <View key={index} style={styles.paymentCard}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text>Receipt No: {item.receipt}</Text>
                    <View style={[styles.paymentButton, getStatusStyle(item.status)]}>
                      <Text style={{ color: 'white' }}>{item.status}</Text>
                    </View>
                    <Text>Amount: ₹{item.amount}</Text>
                    <Text>Due Date: {item.dueDate}</Text>
                    <Text>Payment Date: {item.paymentDate}</Text>
                    <Text>Unpaid Amount: ₹{item.unpaid}</Text>
                    <Image source={require('../../assets/icons/eyeBox.png')} style={{ width: 30, height: 30, marginTop: 10 }} />
                    <Image source={require('../../assets/icons/download.png')} style={{ width: 30, height: 30, marginLeft: 40, marginTop: -30 }} />
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </Animated.View>

      {showOverlay && (
        <Modal visible={showOverlay} transparent animationType="fade">
          <Pressable style={styles.modalBackdrop} onPress={handleCloseOverlay}>
            <View style={styles.overlayContent}>
              <Pressable style={styles.closeButton} onPress={handleCloseOverlay}>
                <Text style={styles.customButtonText}>Close</Text>
              </Pressable>
              <Image
                source={require('../../assets/images/Rectangle.png')}
                style={styles.fullImage}
                resizeMode="contain"
              />
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  label: { fontSize: 16, color: '#555', paddingBottom: 20 },
  view: { color: '#007ACC', marginTop: 30, fontSize: 15 },
  arrow: { width: 20, height: 20, marginLeft: 90, marginTop: -20 },
  statusIcon: { width: 50, height: 50, position: 'absolute', right: 10, bottom: 10 },
  sectionsContainer: { flexDirection: 'row', marginVertical: 12 },
  section: { marginRight: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  docCard: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  iconRow: { flexDirection: 'row', gap: 10 },
  icon: { width: 24, height: 24 },
  amountCard: { backgroundColor: '#007ACC', borderRadius: 10, padding: 10, marginRight: 10 },
  amountCard1: { backgroundColor: 'orange', borderRadius: 10, padding: 10, marginRight: 10 },
  amountCard2: { backgroundColor: 'green', borderRadius: 10, padding: 10 },
  amountText: { color: 'white', fontSize: 16 },
  amountLabel: { color: 'white', fontSize: 11 },
  cardRowContainer: { flexDirection: 'row', marginBottom: 16 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  iconButton: { flexDirection: 'row', alignItems: 'center' },
  buttonIcon: { width: 20, height: 20, marginRight: 8 },
  buttonText: { fontSize: 14 },
  paymentCardsContainer: { gap: 12 },
  paymentCard: { padding: 16, backgroundColor: '#f0f0f0', borderRadius: 10 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  paymentButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginVertical: 6,
  },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  overlayContent: { backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  closeButton: { alignSelf: 'flex-end' },
  customButtonText: { color: 'blue', fontWeight: 'bold' },
  fullImage: { width: 300, height: 400 },
});
