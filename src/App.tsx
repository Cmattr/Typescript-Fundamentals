import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeScriptFunctions from './components/definingbasicTypeScriptFunctions';
import ColorList from './components/colorList';
import EvenNumbersList from './components/filterNumbers';
import UserList from './components/userList';

const App: React.FC = () => {
    return (
        <div>
            <TypeScriptFunctions a={5} b={10} />
            <ColorList />
            <EvenNumbersList />
            <UserList />

        </div>
    );
}

export default App;