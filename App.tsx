import {useState, useEffect} from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './ChatScreen';
import CallsScreen from './CallsScreen';
import ContactScreen from './ContactScreen';
import ProfileScreen from './ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import SignIn from './SignIn';
import SignUp from './SignUp';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Button title="hello" onPress={() => console.log('hello world')}></Button>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="signIn" component={SignIn} />
          <Stack.Screen name="signUp" component={SignUp} />
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
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
