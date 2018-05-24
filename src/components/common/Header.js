import React from 'react';
import {Text} from 'react-native';
import {LinearGradient} from 'expo';

const Header = (props) => {
  return (
    <LinearGradient colors={['#0cb6ba', '#f7921d']} start={[0, 0]} end={[1, 0]} style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
      <Text>We Give You Access.</Text>
    </LinearGradient>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24,
    color: '#633991',
    fontWeight: '600',
  }
};

export {Header};