import React from 'react';
import {Text, StyleSheet, View, Button, Image, TextInput} from 'react-native';

const SignIn = ({navigation}) => {
  function navigate() {
    navigation.navigate('signUp');
    console.log('Buttonpressed');
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
          style={styles.imageSize}
          source={require('./assets/images/Karim.png')}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.titleStyle}>Welcome Back </Text>
        <View style={styles.formStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email Address"></TextInput>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}></TextInput>
          <Button title="Log In" color="black" backgroundColor="white" />
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}>
            {' '}
            Don't have an account ? Create one now !{' '}
          </Text>
          <Button
            title="Sign Up"
            onPress={navigate}
            color="black"
            backgroundColor="white"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '60%',
    backgroundColor: '#f2e3aa',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imageSize: {
    width: '100%',
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 30,
    marginLeft: '22%',
    marginTop: '10%',
    fontWeight: 'bold',
    color: 'black',
  },
  formStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
  },
  inputStyle: {
    width: '75%',
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 30,
  },
  signUpView: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 15,
  },
  signUpText: {
    paddingBottom: 15,
  },
});
export default SignIn;
