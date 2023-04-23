import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {CustomButton} from '../component/CustomButton';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default function OtpScreen({navigation, route}) {
  const [otp, setOtp] = useState('');

  function verifyOtp() {
    if (route.params.otp === otp) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } else {
      Alert.alert('Invalid OTP');
    }
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 25,
      }}>
      <SmoothPinCodeInput
        cellSize={(Dimensions.get('window').width - 50) / 7}
        codeLength={6}
        value={otp}
        onTextChange={val => {
          setOtp(val);
        }}
      />
      <CustomButton
        style={{marginTop: 20}}
        name={'VERIFY OTP'}
        disabled={otp.length !== 6}
        onPress={() => {
          verifyOtp();
        }}
      />
    </View>
  );
}
