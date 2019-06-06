import React from 'react';
import './App.css'

export default function Error({error, errorMsg}){
    return error ? (
        <div className="err">
            {errorMsg}
        </div>
    ) : null
}