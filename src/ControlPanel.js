import React from 'react';


function ControlPanel(props) {
    return (
        <div>
            <button onClick={props.onClickGba}>GBP</button>
            <button onClick={props.onClickEur}>EUR</button>
            <button onClick={props.onClickUsd}>USD</button> 
        </div>
    );
}

export default ControlPanel;