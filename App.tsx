/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState, useEffect} from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './ChatScreen';
import CallsScreen from './CallsScreen';
import ContactScreen from './ContactScreen';
import ProfileScreen from './ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupForm from './SignUp';
import auth from '@react-native-firebase/auth';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
function Tweet() {
  const [name, setName] = useState('');
  const maxLength = 140;
  const words = name.split(' ').filter(Boolean).length;
  const sentences = name.split('.').filter(Boolean).length; // a changer

  return (
    <>
      <TextInput
        placeholder="Enter text"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text> My name is : {name}</Text>
      <Text>Number of characters : {name.length}</Text>
      <Text>Number of words : {words}</Text>
      <Text>Number of sentences : {sentences}</Text>
      <Text> / {maxLength - name.length}</Text>
    </>
  );
}

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check if the user is logged in using Firebase or your authentication system
  //   const unsubscribe = auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setLoggedIn(true); // User is logged in
  //     } else {
  //       setLoggedIn(false); // User is not logged in
  //     }
  //   });

  //   // Unsubscribe from the authentication listener when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <AppHeader title="Whatsapp" />
      {loggedIn ? <App /> : <SignupForm />}

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chats" component={ChatScreen} />
          <Tab.Screen name="Calls" component={CallsScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName="Chat">
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
}

const AppHeader: React.FC<{title: string}> = ({title}) => {
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
  },
  header: {
    backgroundColor: '#128C7E',
    padding: 20,
  },
});

export default App;
