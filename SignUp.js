import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, Image, TextInput} from 'react-native';
import {auth} from './Firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  function nameChange(value) {
    setName(value);
  }
  function navigate() {
    navigation.navigate('signIn');
  }

  function createUser() {
    createUserWithEmailAndPassword(auth, email, password).then(() => {});
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
        <Text style={styles.titleStyle}> Create your account</Text>
        <View style={styles.formStyle}>
          <View style={styles.namesView}>
            <TextInput
              style={styles.nameInputStyle}
              placeholder="First Name"
              value={name}
              onChangeText={nameChange}></TextInput>
            <TextInput
              style={styles.nameInputStyle}
              placeholder="Last Name"
              value={lastName}></TextInput>
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email Address"
            value={email}
            onChangeText={val => setEmail(val)}></TextInput>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={val => setPassword(val)}></TextInput>
          <Button
            title="Sign Up"
            color="black"
            backgroundColor="white"
            onPress={createUser}
          />
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}>
            {' '}
            Already have an account ? Log In now !{' '}
          </Text>
          <Button
            title="Log In"
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
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '70%',
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
    marginTop: '10%',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    textAlign: 'center',
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
  nameInputStyle: {
    width: '35%',
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 9,
    marginLeft: 9,
  },
  namesView: {
    display: 'flex',
    flexDirection: 'row',
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

export default SignUp;
