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
                <Button style={buttonStyle}>Click Me</Button>
            </header>
        </div>
    );
}

function Button(props) {
    return <button style={props.style}>{props.children}</button>
}

export default App;
