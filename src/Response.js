import React from 'react';
import './App.css'

export default function Response({active, message}){
    return active ? (
        <div className="resp">
            {message}
        </div>
    ) : null
}