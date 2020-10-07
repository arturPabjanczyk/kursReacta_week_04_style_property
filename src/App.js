import React from 'react';
import './App.css';

function App() {
    const buttonStyle = {backgroundColor: "red"};
    return (
        <div className="App">
            <header className="App-header">
                <Button style={buttonStyle}>Click Me</Button>
            </header>
        </div>
    );
}

function Button(props) {
    const defaultButtonStyle = {
        fontSize: 20,
        color: "white",
        backgroundColor: "green",
        border: "none",
        borderRadius: 5,
        padding: 10,
        outline: "none"
    };
    const buttonStyle= {...defaultButtonStyle, ...props.style};
    return <button style={buttonStyle}>{props.children}</button>
}

export default App;
