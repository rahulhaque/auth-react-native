import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {LinearGradient} from 'expo'
import {Header, Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA9GvHoZB5GJcJUkXQCoFIYB2_N2pltRdo',
            authDomain: 'auth-b6a84.firebaseapp.com',
            databaseURL: 'https://auth-b6a84.firebaseio.com',
            projectId: 'auth-b6a84',
            storageBucket: 'auth-b6a84.appspot.com',
            messagingSenderId: '57145295130'
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
