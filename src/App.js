import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button style={{backgroundColor: "red"}}>Click Me</Button>
                <Button style={{backgroundColor: "blue"}}>Click Me</Button>
                <Button >Click Me</Button>
            </header>
        </div>
    );
}

const defaultButtonStyle = {
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: 5,
    padding: 10,
    outline: "none",
    margin: 5
};

function Button(props) {
    const buttonStyle= {...defaultButtonStyle, ...props.style};
    return <button style={buttonStyle}>{props.children}</button>
}

export default App;
