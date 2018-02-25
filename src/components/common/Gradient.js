import React from 'react';
import {LinearGradient} from 'expo';

const Gradient = (props) => {

    const {colors, start, end, style} = props;

    return (
        <LinearGradient
            colors={colors || ['#909191', '#c1678e']}
            start={start}
            end={end}
            style={style || {borderRadius:5}}>
            {props.children}
        </LinearGradient>
    );
};

export {Gradient};