import React from 'react';
import './App.css';

function App() {
    const buttonStyle = {
        "font-size": "30px"
    }
    return (
        <div className="App">
            <header className="App-header">
                <button style={buttonStyle}>Click Me</button>
            </header>
        </div>
    );
}

export default App;
