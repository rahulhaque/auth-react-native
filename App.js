import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA9GvHoZB5GJcJUkXQCoFIYB2_N2pltRdo',
            authDomain: 'auth-b6a84.firebaseapp.com',
            databaseURL: 'https://auth-b6a84.firebaseio.com',
            projectId: 'auth-b6a84',
            storageBucket: 'auth-b6a84.appspot.com',
            messagingSenderId: '57145295130'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText={'Authentications!'}/>
                <LoginForm/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#faf6fb',
    }
};
