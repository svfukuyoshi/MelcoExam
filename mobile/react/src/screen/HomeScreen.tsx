import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../component/CustomButton';

export default function HomeScreen({navigation}) {
  function logout() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 25,
      }}>
      <CustomButton
        name={'LOGOUT'}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    width: '100%',
    marginBottom: 12,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});
