import React, {useState} from 'react';
import {View, TextInput, Button, Image, Text} from 'react-native';
import {showImagePicker} from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [description, setDescription] = useState('');

  const handleSignup = () => {
    // Implement signup logic here, e.g., sending data to a server
  };
  const selectAvatar = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Update the avatar state with the selected image
        setAvatar({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
      }
    });
  };

  return (
    <>
      <View>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <Button title="Profile Picture" onPress={selectAvatar} />
        {avatar && <Image source={avatar} style={{width: 100, height: 100}} />}

        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
        />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </>
  );
};

export default SignupForm;
