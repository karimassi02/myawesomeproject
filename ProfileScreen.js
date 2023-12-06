import React from 'react';
import {View, Text, Image} from 'react-native';

const ProfileScreen = ({profile}) => {
  return (
    <View>
      {/* <Text>Name: {profile.name}</Text>
      <Text>Phone Number: {profile.phoneNumber}</Text>
      <Image source={profile.avatar} style={{width: 100, height: 100}} />
      <Text>Description: {profile.description}</Text> */}
    </View>
  );
};

export default ProfileScreen;
