import React from 'react';
import { View } from 'react-native';

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#fcd13a',
                top: -400,
                width: 1000,
                height: 1200,
                transform: [
                    { rotate: '-70deg' },
                ],
            }}
        />
    );
};