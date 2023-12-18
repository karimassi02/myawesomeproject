import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './ChatScreen';
import CallsScreen from './CallsScreen';
import ContactScreen from './ContactScreen';
import ProfileScreen from './ProfileScreen';
import auth from '@react-native-firebase/auth';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <Tab.Navigator>
          <Tab.Screen name="Chats" component={ChatScreen} />
          <Tab.Screen name="Calls" component={CallsScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </>
  );
};

const AppHeader: React.FC<{title: string}> = ({title}) => {
  //reactfc c'est du typescript qui a fixé erreur
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#128C7E',
    padding: 20,
  },
});

export default App;
