import React from 'react';
import {Text, StyleSheet, View, Button, Image, TextInput} from 'react-native';
// import './assets/images/Karim.png'

const SignIn = ({navigation}) => {
  function navigate() {
    console.log('Button pressed');
    navigation.navigate('signUp');
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
            placeholder="Password"></TextInput>
          <Button
            title="Log In"
            onPress={navigate}
            style={styles.buttonStyle}
          />
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
  buttonStyle: {
    backgroundColor: 'black',
    color: 'white',
    width: 100,
  },
});
export default SignIn;
