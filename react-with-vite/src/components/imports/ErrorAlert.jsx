import React from 'react';

export default function ErrorAlert(props) {
    return (
    <div>
        <button onClick={props.clearError}>{props.errorMessage} </button>
    </div>
    )
}