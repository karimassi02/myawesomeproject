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

{
  /* <Stack.Navigator initialRouteName="Chat">
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
        </Stack.Navigator> */
}

// CECI EST LANCIEN Signup.js

// import React, {useState} from 'react';
// import {View, TextInput, Button, Image, Text} from 'react-native';
// import {showImagePicker} from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// export function SignupForm() {
//   // const [name, setName] = useState('');
//   // const [phoneNumber, setPhoneNumber] = useState('');
//   // const [avatar, setAvatar] = useState(null);
//   // const [description, setDescription] = useState('');
//   console.log('Profile:', profile);

//   const [profile, setProfile] = useState({
//     name: '',
//     phoneNumber: '',
//     avatar: null,
//     description: '',
//   });

//   const updateProfile = newProfile => {
//     setProfile(prevProfile => ({...prevProfile, ...newProfile}));
//   };

//   const handleSignup = () => {
//     // Implement signup logic here, e.g., sending data to a server
//   };
//   const selectAvatar = () => {
//     const options = {
//       title: 'Select Avatar',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         // Update the avatar state with the selected image
//         setAvatar({
//           uri: response.uri,
//           type: response.type,
//           name: response.fileName,
//         });
//       }
//     });
//   };

//   return (
//     <>
//       <View>
//         <TextInput
//           placeholder="Name"
//           value={profile.name}
//           // onChangeText={text => setName(text)}
//           onChangeText={text => updateProfile({name: text})}
//         />
//         <TextInput
//           placeholder="Phone Number"
//           value={profile.phoneNumber}
//           // onChangeText={text => setPhoneNumber(text)}
//           onChangeText={text => updateProfile({phoneNumber: text})}
//           keyboardType="phone-pad"
//         />
//         <Button title="Profile Picture" onPress={selectAvatar} />
//         {profile.avatar && (
//           <Image source={profile.avatar} style={{width: 100, height: 100}} />
//         )}

//         <TextInput
//           placeholder="Description"
//           value={profile.description}
//           // onChangeText={text => setDescription(text)}
//           onChangeText={text => updateProfile({description: text})}
//           multiline
//         />
//         <Button title="Sign Up" onPress={handleSignup} />
//       </View>
//     </>
//   );
// }
