import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert, StyleSheet } from 'react-native';
import React, { useContext } from 'react'
import { loginStyles } from '../theme/loginTheme';
import { Background } from '../components/Background';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

const RegisterScreen = ({ navigation }) => {

    const { signUp } = useContext(AuthContext);
    const {name, email, password, onChange}= useForm({
        name: '',
        email: '',
        password: ''
    });

    const onSignIn = () => {
        Keyboard.dismiss();
        signUp({ name, email, password })
    }

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer}>
                    <Text style={loginStyles.title}>Registrate</Text>

                    {/* Nombre */}
                    <Text style={loginStyles.label}>Nombre</Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Ingrese su nombre'
                        placeholderTextColor="black"

                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                    />

                    {/* Email */}
                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Ingrese su email'
                        placeholderTextColor="black"
                        keyboardType='email-address'

                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                    />

                    {/* Contraseña */}
                    <Text style={loginStyles.label}>Contraseña</Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='*****'
                        placeholderTextColor="black"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />
                    {/* Boton login */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onSignIn}
                        >
                            <Text style={loginStyles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}

                            onPress={() => navigation.replace('Login')}
                        >
                            <Text style={loginStyles.buttonText}>Ir Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default RegisterScreen;