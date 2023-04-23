import axios from 'axios';
import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {CustomButton} from '../component/CustomButton';
import {isEmpty} from '../helper/function';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    const url = 'http://cb21-136-158-120-233.ngrok.io';
    axios
      .post(`${url}/login`, {username, password})
      .then(res => {
        if (res.data.isSuccess) {
          navigation.navigate('Otp', {otp: res.data.otp});
        } else {
          console.log('LSDFJLSF');
          Alert.alert(res.data.errorMessage);
        }
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
      }}>
      <TextInput
        style={styles.textInputStyle}
        value={username}
        placeholderTextColor={`grey`}
        autoCapitalize="none"
        placeholder="Username"
        onChangeText={val => {
          setUsername(val);
        }}
      />
      <TextInput
        style={styles.textInputStyle}
        value={password}
        placeholder="Password"
        placeholderTextColor={`grey`}
        secureTextEntry
        onChangeText={val => {
          setPassword(val.trim());
        }}
      />
      <CustomButton
        name={'LOGIN'}
        disabled={isEmpty(username.trim()) || isEmpty(password.trim())}
        onPress={() => {
          login();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    width: '100%',
    marginBottom: 12,
    color: 'black',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});
