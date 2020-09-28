import React, { createContext , useCallback, useState } from 'react';
import api from '../services/api';

interface SignIntCredendials {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: object;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignIntCredendials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>(
     {} as AuthContextData,
 );

const AuthProvider: React.FC = ({ children }) => {
     const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@EasyBarber:token');
        const user = localStorage.getItem('@EasyBarber:user');

        if (token && user ) {
            return { token, user: JSON.parse(user)};
        }
        return {} as AuthState;
     });

     const signIn = useCallback(async ({ email, password })=>{
         const response = await api.post('sessions', {
             email,
             password
         });
         const { token, user } = response.data;

         localStorage.setItem('@EasyBarber:token', token);
         localStorage.setItem('@EasyBarber:user', JSON.stringify(user));

         setData({ token, user});
     },[]);

    return(
        <AuthContext.Provider value={{ user: data.user, signIn }} >
            {children}
        </AuthContext.Provider>
    );
 };

 export  { AuthContext, AuthProvider }
