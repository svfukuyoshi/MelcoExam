import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

type CustomButtonProps = {
  name: string
  disabled?: boolean
  onPress(): void
  style?: any
};

export function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {opacity: props.disabled ? 0.5 : 1}, props.style]}
      disabled={props.disabled}
      onPress={() => {
        props.onPress();
      }}>
      <Text
        style={styles.buttonTextStyle}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});
