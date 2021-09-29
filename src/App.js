import React from 'react';
import './App.css';
import Contacts from './Module/Contacts/Contacts';
import TrainingAddOption from './Module/Contacts/TrainingAddOption';

const App = () => {
    return (
        <div className="App">
            <Contacts/>
            <TrainingAddOption/>
        </div>
    
    );
};

export default App;