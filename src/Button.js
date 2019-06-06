import React from 'react';
import './App.css'

export default function Button({onPress, isDisabled, label}){
    return (
        <div className="button" onClick={isDisabled ? () => {} : () => onPress()}>
            {label}
        </div>
    )
}