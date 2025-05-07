import React, { useState } from 'react';
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
    {}
  ]

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icons/Chevron.png')} style={{ width: 30, height: 30 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 35, marginTop: -28,paddingBottom: 20 }}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Ramky One Odyssey</Text>
          <Text style={styles.label}>Booking ID: 0090</Text>

          <View style={styles.card}>
            <Text style={{ fontWeight: 'bold' }}>First Applicant</Text>
            <Text>Ayush Mehta</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Bookings3')}>
                <Text style={styles.view}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Bookings4')}>
               <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrow} />
            </TouchableOpacity>
            <Image source={require('../../assets/icons/blue.png')} style={styles.statusIcon} />
          </View>

      
          <View style={styles.card}>
            <Text style={{ fontWeight: 'bold' }}>Second Applicant</Text>
            <Text>Rekha Mehta</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Bookings4')}>
                <Text style={styles.view}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Bookings4')}>
               <Image source={require('../../assets/icons/ArrowRight.png')} style={styles.arrow} />
            </TouchableOpacity>
            <Image source={require('../../assets/icons/orange.png')} style={styles.statusIcon} />
          </View>

          
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
              <Text style={{fontSize:16,fontWeight:'bold'}}>Booking Date: </Text>
              <Text style={{fontWeight:'normal'}}>12/06/2024</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Flat/Villa:</Text>
              <Text style={{fontWeight:'normal'}}>Flat</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Tower/Block/Villa: </Text>
              <Text style={{fontWeight:'normal'}}>Block A</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Unit Type: </Text>
              <Text style={{fontWeight:'normal'}}>2BHK</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Unit Number: </Text>
              <Text style={{fontWeight:'normal'}}>801</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Square Feet: </Text>
              <Text style={{fontWeight:'normal'}}>1235</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>No. of car parks:  </Text>
              <Text style={{fontWeight:'normal'}}>2</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Property Value (GST Ex.):</Text>
              <Text style={{fontWeight:'normal'}}>2,11,69,460.00</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Other Charges (GST Ex.):</Text>
              <Text style={{fontWeight:'normal'}}>-</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Maintenance (GST Ex.):</Text>
              <Text style={{fontWeight:'normal'}}>-</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Corpus Fund (GST Ex.):</Text>
              <Text style={{fontWeight:'normal'}}>-</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Legal & Documentation Charges:</Text>
              <Text style={{fontWeight:'normal'}}>-</Text>
            </View>
          )}

          {activeSection === 'document' && (
            <View style={styles.card}>
              {['Booking Form', 'Invoice Copy', 'Agreement of Sale', 'Sale Deed', 'Sale Deed Acknowledge','Handover & Possession Letter'].map((doc, index) => (
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
                  <Image source={require('../../assets/icons/Shape.png')} style={[styles.buttonIcon,{objectFit:'contain'}]} />
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
                    <Image source={require('../../assets/icons/eyeBox.png')} style={{width:30,height:30,marginTop:10}}/>
                    <Image source={require('../../assets/icons/download.png')} style={{width:30,height:30,marginLeft:40,marginTop:-30}}/>
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
  scroll: { paddingBottom: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  label: { fontSize: 16, color: '#555',paddingBottom:20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  view: { color: '#007ACC', marginTop: 30,fontSize:15},
  arrow: {width: 20, height: 20,marginLeft:90,marginTop:-20 },
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
