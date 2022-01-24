import React from 'react';

function ValueSnippet(props) {
    return (
        <div>
            <div>
                <h3>COIN</h3>
                <h4>{props.coin}</h4>
            </div>
            <div>
                <h3>1 BTC</h3>
                <h4>{props.rate}</h4>
            </div>
        </div>
    );
}

export default ValueSnippet;