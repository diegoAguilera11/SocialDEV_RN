

import { View, Text } from 'react-native'
import React from 'react'


//Tipo Acciones
//signUp
//addError
//removeError
//notAuthenticated
//logout

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                errorMessage: [],
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'signUp':
            return {
                ...state,
                errorMessage: [],
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user,
            }

        case 'logOut':
        case 'notAuthenticated':
            return {
                ...state,
                errorMessage: [],
                status: 'not-authenticated',
                token: null,
                user: null
            }

        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: []
            }

        default:
            return state;
    }
}