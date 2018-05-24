import React from 'react';
import firebase from 'firebase';
import {LinearGradient} from 'expo'
import {Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  state = {
    loggedIn: null
  };

  componentWillMount() {
    // This whole config can be get from firebase
    firebase.initializeApp({
      apiKey: 'your_firebase_api_key',
      authDomain: 'your_firebase_auth_domain',
      databaseURL: 'your_firebase_db_url',
      projectId: 'your_firebase_project_id',
      storageBucket: 'your_firebase_storage_bucket',
      messagingSenderId: 'your_firebase_sender_id'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }
      else {
        this.setState({loggedIn: false})
      }
    });
  }

  logoutUser() {
    firebase.auth().signOut();
  }

  renderContent() {
    if (this.state.loggedIn === true) {
      return (
        <Button onPress={this.logoutUser.bind(this)} style={{justifyContent: 'center'}} title={'Log Out'}/>
      );
    }
    else if (this.state.loggedIn === false) {
      return (
        <LoginForm/>
      );
    }
    else {
      return (
        <Spinner/>
      );
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['rgba(12, 182, 186, 0.8)', 'rgba(247, 146, 29, 0.8)']}
        start={[0, 0]}
        end={[1, .8]}
        style={styles.container}>
        {this.renderContent()}
      </LinearGradient>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#faf6fb',
    justifyContent: 'center',
  },
};
