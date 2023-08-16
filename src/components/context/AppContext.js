import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AppContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
