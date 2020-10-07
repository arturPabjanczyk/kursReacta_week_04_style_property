import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button type="danger">Click Me</Button>
                <Button type="primary">Click Me</Button>
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
    const buttonStyle= {...defaultButtonStyle};
    if (props.type === "primary") {
        buttonStyle.backgroundColor = "blue"
    } else if (props.type === "danger") {
        buttonStyle.backgroundColor = "red"
    }
    return <button style={buttonStyle}>{props.children}</button>
}

export default App;
