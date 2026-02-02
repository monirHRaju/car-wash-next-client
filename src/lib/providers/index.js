import UserContextProvider from '@/context/user.context';
import React from 'react';

const Providers = ({ children}) => {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    );
};

export default Providers;