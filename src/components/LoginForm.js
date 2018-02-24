import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common';
import firebase from 'firebase';

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

        firebase.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    email: '',
                    password: '',
                    error: 'Login Successful!',
                    loadingSpinner: false
                });
            })
            .catch(() => {
                firebase.auth.createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({
                            error: 'User Created! Login Again',
                            loadingSpinner: false
                        });
                    })
                    .catch(() => {
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
        alignSelf: 'center',
        color: 'red',
        justifyContent: 'center',
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
    }
};

export default LoginForm;
