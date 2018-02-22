import React, {Component} from 'react';
import {} from 'react-native';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoCorrect={false}
                        placeholder={'example@email.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholder={'Enter your password'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button title={'Login'}/>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
