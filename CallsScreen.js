// ChatScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';

function CallsScreen({navigation}) {
  return (
    <View>
      {/* <Text>Call Screen</Text> */}
      <Button
        title="Go to Calls"
        onPress={() => navigation.navigate('Calls')}
      />
    </View>
  );
}

export default CallsScreen;
