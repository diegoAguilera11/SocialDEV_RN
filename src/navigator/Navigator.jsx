import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import { HomeScreen } from '../views/HomeScreen';
import { AuthContext } from '../context/AuthContext';
import LoadingScreen from '../views/LoadingScreen';
import { BottomNavigator } from './bottomTab/BottomNavigator';

const Stack = createStackNavigator();

export const Navigator = () => {
    const { status } = useContext(AuthContext);


    if(status === 'checking') {
        return <LoadingScreen/>
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                (status !== 'authenticated')
                    ? (
                        <>

                            <Stack.Screen name='Login' component={LoginScreen} />
                            <Stack.Screen name='Register' component={RegisterScreen} />

                        </>
                    )
                    : (
                        <Stack.Screen name='BottomTab' component={BottomNavigator} />
                    )
            }

        </Stack.Navigator>
    )
}