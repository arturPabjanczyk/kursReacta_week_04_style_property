import React from 'react';
import './App.css';

function App() {
    const buttonStyle = {
        fontSize: 20,
        color: "white",
        backgroundColor: "red",
        border: "none",
        borderRadius: 5,
        padding: 10,
        outline: "none"
    };
    return (
        <div className="App">
            <header className="App-header">
                <button style={buttonStyle}>Click Me</button>
            </header>
        </div>
    );
}

export default App;
