import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = (props) => {

    const {size} = props;

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};

const styles = {
    spinnerStyle: {

    }
};

export {Spinner};