import { enableScreens } from 'react-native-screens';
enableScreens();

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './src/screens/MainScreen';
import { MainScreen1 } from './src/screens/MainScreen1';
import { Login } from './src/screens/Login';
import { Login1 } from './src/screens/Login1';
import { Login2 } from './src/screens/Login2';
import { Home  } from './src/screens/Home';
import { Bookings } from './src/screens/Bookings'
import { Bookings1  } from './src/screens/Bookings1';
import { Bookings2 } from './src/screens/Bookings2';
import { Bookings3 } from './src/screens/Bookings3';
import { ProjectUpdates } from './src/screens/ProjectUpdates';
import { ProjectUpdates1 } from './src/screens/ProjectUpdates1';
import { Visits } from './src/screens/Visits';
import { SideBar } from './src/screens/SideBar';
import { Logout } from './src/screens/Logout';
import { FAQ } from './src/screens/FAQ';
import { Referrals } from './src/screens/Referrals'
import { ReferralForm } from './src/screens/ReferralForm'
import { FormPage } from './src/screens/FormPage'
import { UpcomingEvents } from './src/screens/UpcomingEvents';
import { TDS } from './src/screens/TDS';
import { Invoices } from './src/screens/Invoices';
import { Invoices2 } from './src/screens/Invoices2';
import { Documents } from './src/screens/Documents';
import { Profile } from './src/screens/Profile';
import { ContactUs } from './src/screens/ContactUs';
import { Support } from './src/screens/Support';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainScreen1" component={MainScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Login1" component={Login1} options={{headerShown: false}}/>
        <Stack.Screen name="Login2" component={Login2} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Bookings" component={Bookings} options={{headerShown: false}}/>
        <Stack.Screen name="Bookings1" component={Bookings1} options={{headerShown: false}}/>
        <Stack.Screen name="Bookings2" component={Bookings2} options={{headerShown: false}}/> 
        <Stack.Screen name="Bookings3" component={Bookings3} options={{headerShown:false}}/>
        <Stack.Screen name="Project Updates" component={ProjectUpdates} options={{headerShown:false}}/>
        <Stack.Screen name="Project Updates1" component={ProjectUpdates1} options={{headerShown:false}}/>
        <Stack.Screen name="Visits" component={Visits} options={{headerShown:false}}/>
        <Stack.Screen name="Side Bar" component={SideBar} options={{headerShown:false}}/>
        <Stack.Screen name="Logout" component={Logout} options={{headerShown:false}}/>
        <Stack.Screen name="FAQ" component={FAQ} options={{headerShown:false}}/>
        <Stack.Screen name="Referrals" component={Referrals} options={{headerShown:false}}/>
        <Stack.Screen name="ReferralForm" component={ReferralForm} options={{headerShown:false}}/>
        <Stack.Screen name="Support"  component={Support} options={{headerShown:false}}/>
        <Stack.Screen name="Form Page" component={FormPage} options={{headerShown:false}}/>
        <Stack.Screen name="Upcoming Events" component={UpcomingEvents} options={{headerShown:false}}/>
        <Stack.Screen name="TDS" component={TDS} options={{headerShown:false}}/>
        <Stack.Screen name="Invoices" component={Invoices} options={{headerShown:false}}/>
        <Stack.Screen name="Invoices2" component={Invoices2} options={{headerShown:false}}/>
        <Stack.Screen name="Documents" component={Documents} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Contact Us" component={ContactUs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
