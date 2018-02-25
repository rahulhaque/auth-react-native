import React, {Component} from 'react';
import firebase from 'firebase';
import {Text, View, Dimensions, Image, KeyboardAvoidingView} from 'react-native';
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
            .then((res) => {
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
            return <Spinner />;
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
            <View>
                <Image style={styles.logoStyle} resizeMode={'stretch'}
                       source={require('../assets/loginLogo.png')}/>
                <Card>
                    <CardSection>
                        <Input
                            autoCorrect={false}
                            placeholder={'example@email.com'}
                            label={'Email'}
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
                    <CardSection>
                        <Text style={styles.errorTextStyle}>
                            {this.state.error}
                        </Text>
                    </CardSection>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red',
        justifyContent: 'center',
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    logoStyle: {
        height: 80,
        width: 180,
        alignSelf: 'center',
    },
};

export default LoginForm;
