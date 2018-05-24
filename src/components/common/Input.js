import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = (props) => {

  const {label, value, onChangeText, autoCorrect, placeholder, secureTextEntry, keyboardType} = props;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    backgroundColor: '#fff',
    height: 40,
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#633991',
    paddingLeft: 5,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};