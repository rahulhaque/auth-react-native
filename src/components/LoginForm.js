import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: ''
    };

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: ''});

        firebase.auth.signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth.createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication failed!'});
                    });
            });
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
                        <Button
                            onPress={this.onButtonPress.bind(this)}
                            title={'Login'}
                        />
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
