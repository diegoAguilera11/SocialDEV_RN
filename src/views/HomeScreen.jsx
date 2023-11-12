import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const HomeScreen = () => {
    // Llamar a hooks
    const { logOut } = useContext(AuthContext);
    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity
                onPress={logOut}
            >
                <Text>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>
    )
}