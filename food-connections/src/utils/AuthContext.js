// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();
const UserContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => useContext(AuthContext);
export const useUser = () => useContext(UserContext);

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        // Initialize token from localStorage if it exists
        return localStorage.getItem('accessToken') || '';
    });

    



    const saveToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('accessToken', newToken);
    };

    const removeToken = () => {
        setToken('');
        localStorage.removeItem('accessToken');
    };

    useEffect(() => {
        // Optional: Implement logic to refresh or validate the token here
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, saveToken, removeToken }}>
            {children}
        </AuthContext.Provider>
    );
};