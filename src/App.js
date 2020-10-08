import React from 'react';
import styled from '@emotion/styled'
import './App.css';

const EmotionButton = styled.button`
    --hover-background: darkgreen;
    --active-background: lightgreen;
    font-size: 20px;
    color: white;
    background-color: ${props => props.backgroundColor || "darkmagenta"};
    border: none;
    border-radius: ${props => props.borderRadius || 5}px;
    padding: 10px;
    outline: none;
    margin: 5px;
    
    &:hover {
        background-color: var(--hover-background);
    }

    &:active {
        background-color: var(--active-background);
    }
`

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button type="danger">Click Me</Button>
                <Button type="primary">Click Me</Button>
                <Button>Click Me</Button>
                <EmotionButton borderRadius={15} backgroundColor = "green">And Me!</EmotionButton>
            </header>
        </div>
    );
}

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
    return <button className="Button" style={buttonStyle}>{props.children}</button>
}

export default App;
