import React, {Component} from 'react';
import firebase from 'firebase';
import {Text, Dimensions, Image, KeyboardAvoidingView} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common';

const {width, height} = Dimensions.get("window");

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loadingSpinner: false
  };

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loadingSpinner: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({
        email: '',
        password: '',
        error: 'Login Successful!',
        loadingSpinner: false
      });
    })
    .catch((error) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          error: 'User Created! Login Again',
          loadingSpinner: false
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Authentication Failed!',
          loadingSpinner: false
        });
      });
    });
  }

  renderButton() {
    if (this.state.loadingSpinner) {
      return <Spinner/>;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title={'Login'}
      />
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
        <Image style={styles.logoStyle} resizeMode={'stretch'} source={require('./../assets/login_logo.png')}/>
        <Card>
          <CardSection>
            <Input
              autoCorrect={false}
              placeholder={'Enter your email'}
              label={'Email'}
              keyboardType={'email-address'}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              placeholder={'Enter your password'}
              label={'Password'}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#cc0000',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  logoStyle: {
    height: 50,
    width: 180,
    alignSelf: 'center',
  },
};

export default LoginForm;
