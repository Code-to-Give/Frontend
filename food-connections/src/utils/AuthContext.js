// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        // Initialize token from localStorage if it exists
        return localStorage.getItem('accessToken') || '';
    });

    const [user, setUser] = useState(() => {
        return localStorage.getItem('user') || '';
    })    



    const saveToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('accessToken', newToken);
    };

    const saveUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem('user', newUser);
    }

    const removeToken = () => {
        setToken('');
        localStorage.removeItem('accessToken');
    };

    const removeUser = () => {
        setUser('');
        localStorage.removeItem('user');
    }

    useEffect(() => {
        // Optional: Implement logic to refresh or validate the token here
    }, [token, user]);

    return (
        <AuthContext.Provider value={{ token, saveToken, removeToken, user, saveUser, removeUser }}>
            {children}
        </AuthContext.Provider>
    );
};