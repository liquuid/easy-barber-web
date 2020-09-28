import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import authContext from './context/AuthContext';

const App: React.FC = () => (
    <>
        <authContext.Provider value={{ name: 'Foo'}}>
            <SignIn/>
        </authContext.Provider>
        <GlobalStyle/>
    </>
);

export default App;
