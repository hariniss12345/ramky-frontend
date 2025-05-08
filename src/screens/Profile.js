import React,{useState} from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import { commonStyles } from '../Global/commonStyles';
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();
  const [activeTab,setActiveTab] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f0f5' }}>
         <ScrollView style={commonStyles.scrollContent}>
              <Header navigation={navigation} />
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/icons/person3.png")}
          style={styles.profileImage}
        />
        <Image source={require('../../assets/icons/PlusCircle.png')} style={{width:30,height:30,marginTop:-28,marginLeft:60}}/>
        <Text style={styles.name}>Aman Gupta</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text style={{fontSize:18,marginLeft:20,paddingBottom:10}}>First Name</Text>
          <TextInput style={styles.input}/>
        </View>

        <View>
          <Text style={{fontSize:18,marginLeft:20,paddingBottom:10}}>Last Name</Text>
          <TextInput style={styles.input}  />
        </View>

        <View>
          <Text style={{fontSize:18,marginLeft:20,paddingBottom:10}}>Email ID</Text>
          <TextInput style={styles.input}  />
        </View>
        <View>
            <Text style={{ fontSize: 18, marginLeft: 20, paddingBottom: 10 }}>Phone Number</Text>
            <View style={styles.phoneInputContainer}>
            <Image
               source={require("../../assets/icons/india.png")}
               style={styles.flagIcon}
            />
            <TextInput
              style={styles.phoneInput}
              keyboardType="phone-pad"
            />
        </View>
       </View>
 
      </View>
    </ScrollView>
    <Footer activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor:'white'
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  iconGroup: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
    tintColor:'black'
  },
  centerContent: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginTop: -65,
    marginLeft:50
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  editButton: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    borderColor:'#007ACC',
    borderWidth:1
    
  },
  editButtonText: {
    color: "#007ACC",
    fontSize: 16,
    fontWeight:'bold'
  },
  formContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 16,
    color:'#007ACC'
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginHorizontal: 20,
    height:55,
    marginBottom:25
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 20,
    height: 55,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  
  phoneInput: {
    flex: 1,
    fontSize: 16,
  },
  
});
