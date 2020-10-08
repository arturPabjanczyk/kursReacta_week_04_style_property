import React from 'react';
import styled from "styled-components";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button type="danger">Click Me</Button>
                <Button type="primary">Click Me</Button>
                <Button>Click Me</Button>
                <StyledButton>Click Me Too!</StyledButton>
            </header>
        </div>
    );
}

const StyledButton = styled.button`
    --normal-background: green;
    --hover-background: darkgreen;
    --active-background: lightgreen;
    --border-radius: 5px;
    font-size: 20px;
    color: white;
    background-color: var(--normal-background);
    border: none;
    border-radius: var(--border-radius);
    padding: 10px;
    outline: none;
    margin: 5px;
    
    &:hover {
        background-color: var(--hover-background);
    }

    &:active {
        background-color: var(--active-background);
    }
`;

function Button(props) {
    const buttonStyle = {};
    if (props.type === "primary") {
        buttonStyle["--normal-background"] = "blue"
        buttonStyle["--hover-background"] = "darkblue"
        buttonStyle["--active-background"] = "lightblue"
    } else if (props.type === "danger") {
        buttonStyle["--normal-background"] = "red"
        buttonStyle["--hover-background"] = "darkred"
        buttonStyle["--active-background"] = "pink"
    }
    buttonStyle["--border-radius"] = "10px";
    return <StyledButton style={buttonStyle}>{props.children}</StyledButton>
}

export default App;
