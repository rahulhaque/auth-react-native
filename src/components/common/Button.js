import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Gradient} from './Gradient';

const Button = (props) => {

    const {onPress, title, style} = props;

    return (
        <TouchableOpacity onPress={onPress} style={style || styles.buttonStyle}>
            <Gradient colors={['#633991', '#c1156c']} start={[0, 0]} end={[1, 0]} style={{borderRadius:5}}>
                <Text style={styles.textStyle}>{title}</Text>
            </Gradient>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        // borderWidth: 1,
        // borderColor: '#007aff',
        borderRadius: 5,
        // margin: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
    }
};

export { Button };