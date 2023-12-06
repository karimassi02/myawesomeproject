import React from 'react';
import {Text, StyleSheet, View, Button, Pressable} from 'react-native';

const SignIn = ({navigation}) => {
  //   function navigate() {
  //     navigation.navigate('signUp');
  //   }
  return (
    <View>
      <Text>
        Sign InSign InSign InSign InSign InSign InSign InSign InSign InSign
        InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign
        InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign
        InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign
        InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign
        InSign In
      </Text>
      <Pressable
        style={styles.test}
        onPress={() => navigation.navigate('signUp')}>
        <Text> Go to sign up </Text>
      </Pressable>
      <Button
        style={styles.test}
        title="go to singup"
        onPress={() => navigation.navigate('signUp')}>
        &gt;
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red',
  },
});
export default SignIn;
