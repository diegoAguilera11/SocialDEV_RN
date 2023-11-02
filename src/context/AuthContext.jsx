import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';
import userApi from '../api/userApi';


// Estado inicial del contexto
const authInitialState = {
    //Status = checking, authenticated, not-authenticated
    status: 'checking',
    token: null,
    user: null,
    errorMessage: []
}
// Crear el contexto
export const AuthContext = createContext();

// Crear Provider
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signUp = async ({ name, email, password }) => {
        try {
            const { data } = await userApi.post('/register', { name, email, password });
            console.log(data.user);
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.user
                }
            });

        } catch (error) {
            console.log(error.response.data.errors)
            dispatch({
                type: 'addError',
                payload: error.response.data.errors
            })
        }
    }
    const signIn = async ({ email, password }) => {
        try {
            const response = await userApi.post('/login', { email, password });
                dispatch({
                    type: 'signIn',
                    payload: {
                        token: response.data.token,
                        user: response.data.user
                    }
                })

        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: 'addError',
                payload: error.response.data.errors
            })
        }
    }
    const logOut = () => {
        dispatch({
            type: 'logOut',
        })
    }

    const removeError = () => {
        dispatch({ type: 'removeError' })
    }
    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signUp,
                logOut,
                removeError
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}